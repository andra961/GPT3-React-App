import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(4000, () => {
  console.log("app served on port 4000");
});
