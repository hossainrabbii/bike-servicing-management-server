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
exports.bikeController = void 0;
const handleError_1 = require("../../utils/handleError");
const bike_service_1 = require("./bike.service");
const addABike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.addABike(req.body);
        res.status(200).json({
            success: true,
            message: "Bike added successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getAllBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.getAllBikes();
        res.status(200).json({
            success: true,
            message: "Bikes fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getASpecificBikeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield bike_service_1.bikeService.getASpecificBikeById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Bike fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
exports.bikeController = {
    addABike,
    getAllBikes,
    getASpecificBikeById,
};
