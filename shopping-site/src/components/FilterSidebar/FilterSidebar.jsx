// import { useProducts } from "../../context/ProductContext";

// const FilterSidebar = () => {
//   const { state, dispatch } = useProducts();

//   // const categories = [
//   //   "Men Clothing",
//   //   "Women Clothing",
//   //   "Electronics",
//   //   "Home",
//   // ];

//   const categories = [
//   ...new Set(state.products.map((product) => product.category)),
// ];

//   const handleCategoryChange = (category) => {
//     let updatedCategory = [...state.selectedCategory];

//     if (updatedCategory.includes(category)) {
//       updatedCategory = updatedCategory.filter(
//         (item) => item !== category
//       );
//     } else {
//       updatedCategory.push(category);
//     }

//     dispatch({
//       type: "SET_CATEGORY",
//       payload: updatedCategory,
//     });
//   };

//   return (
//     <div className="bg-light p-4 vh-100 sticky-top">

//       <div className="d-flex justify-content-between align-items-center mb-4">

//         <h3 className="fw-bold mb-0">
//           Filters
//         </h3>

//         <button
//           className="btn btn-link text-dark p-0"
//           onClick={() =>
//             dispatch({
//               type: "CLEAR_FILTERS",
//             })
//           }
//         >
//           Clear
//         </button>

//       </div>

//       {/* Price */}

//       <div className="mb-5">

//         <h4 className="fw-bold mb-3">
//           Price
//         </h4>

//         <div className="d-flex justify-content-between text-secondary mb-2">

//           <span>0</span>
//           <span>60000</span>
//           <span>120000</span>

//         </div>

//         <input
//           type="range"
//           min="0"
//           max="120000"
//            step="1000"
//           value={state.selectedPrice}
//           className="form-range"
//           onChange={(e) =>
//             dispatch({
//               type: "SET_PRICE",
//               payload: Number(e.target.value),
//             })
//           }
//         />

//       </div>

//       {/* Category */}

//       <div className="mb-5">

//         <h4 className="fw-bold mb-3">
//           Category
//         </h4>

//         {categories.map((category) => (

//           <div className="form-check mb-2" key={category}>

//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={state.selectedCategory.includes(category)}
//               onChange={() => handleCategoryChange(category)}
//             />

//             <label className="form-check-label">

//               {category}

//             </label>

//           </div>

//         ))}

//       </div>

//       {/* Rating */}

//       <div className="mb-5">

//         <h4 className="fw-bold mb-3">
//           Rating
//         </h4>

//         {[4, 3, 2, 1].map((rating) => (

//           <div className="form-check mb-2" key={rating}>

//             <input
//               className="form-check-input"
//               type="radio"
//               name="rating"
//               checked={state.selectedRating === rating}
//               onChange={() =>
//                 dispatch({
//                   type: "SET_RATING",
//                   payload: rating,
//                 })
//               }
//             />

//             <label className="form-check-label">

//               {rating} Stars & above

//             </label>

//           </div>

//         ))}

//       </div>

//       {/* Sort */}

//       <div>

//         <h4 className="fw-bold mb-3">
//           Sort by
//         </h4>

//         <div className="form-check mb-2">

//           <input
//             className="form-check-input"
//             type="radio"
//             name="sort"
//             checked={state.sortBy === "LOW_TO_HIGH"}
//             onChange={() =>
//               dispatch({
//                 type: "SET_SORT",
//                 payload: "LOW_TO_HIGH",
//               })
//             }
//           />

//           <label className="form-check-label">

//             Price - Low to High

//           </label>

//         </div>

//         <div className="form-check">

//           <input
//             className="form-check-input"
//             type="radio"
//             name="sort"
//             checked={state.sortBy === "HIGH_TO_LOW"}
//             onChange={() =>
//               dispatch({
//                 type: "SET_SORT",
//                 payload: "HIGH_TO_LOW",
//               })
//             }
//           />

//           <label className="form-check-label">

//             Price - High to Low

//           </label>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default FilterSidebar;

// ------------------------------------------------
import { useProducts } from "../../context/ProductContext";

const FilterSidebar = () => {
  const { state, dispatch } = useProducts();

  // ==========================
  // Categories
  // ==========================
  // const categories = [
  //   ...new Set(state.products.map((product) => product.category)),
  // ];
  const brands = [...new Set(state.products.map((product) => product.brand))];

  // ==========================
  // Category Handler
  // ==========================
  // const handleCategoryChange = (category) => {
  //   let updatedCategories = [...state.selectedCategory];

  //   if (updatedCategories.includes(category)) {
  //     updatedCategories = updatedCategories.filter(
  //       (item) => item !== category
  //     );
  //   } else {
  //     updatedCategories.push(category);
  //   }

  //   dispatch({
  //     type: "SET_CATEGORY",
  //     payload: updatedCategories,
  //   });
  // };

  const handleBrandChange = (brand) => {
    let updatedBrands = [...state.selectedBrand];

    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((item) => item !== brand);
    } else {
      updatedBrands.push(brand);
    }

    dispatch({
      type: "SET_BRAND",
      payload: updatedBrands,
    });
  };
  return (
    <div
      className="bg-white border-end sticky-top p-4"
      style={{
        top: "76px",
        height: "calc(100vh - 76px)",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Filters</h4>

        <button
          className="btn btn-sm btn-link text-decoration-none"
          onClick={() =>
            dispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear
        </button>
      </div>

      {/* ========================= */}
      {/* Category */}
      {/* ========================= */}

      <div className="mb-5">
        <h5 className="fw-bold mb-3">Shop by Category</h5>

        {/* {categories.map((category) => ( */}
        {brands.map((brand) => (
          <div className="form-check mb-2" key={brand}>
            <input
              className="form-check-input"
              type="checkbox"
              // checked={state.selectedCategory.includes(category)}
              checked={state.selectedBrand.includes(brand)}
              onChange={() => handleBrandChange(brand)}
              // onChange={() => handleCategoryChange(category)}
            />

            <label className="form-check-label">{brand}</label>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* Price */}
      {/* ========================= */}

      <div className="mb-5">
        <h5 className="fw-bold mb-3">Price</h5>

        <div className="d-flex justify-content-between small text-muted">
          <span>₹0</span>

          <span>₹{state.selectedPrice.toLocaleString()}</span>

          <span>₹120000</span>
        </div>

        <input
          className="form-range mt-2"
          type="range"
          min="0"
          max="120000"
          step="1000"
          value={state.selectedPrice}
          onChange={(e) =>
            dispatch({
              type: "SET_PRICE",
              payload: Number(e.target.value),
            })
          }
        />
      </div>

      {/* ========================= */}
      {/* Rating */}
      {/* ========================= */}

      <div className="mb-5">
        <h5 className="fw-bold mb-3">Rating</h5>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            checked={state.selectedRating === 0}
            onChange={() =>
              dispatch({
                type: "SET_RATING",
                payload: 0,
              })
            }
          />

          <label className="form-check-label">All Ratings</label>
        </div>

        {[4, 3, 2, 1].map((rating) => (
          <div className="form-check mb-2" key={rating}>
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              checked={state.selectedRating === rating}
              onChange={() =>
                dispatch({
                  type: "SET_RATING",
                  payload: rating,
                })
              }
            />

            <label className="form-check-label">{rating} ★ & Above</label>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* Sort */}
      {/* ========================= */}

      <div>
        <h5 className="fw-bold mb-3">Sort By</h5>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            checked={state.sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              dispatch({
                type: "SET_SORT",
                payload: "LOW_TO_HIGH",
              })
            }
          />

          <label className="form-check-label">Price : Low to High</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            checked={state.sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              dispatch({
                type: "SET_SORT",
                payload: "HIGH_TO_LOW",
              })
            }
          />

          <label className="form-check-label">Price : High to Low</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
