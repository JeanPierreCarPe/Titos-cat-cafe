import express from "express";
import {
  //getUserProfile,
  //getUserOrders,
  // getUserCart,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
//router.get("/:id", verifyToken, getProfile);
//router.get("/:id/orders", verifyToken, getUserOrders);

export default router;
