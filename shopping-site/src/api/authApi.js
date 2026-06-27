import { apiRequest } from "./api";

// Register User
export const registerUser = async (userData) => {
  return await apiRequest(
    "/auth/register",
    "POST",
    userData
  );
};

// Login User
export const loginUser = async (credentials) => {
  return await apiRequest(
    "/auth/login",
    "POST",
    credentials
  );
};

// Get Logged In User Profile
export const getProfile = async () => {
  return await apiRequest(
    "/users/profile",
    "GET",
    null,
    true
  );
};