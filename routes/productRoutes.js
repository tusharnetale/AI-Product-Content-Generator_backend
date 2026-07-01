import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  generateContent,
  regenerateContent,
  getHistory,
  getSingleProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Generate AI Content & Save
router.post("/generate", authMiddleware, generateContent);

// Get All Products of Logged-in User
router.get("/history", authMiddleware, getHistory);

// Get Single Product
router.get("/:id", authMiddleware, getSingleProduct);

// Regenerate AI Content
router.put("/regenerate/:id", authMiddleware, regenerateContent);

// Delete Product
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
