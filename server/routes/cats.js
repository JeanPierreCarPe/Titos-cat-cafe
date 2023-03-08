import express from "express";
import { getCats } from "../controllers/cat.js";

const router = express.Router();

/* READ */
router.get("/", getCats);

export default router;