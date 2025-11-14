import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { permit } from "../middleware/authMiddleware.js";
const router = express.Router();

// Buyer dashboard
router.get("/buyer-dashboard", verifyToken, permit("BUYER"), (req, res) => {
  res.json({ message: "Welcome to the buyer dashboard!", user: req.user });
});

// Agent dashboard
router.get("/agent-dashboard", verifyToken, permit("AGENT"), (req, res) => {
  res.json({ message: "Welcome to the agent dashboard!", user: req.user });
});

export default router;
