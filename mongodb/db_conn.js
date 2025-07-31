import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import Product from "../model/products.js";
import fs from "fs";
// read json data
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = fs.readFileSync(
  path.join(__dirname, "../API/products.json"),
  "utf-8"
);
const products = JSON.parse(data);
async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/productDB"
    );
    console.log("Connected to MongoDB Atlas");
    //     await Product.deleteMany({}); // Clear old products
    // console.log("Old products deleted");

    // await Product.insertMany(products);
    // console.log("New products inserted");

    // mongoose.disconnect();
  } catch (err) {
    console.error("DB Error:", err.message);
    process.exit(1);
  }
}
connectDB();

export default connectDB;
