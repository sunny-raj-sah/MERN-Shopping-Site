import express from "express";

import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAddresses);

router.post("/", protect, addAddress);

router.put("/:addressId", protect, updateAddress);

router.delete("/:addressId", protect, deleteAddress);

export default router;