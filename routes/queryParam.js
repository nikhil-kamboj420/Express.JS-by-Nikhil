import express from "express";
const app = express();
app.get("/product", (req, res) => {
  res.send(
    `<h1>showing the ${req.query.limit} result for  <strong>${req.query.search}</strong></h1>`
  );
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
