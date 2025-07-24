import express from "express";
const router = express.Router();
router.get("/product-data", (req, res) => {
try{
    res.send(//*use this for e.g :- product-data?search=iphone&limit=10
    `<h1>showing the ${req.query.limit} result for  <strong>${req.query.search}</strong></h1>`
  )
}catch(err){
    console.error("Error processing request:", err);
    res.status(500).send("Internal Server Error");}
})

export default router;