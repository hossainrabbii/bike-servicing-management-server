"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, err, statusCode = 404) => {
    res.status(statusCode).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.name) || "Something went wrong",
        error: err,
    });
};
exports.handleError = handleError;
