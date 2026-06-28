 export const filterProducts = (
  products,
  productState,
  searchValue
) => {
  let filteredProducts = [...products];

//brand
  if (productState.selectedBrand.length > 0) {
  filteredProducts = filteredProducts.filter((product) =>
    productState.selectedBrand.includes(product.brand)
  );
}
  
  // Search
  if (searchValue.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }

  // Category
  if (productState.selectedCategory.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      productState.selectedCategory.includes(product.category)
    );
  }

 // Sub Category
if (
  productState.selectedSubCategory &&
  productState.selectedSubCategory.length > 0
) {
  filteredProducts = filteredProducts.filter((product) =>
    productState.selectedSubCategory.includes(product.subCategory)
  );
}

// Rating
console.log("Selected Rating:", productState.selectedRating);

filteredProducts = filteredProducts.filter((product) => {
  console.log(
    product.title,
    product.rating,
    Number(product.rating) >= Number(productState.selectedRating)
  );

  return (
    Number(product.rating) >= Number(productState.selectedRating)
  );
});
  // Price
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price <= productState.selectedPrice
  );

  // Sort
  if (productState.sortBy === "LOW_TO_HIGH") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (productState.sortBy === "HIGH_TO_LOW") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
 

 
  return filteredProducts;
};