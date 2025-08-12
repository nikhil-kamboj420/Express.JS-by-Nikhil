import express from "express";
import * as authControllers from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.route("/register")
  .get(authControllers.getRegisterPage)
  .post(authControllers.postRegister);

router.route("/login")
  .get(authControllers.getLoginPage)
  .post(authControllers.postLogin);

router.get("/admin.html", verifyToken, authControllers.showProtectedRoute);

router.post("/logout", authControllers.logoutUser);

export default router;
