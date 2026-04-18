import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);

app.listen(PORT, () => {
  console.log(`Technotran API listening on http://localhost:${PORT}`);
});
