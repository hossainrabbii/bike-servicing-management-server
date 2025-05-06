"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.serviceController.createAService);
router.get("/", service_controller_1.serviceController.getAllServices);
router.get("/status", service_controller_1.serviceController.serviceStatus);
router.get("/:id", service_controller_1.serviceController.getASpecificServiceById);
router.delete("/:id", service_controller_1.serviceController.deleteAService);
router.put("/:id/complete", service_controller_1.serviceController.serviceCompleted);
router.post("/:id/in-progress", service_controller_1.serviceController.serviceInProgress);
exports.serviceRoutes = router;
