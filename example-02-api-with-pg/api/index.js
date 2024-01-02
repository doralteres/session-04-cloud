import { Router } from "express";
import person from "../assets/person.js";
import sequelizeCrud from "express-sequelize-autocrud";
import { products, sequelize } from "../db.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from my API" });
});

router.get("/person", (req, res) => {
  res.json({ data: person });
});

router.use(
  "/products",
  sequelizeCrud(sequelize, {
    "/": { model: products, operations: { getList: {}, create: {} } },
  })
);

export default router;
