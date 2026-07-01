import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    productCategory: {
      type: String,
      required: true,
    },

    brandName: {
      type: String,
      required: true,
    },

    keyFeatures: {
      type: [String],
      required: true,
    },

    targetAudience: {
      type: String,
      required: true,
    },

    aiContent: {
      productDescription: {
        type: String,
      },

      shortDescription: {
        type: String,
      },

      keySellingPoints: {
        type: [String],
      },

      seoKeywords: {
        type: [String],
      },

      productTagline: {
        type: String,
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;