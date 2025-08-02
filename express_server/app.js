import express from "express";
import cors from "cors";
import path from "path";
// Import routes
import dyRouteParam from "../routes/dyRouteParam.js";
import queryParamRouter from "../routes/queryParam.js";
import formRoutes from "../formsubmission/getForm.js";
import handle404 from "../routes/handle404.js";
import productRoute from "../routes/productRoute.js";
import connectDB from "../mongodb/db_conn.js";
import authRoute from "../routes/authRoute.js";
import cookieParser from "cookie-parser";
const app = express();

// allow CORS for specific origin
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Serve static files (for CSS/JS if needed)
app.use(express.static(path.join(process.cwd(), "views")));
app.use(cookieParser())
// Use routes
app.use("/", dyRouteParam);
app.use("/", queryParamRouter);
app.use("/", formRoutes);
app.use("/", productRoute);
app.use("/", authRoute);
// 404 handler middleware
app.use(handle404);

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();