import express from "express";
import path from "path";
const app = express();

app.get("/",(req, res) => {
    res.send("<h1>this is current route!</h1>");
});
// *Middleware function  to handle  404 errors
app.use((req, res) => {
    const file = path.join(import.meta.dirname, "../views/404.html")
    res.sendFile(file);
});

let PORT = 5500;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
