import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getRegisterPage = (req, res) => {
    const file = path.join(`${import.meta.dirname}`, '../views/register.html');
    res.sendFile(file, (err) => {
        if (err) {
            res.status(500).send("Error loading register page: " + err.message);
        }
    });
};

export const getLoginPage = (req, res) => {
  const file = path.join(__dirname, "../views/login.html");
  res.sendFile(file, (err) => {
    if (err) {
      res.status(500).send("Error loading login page: " + err.message);
    }
  });
};


export const postLogin = (req, res) => {
  res.setHeader("Set-Cookie", "isLoggedIn=true; path=/");
  const file = path.join(__dirname, "../views/login-success.html");
  res.sendFile(file);
};