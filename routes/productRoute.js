import express from "express"
import {getAllProducts}  from "../controllers/productController.js"
import {getProduct}  from "../controllers/productController.js"
const router = express.Router();
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
export default router;
