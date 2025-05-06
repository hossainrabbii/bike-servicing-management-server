import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();

router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomer);
router.get("/:id", customerController.getASpecificCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteACustomer);

export const customerRoutes = router;
