import { Request, Response } from "express";
import { handleError } from "../../utils/handleError";
import { bikeService } from "./bike.service";

const addABike = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.addABike(req.body);
    res.status(200).json({
      success: true,
      message: "Bike added successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.getAllBikes();
    res.status(200).json({
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getASpecificBikeById = async (req: Request, res: Response) => {
  try {
    const result = await bikeService.getASpecificBikeById(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

export const bikeController = {
  addABike,
  getAllBikes,
  getASpecificBikeById,
};
