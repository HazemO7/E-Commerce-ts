import express from "express";
import { getAllProducts } from "../services/productService.js";
const router = express.Router();

router.get('/', async (req, res) => {
  const porudct = await getAllProducts();
  res.status(200).send(porudct);
})

export default router;