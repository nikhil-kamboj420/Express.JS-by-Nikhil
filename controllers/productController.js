//! product controller to handle product data
import Product from "../model/products.js";

// ? Sending all products to the client
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length > 0) {
      console.log(products);
      res.json(products);
    } else {
      res.status(404).send("No products found");
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
