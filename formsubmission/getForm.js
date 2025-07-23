import express from "express";
const app = express();
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle POST request from form
app.post("/details", (req, res) => {
  console.log("Form Data Received:", req.body);

  // Send a success message back
  res.send(`
    <h1>Thank You, ${req.body.name}!</h1>
    <p>Your message: "${req.body.message}" was received.</p>
    <a href="/">Go Back</a>
  `);
});
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
