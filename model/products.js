import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
