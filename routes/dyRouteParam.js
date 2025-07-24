import express from "express";
const router = express.Router();

router.get("/profile/:username/:slug", (req, res) => {
  res.send(`<h1>welcome ${req.params.username} !</h1>
    <h1> ${req.params.slug.replace(/-/g, " ")} !</h1>
    `);
});

router.get("/product/:productName", (req, res) => {
  res.send(`<h1> ${req.params.productName}  is out of Stocks! </h1>
    `);
});

export default router;
