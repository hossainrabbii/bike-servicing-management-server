import express from "express";
import { bikeController } from "./bike.controller";

const router = express.Router();

router.post("/", bikeController.addABike);
router.get("/", bikeController.getAllBikes);
router.get("/:id", bikeController.getASpecificBikeById);

export const bikeRoutes = router;
