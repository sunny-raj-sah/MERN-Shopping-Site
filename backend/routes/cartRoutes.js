 
import express from "express";

import {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
} from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCart);

router.post("/:productId", protect, addToCart);

router.put("/:productId", protect, updateCartQuantity);

router.delete("/:productId", protect, removeFromCart);

export default router;
 
