import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { handleError } from "../../utils/handleError";

const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.createCustomer(req.body);
    res.status(200).json({
      success: true,
      message: "Customers created successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getAllCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getAllCustomer();
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const getASpecificCustomerById = async (req: Request, res: Response) => {
  try {
    const result = await customerService.getASpecificCustomerById(
      req?.params?.id
    );
    res.status(200).json({
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.updateCustomer(
      req?.params?.id,
      req?.body
    );
    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

const deleteACustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.deleteACustomer(req?.params?.id);
    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
      data: result,
    });
  } catch (err) {
    handleError(res, err);
  }
};

export const customerController = {
  createCustomer,
  getAllCustomer,
  getASpecificCustomerById,
  updateCustomer,
  deleteACustomer,
};
