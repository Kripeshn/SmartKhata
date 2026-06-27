import express from "express";
import cors from "cors";

import healthRoute from "./routes/health.route";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/health", healthRoute);

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 SmartKhata Backend Running");
});

export default app;