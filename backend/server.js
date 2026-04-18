import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";

const app = express();
const PORT = parseInt(process.env.PORT || "5001", 10);

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Technotran API listening on port ${PORT}`);
});
