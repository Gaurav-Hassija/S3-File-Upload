"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const S3_upload_1 = require("../Middleware/S3-upload");
exports.route = express_1.default.Router();
exports.route.post("/upload", S3_upload_1.upload.single("file"), (req, res) => {
    res.status(200).json({
        message: "File Uploaded Successfully",
    });
});
