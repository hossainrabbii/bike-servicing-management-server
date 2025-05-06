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
exports.customerService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create a customer
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.create({ data });
    return result;
});
// get all customers
const getAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany();
    return result;
});
// get a single customer by id
const getASpecificCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
});
// update a single customer by id
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.update({
        where: {
            customerId: id,
        },
        data,
    });
    return result;
});
// delete a single customer by id
const deleteACustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomer,
    getASpecificCustomerById,
    updateCustomer,
    deleteACustomer,
};
