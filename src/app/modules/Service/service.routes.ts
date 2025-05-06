import express from "express";
import { serviceController } from "./service.controller";

const router = express.Router();

router.post("/", serviceController.createAService);
router.get("/", serviceController.getAllServices);
router.get("/status", serviceController.serviceStatus);

router.get("/:id", serviceController.getASpecificServiceById);
router.delete("/:id", serviceController.deleteAService);
router.put("/:id/complete", serviceController.serviceCompleted);
router.post("/:id/in-progress", serviceController.serviceInProgress);

export const serviceRoutes = router;
