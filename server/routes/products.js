import express from "express";
import { getProducts } from "../controllers/product.js";

const router = express.Router();

/* READ */
router.get("/products", getProducts);

export default router;
