import connectSqlDB from "./db_conn.js";

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

    // !insert  user into usertable
    const insertQuery =
      "INSERT INTO usertable (username, password, email) VALUES (?, ?, ?)";
    await db.query(insertQuery, [username, password, email]);
    console.log("User inserted");

    // ! fetching all users from usertable
    const [rows] = await db.query("SELECT * FROM usertable");
    console.log(rows);
  } catch (err) {
    console.error("❌ Error creating usertable:", err.message);
  }
};
