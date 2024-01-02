import express from "express";
import morgan from "morgan";
import cors from "cors";

import apiRouter from "./api/index.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("short"));

app.use(cors());

app.use(express.static("ui/dist"));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
