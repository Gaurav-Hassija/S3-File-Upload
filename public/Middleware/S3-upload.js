"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const s3_config_1 = require("../config/s3-config");
require("dotenv/config");
var folder;
exports.upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3_config_1.s3,
        bucket: process.env.BUCKET_NAME,
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
