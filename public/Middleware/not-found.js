"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        error: "Page Not Found",
        message: "Requested URL is not found!",
    });
};
exports.notFound = notFound;
