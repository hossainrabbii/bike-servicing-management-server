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
exports.servService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create A Service
const createAService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.create({ data });
    return result;
});
// Get all service
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findMany();
    return result;
});
// Get a specific service
const getASpecificService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const serviceInProgress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const data = {
        status: "in-progress",
    };
    const result = yield prisma.service.update({
        where: { serviceId: id },
        data,
    });
    return result;
});
const serviceStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma.service.findMany({
        where: {
            status: {
                in: ["pending", "in-progress"],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
const serviceCompleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        completionDate: new Date(),
        status: "done",
    };
    const result = yield prisma.service.update({
        where: {
            serviceId: id,
        },
        data,
    });
    return result;
});
// delete a single service by id
const deleteAService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.service.delete({
        where: {
            serviceId: id,
        },
    });
    return result;
});
exports.servService = {
    createAService,
    getAllServices,
    getASpecificService,
    serviceCompleted,
    serviceInProgress,
    serviceStatus,
    deleteAService,
};
