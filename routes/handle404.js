import path from "path";

const handle404 = (req, res) => {
  const file = path.join(process.cwd(), "views/404.html");
  res.status(404).sendFile(file);
};

export default handle404;
