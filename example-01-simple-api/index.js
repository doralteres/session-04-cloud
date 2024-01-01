import express from "express";
import morgan from "morgan";

import apiRouter from "./api/index.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("short"));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
