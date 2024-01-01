import { Router } from "express";
import products from "../assets/products.js";
import person from "../assets/person.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from my API" });
});

router.get("/products", (req, res) => {
  res.json({ data: products });
});

router.get("/person", (req, res) => {
  res.json({ data: person });
});

export default router;
