import express from "express";
import * as authControllers from "../controllers/authController.js";
const router = express.Router();
router.route("/register")
  .get(authControllers.getRegisterPage)
  .post(authControllers.postRegister);
router
  .route("/login")
  .get(authControllers.getLoginPage)
  .post(authControllers.postLogin);

export default router;
