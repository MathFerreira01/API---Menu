import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.route("/").get((Request, res: Response) => {
  res.status(200).send({ title: "API Menu" });
});

app.use(express.json());

app.listen(PORT, () => console.log("Server is running on PORT 3000"));
