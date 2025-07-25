import express from "express";
import cors from "cors";
// Import routes
import dyRouteParam from "../routes/dyRouteParam.js";
import queryParamRouter from "../routes/queryParam.js";
import formRoutes from "../formsubmission/getForm.js";
import handle404 from "../routes/handle404.js";
import productRoute from "../routes/productRoute.js";

const app = express();

// allow CORS for specific origin
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Use routes
app.use("/", dyRouteParam);
app.use("/", queryParamRouter);
app.use("/", formRoutes);
app.use("/", productRoute);

// 404 handler middleware
app.use(handle404);

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
