import Product from "../models/Product.js";

// GET /api/products
 export const getAllProducts = async (req, res) => {
  try {
    const { category, search, rating, sort } = req.query;

    const filter = {};

    // Category Filter
    if (category) {
      filter.category = category;
    }

    // Search Filter
    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    // Rating Filter
    if (rating) {
      filter.rating = {
        $gte: Number(rating),
      };
    }

    let query = Product.find(filter);

    // Sorting
    if (sort === "lowToHigh") {
      query = query.sort({ price: 1 });
    }

    if (sort === "highToLow") {
      query = query.sort({ price: -1 });
    }

    const products = await query;

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// pagination

// export const getAllProducts = async (req, res) => {
//   try {
//     const {
//       category,
//       search,
//       rating,
//       sort,
//       page = 1,
//       limit = 12,
//     } = req.query;

//     const filter = {};

//     // Category
//     if (category) {
//       filter.category = category;
//     }

//     // Search
//     if (search) {
//       filter.title = {
//         $regex: search,
//         $options: "i",
//       };
//     }

//     // Rating
//     if (rating) {
//       filter.rating = {
//         $gte: Number(rating),
//       };
//     }

//     let query = Product.find(filter);

//     // Sorting
//     if (sort === "lowToHigh") {
//       query = query.sort({ price: 1 });
//     }

//     if (sort === "highToLow") {
//       query = query.sort({ price: -1 });
//     }

//     // Total Products After Filtering
//     const totalProducts = await Product.countDocuments(filter);

//     // Pagination
//     const currentPage = Number(page);
//     const pageLimit = Number(limit);

//     const skip = (currentPage - 1) * pageLimit;

//     query = query.skip(skip).limit(pageLimit);

//     const products = await query;

//     res.status(200).json({
//       success: true,

//       currentPage,

//       totalPages: Math.ceil(totalProducts / pageLimit),

//       totalProducts,

//       count: products.length,

//       data: products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};