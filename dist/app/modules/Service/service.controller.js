"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const handleError_1 = require("../../utils/handleError");
const service_service_1 = require("./service.service");
const createAService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.servService.createAService(req.body);
        res.status(200).json({
            success: true,
            message: "Service record created successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.servService.getAllServices();
        res.status(200).json({
            success: true,
            message: "Service records fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getASpecificServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield service_service_1.servService.getASpecificService((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Service record fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const serviceCompleted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.params);
    try {
        const result = yield service_service_1.servService.serviceCompleted((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Service marked as completed",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const serviceInProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.params.id);
    try {
        const result = yield service_service_1.servService.serviceInProgress((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Service marked as in-progress",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const serviceStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.servService.serviceStatus();
        res.status(200).json({
            success: true,
            message: "Overdue or pending services fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const deleteAService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield service_service_1.servService.deleteAService((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Service deleted successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
exports.serviceController = {
    createAService,
    getAllServices,
    getASpecificServiceById,
    serviceCompleted,
    serviceInProgress,
    serviceStatus,
    deleteAService,
};
