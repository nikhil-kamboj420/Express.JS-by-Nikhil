import connectSqlDB from "./db_conn.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const UserData = async (username, password, email) => {
  try {
    console.log("Creating user with data:", { username, password, email });
    const db = await connectSqlDB();
    // ?creating usertable   with username of usertable

    const usertable = `CREATE TABLE IF NOT EXISTS  usertable (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE
    )`;
    await db.query(usertable);
    console.log("✅ usertable created (or already exists)");

    //? 🔐 password hashing
const hashedPassword  = await bcrypt.hash(password,10)

    // !insert  user into usertable
    const insertQuery =
      "INSERT INTO usertable (username, password, email) VALUES (?, ?, ?)";
    await db.query(insertQuery, [username, hashedPassword, email]);
    console.log("User inserted");

    // ! fetching all users from usertable
    const [rows] = await db.query("SELECT * FROM usertable");
    console.log(rows);
  } catch (err) {
    console.error("❌ Error creating usertable:", err.message);
  }
};

export const loginUser = async (email, password, res) => {
  try {
    const db = await connectSqlDB();

    // 1) Check user exist
    const [rows] = await db.query("SELECT * FROM usertable WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    const user = rows[0];

    // 2) Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    // 3) Create JWT
    const token = jwt.sign(
      { id: user.id, email: user.email }, // payload
      process.env.JWT_SECRET, // secret key
      { expiresIn: "1h" } // token expiry
    );

    // 4) Send token in cookie
    res.cookie("token", token, {
      httpOnly: true, // can't access from JS
      secure: false, // true in production (https)
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 1000 // 1 hour
    });

    // 5) Send success
    res.status(200).send({ message: "Login successful" });

    console.log("✅ Login successful", user);
  } catch (err) {
    console.error("❌ Error logging in:", err.message);
    res.status(500).send({ message: "Server error" });
  }
};