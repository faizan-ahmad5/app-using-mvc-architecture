import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.mjs";
import userRoutes from "./routes/userRoutes.mjs";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
