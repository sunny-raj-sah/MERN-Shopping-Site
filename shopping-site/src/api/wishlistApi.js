import { apiRequest } from "./api";

// Get Logged In User Wishlist
export const getWishlist = async () => {
  return await apiRequest(
    "/wishlist",
    "GET",
    null,
    true
  );
};

// Add Product To Wishlist
export const addToWishlist = async (productId) => {
  return await apiRequest(
    `/wishlist/${productId}`,
    "POST",
     null,
    true
  );
};

// Remove Product From Wishlist
export const removeFromWishlist = async (productId) => {
  return await apiRequest(
    `/wishlist/${productId}`,
    "DELETE",
    null,
    true
  );
};