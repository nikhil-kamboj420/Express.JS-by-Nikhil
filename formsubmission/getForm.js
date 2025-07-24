import express from "express";
const router = express.Router();

// Middleware to parse form data
router.use(express.urlencoded({ extended: true }));

// Handle POST request from form
router.post("/details", (req, res) => {
  console.log("Form Data Received:", req.body);

  // Send a success message back
  res.send(`
    <h1>Thank You, ${req.body.name}!</h1>
    <p>Your message: "${req.body.message}" was received.</p>
    <a href="/">Go Back</a>
  `);
});

export default router;
