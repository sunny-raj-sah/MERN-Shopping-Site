import { apiRequest } from "./api";

// Get All Products
export const getProducts = async (query = "") => {
  
 return    await apiRequest(`/products${query}`);

 
  
};

// Get Single Product
export const getProductById = async (productId) => {
  return await apiRequest(`/products/${productId}`);
};