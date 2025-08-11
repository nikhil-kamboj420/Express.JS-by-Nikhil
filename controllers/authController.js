import path from "path";
import { fileURLToPath } from "url";
import { UserData } from "../mysql/storeData.js";
import { loginUser } from "../mysql/storeData.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getRegisterPage = (req, res) => {
  const file = path.join(`${import.meta.dirname}`, "../views/register.html");
  res.sendFile(file, (err) => {
    if (err) {
      res.status(500).send("Error loading register page: " + err.message);
    }
  });
};

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await UserData(username, password, email);
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error("Error in postRegister:", err.message);
    res.status(500).send("Error registering user: " + err.message);
  }
};

export const getLoginPage = (req, res) => {
  const file = path.join(__dirname, "../views/login.html");
  res.sendFile(file, (err) => {
    if (err) {
      res.status(500).send("Error loading login page: " + err.message);
    }
  });
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await loginUser(email, password, res);
  } catch (err) {
    console.error("Error in postLogin:", err.message);
    res.status(500).send("Error Logging user: " + err.message);
  }
};
export const showProtectedRoute = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/admin.html"));
};
