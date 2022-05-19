import express from "express";
import { upload } from "../Middleware/S3-upload";

export const route: any = express.Router();

route.post("/upload", upload.single("file"), (req: any, res: any) => {
  res.status(200).json({
    message: "File Uploaded Successfully",
  });
});
