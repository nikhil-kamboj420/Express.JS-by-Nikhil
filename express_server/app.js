import express from "express";

// Import routes
import dyRouteParam from "../routes/dyRouteParam.js";
// import queryParam from "../routes/queryParam.js";
import queryParamRouter from "../routes/queryParam.js"
import formRoutes from "../formsubmission/getForm.js";
import handle404 from "../routes/handle404.js";

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", dyRouteParam);
app.use("/", queryParamRouter);
app.use("/", formRoutes);

// 404 handler middleware
app.use(handle404);

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
