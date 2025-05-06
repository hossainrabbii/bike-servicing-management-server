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
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const handleError_1 = require("../../utils/handleError");
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.createCustomer(req.body);
        res.status(200).json({
            success: true,
            message: "Customers created successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getAllCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.getAllCustomer();
        res.status(200).json({
            success: true,
            message: "Customers fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const getASpecificCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield customer_service_1.customerService.getASpecificCustomerById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Customer fetched successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield customer_service_1.customerService.updateCustomer((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, req === null || req === void 0 ? void 0 : req.body);
        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
const deleteACustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield customer_service_1.customerService.deleteACustomer((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
        res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
            data: result,
        });
    }
    catch (err) {
        (0, handleError_1.handleError)(res, err);
    }
});
exports.customerController = {
    createCustomer,
    getAllCustomer,
    getASpecificCustomerById,
    updateCustomer,
    deleteACustomer,
};
