import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "Hotspot" });
});

app.use(express.json());

app.listen(PORT, () => console.log("Server is running on PORT 3000"));
