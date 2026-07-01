import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("Gemini API Key:", process.env.GEMINI_API_KEY);
export const generateProductContent = async (productData) => {
  const {
    productName,
    productCategory,
    brandName,
    keyFeatures,
    targetAudience,
  } = productData;

  const features = Array.isArray(keyFeatures)
  ? keyFeatures.join(", ")
  : keyFeatures;

  const prompt = `
Generate ONLY valid JSON.

Product Name: ${productName}
Category: ${productCategory}
Brand: ${brandName}
Features: ${features}
Target Audience: ${targetAudience}

Return:
{
  "productDescription":"",
  "shortDescription":"",
  "keySellingPoints":["","","","",""],
  "seoKeywords":["","","","",""],
  "productTagline":""
}
`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = result.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};