import Product from "../models/Product.js";
import { generateProductContent } from "../services/geminiService.js";

export const generateContent = async (req, res) => {
  try {
    const {
      productName,
      productCategory,
      brandName,
      keyFeatures,
      targetAudience,
    } = req.body;

    if (
      !productName ||
      !productCategory ||
      !brandName ||
      !keyFeatures ||
      !targetAudience
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // generate ai vala content
    const aiContent = await generateProductContent({
      productName,
      productCategory,
      brandName,
      keyFeatures,
      targetAudience,
    });

    // Save hoga mongoDB
    const product = await Product.create({
      productName,
      productCategory,
      brandName,
      keyFeatures,
      targetAudience,

      aiContent,

      userId: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Content Generated Successfully",
      product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// regenerate karta hai 
export const regenerateContent = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const aiContent = await generateProductContent({
      productName: product.productName,
      productCategory: product.productCategory,
      brandName: product.brandName,
      keyFeatures: product.keyFeatures,
      targetAudience: product.targetAudience,
    });

    product.aiContent = aiContent;

    await product.save();

    res.json({
      success: true,
      message: "Content regenerated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Save Generated Product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      userId: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Product Saved",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// History
export const getHistory = async (req, res) => {
  try {
    const products = await Product.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Single Product
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
