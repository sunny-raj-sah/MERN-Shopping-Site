import express from "express";

import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// GET All Products
router.get("/", getAllProducts);

// GET Product By ID
router.get("/:id", getProductById);

export default router;