"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const S3_routes_1 = require("./routes/S3-routes");
const not_found_1 = require("./Middleware/not-found");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", S3_routes_1.route);
app.use(not_found_1.notFound);
app.listen(process.env.PORT, () => {
    console.log(`Server Running on http://localhost:${process.env.PORT}`);
});
