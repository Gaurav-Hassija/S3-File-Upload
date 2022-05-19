import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../config/s3-config";
import "dotenv/config";

var folder: string;

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME!,
    //acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      folder = file.mimetype.split("/")[0];
      cb(null, `${folder}/${file.originalname}`);
    },
  }),
});
