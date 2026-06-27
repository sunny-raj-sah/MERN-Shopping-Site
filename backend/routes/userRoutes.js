 
import express from "express";

import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET Profile
router.get("/profile", protect, getUserProfile);

// UPDATE Profile
router.put("/profile", protect, updateUserProfile);

export default router;
 
