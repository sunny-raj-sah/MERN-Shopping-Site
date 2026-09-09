//  export const filterProducts = (
//   products,
//   productState,
//   searchValue
// ) => {
//   let filteredProducts = [...products];

// //brand
//   if (productState.selectedBrand.length > 0) {
//   filteredProducts = filteredProducts.filter((product) =>
//     productState.selectedBrand.includes(product.brand)
//   );
// }
  
//   // Search
//   if (searchValue.trim() !== "") {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.title
//         .toLowerCase()
//         .includes(searchValue.toLowerCase())
//     );
//   }

//   // Category
//   if (productState.selectedCategory.length > 0) {
//     filteredProducts = filteredProducts.filter((product) =>
//       productState.selectedCategory.includes(product.category)
//     );
//   }

//  // Sub Category
// if (
//   productState.selectedSubCategory &&
//   productState.selectedSubCategory.length > 0
// ) {
//   filteredProducts = filteredProducts.filter((product) =>
//     productState.selectedSubCategory.includes(product.subCategory)
//   );
// }

// // Rating
// console.log("Selected Rating:", productState.selectedRating);

// filteredProducts = filteredProducts.filter((product) => {
//   console.log(
//     product.title,
//     product.rating,
//     Number(product.rating) >= Number(productState.selectedRating)
//   );

//   return (
//     Number(product.rating) >= Number(productState.selectedRating)
//   );
// });
//   // Price
//   filteredProducts = filteredProducts.filter(
//     (product) =>
//       product.price <= productState.selectedPrice
//   );

//   // Sort
//   if (productState.sortBy === "LOW_TO_HIGH") {
//     filteredProducts.sort((a, b) => a.price - b.price);
//   }

//   if (productState.sortBy === "HIGH_TO_LOW") {
//     filteredProducts.sort((a, b) => b.price - a.price);
//   }
 

 
//   return filteredProducts;
// };


// ------------------------------------------------------------


 
export const filterProducts = (
  products = [],
  productState = {},
  searchValue = ""
) => {
  let filteredProducts = Array.isArray(products) ? [...products] : [];

  const {
    selectedBrand = [],
    selectedCategory = [],
    selectedSubCategory = [],
    selectedRating = 0,
    selectedPrice = Infinity,
    sortBy = "",
  } = productState;

  // Brand
  if (
    Array.isArray(selectedBrand) &&
    selectedBrand.length > 0
  ) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedBrand.includes(product?.brand)
    );
  }

  // Search
  const search = String(searchValue || "").trim().toLowerCase();

  if (search !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      const title = String(product?.title || "").toLowerCase();

      return title.includes(search);
    });
  }

  // Category
  if (
    Array.isArray(selectedCategory) &&
    selectedCategory.length > 0
  ) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategory.includes(product?.category)
    );
  }

  // Sub Category
  if (
    Array.isArray(selectedSubCategory) &&
    selectedSubCategory.length > 0
  ) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedSubCategory.includes(product?.subCategory)
    );
  }

  // Rating
  const rating = Number(selectedRating);

  if (!Number.isNaN(rating) && rating > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return Number(product?.rating || 0) >= rating;
    });
  }

  // Price
  const price = Number(selectedPrice);

  if (!Number.isNaN(price)) {
    filteredProducts = filteredProducts.filter((product) => {
      return Number(product?.price || 0) <= price;
    });
  }

  // Sort
  if (sortBy === "LOW_TO_HIGH") {
    filteredProducts.sort(
      (a, b) => Number(a?.price || 0) - Number(b?.price || 0)
    );
  }

  if (sortBy === "HIGH_TO_LOW") {
    filteredProducts.sort(
      (a, b) => Number(b?.price || 0) - Number(a?.price || 0)
    );
  }

  return filteredProducts;
};

