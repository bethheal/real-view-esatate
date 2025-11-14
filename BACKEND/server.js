import express from "express";
import dotenv from "dotenv";
import cors from "cors";                 // ✅ Add this
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { PrismaClient } from "@prisma/client";
import passport from "passport";

dotenv.config();

const app = express();

// ✅ CORS FIX
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

const prisma = new PrismaClient();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

//Connect Database
async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
