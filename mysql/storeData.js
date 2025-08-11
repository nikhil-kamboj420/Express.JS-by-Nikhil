import connectSqlDB from "./db_conn.js";
import bcrypt from "bcryptjs";
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

export const loginUser = async (email, password,res) => {
  try {
    const db = await connectSqlDB();

    // 1) Check user exist
    const [rows] = await db.query("SELECT * FROM usertable WHERE email = ?", [email]);
    if (rows.length === 0) {
      console.log("❌ User not found");
      return;
    }

    const user = rows[0];

    // 2) Compare password with hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid password");
      return res.status(401).send({ message: "Invalid email or password" });
    }
    res.status(201).send("User found successfully");
    console.log("✅ Login successful", user);
  } catch (err) {
    console.error("❌ Error logging in:", err.message);
  }
};