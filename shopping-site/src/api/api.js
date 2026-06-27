 const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Generic API Request Function
 * @param {string} endpoint - API endpoint (e.g. "/products")
 * @param {string} method - GET, POST, PUT, DELETE
 * @param {Object|null} body - Request body
 * @param {boolean} auth - Whether JWT token is required
 */

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  auth = false
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // Add JWT Token if required
  if (auth) {
    const token = localStorage.getItem("token");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const options = {
    method,
    headers,
  };

  // Add body for POST / PUT
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};