//? Route parameters are dynamic parts of a URL in Express.js
//:username or :slug // slug : - is a unique identifier
import express from "express";
const app = express();
app.get("/profile/:username/:slug", (req, res) => {
  res.send(`<h1>welcome ${req.params.username} !</h1>
    <h1>welcome ${req.params.slug.replace(/-/g, " ")} !</h1>
    `);
});
app.get("/product/:productName", (req, res) => {
  res.send(`<h1> ${req.params.productName}  is out of Stocks! </h1>
    `);
});
let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
