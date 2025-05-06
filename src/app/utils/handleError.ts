import { Response } from "express";

export const handleError = (res: Response, err: any, statusCode = 404) => {
  res.status(statusCode).json({
    success: false,
    message: err?.name || "Something went wrong",
    error: err,
  });
};
