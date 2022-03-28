import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(4000, () => {
  console.log("Application started on port 4000!");
});
