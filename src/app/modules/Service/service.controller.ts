import { Request, Response } from "express";
import { handleError } from "../../utils/handleError";
import { servService } from "./service.service";

const createAService = async (req: Request, res: Response) => {
  try {
    const result = await servService.createAService(req.body);
    res.status(200).json({
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getAllServices = async (req: Request, res: Response) => {
  try {
    const result = await servService.getAllServices();
    res.status(200).json({
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getASpecificServiceById = async (req: Request, res: Response) => {
  try {
    const result = await servService.getASpecificService(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};


const serviceCompleted = async (req: Request, res: Response) => {
  console.log(req.params);
  try {
    const result = await servService.serviceCompleted(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const serviceInProgress = async (req: Request, res: Response) => {
  console.log(req.params.id);
  try {
    const result = await servService.serviceInProgress(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Service marked as in-progress",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const serviceStatus = async (req: Request, res: Response) => {
  try {
    const result = await servService.serviceStatus();
    res.status(200).json({
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const deleteAService = async (req: Request, res: Response) => {
  try {
    const result = await servService.deleteAService(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

export const serviceController = {
  createAService,
  getAllServices,
  getASpecificServiceById,
  serviceCompleted,
  serviceInProgress,
  serviceStatus,
  deleteAService,
};
