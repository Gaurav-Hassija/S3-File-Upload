import express from "express";
import "dotenv/config";
import { route } from "./routes/S3-routes";
import { notFound } from "./Middleware/not-found";
const app = express();

app.use(express.json());
app.use("/api", route);
app.use(notFound);
app.listen(process.env.PORT, () => {
  console.log(`Server Running on http://localhost:${process.env.PORT}`);
});
