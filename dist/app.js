"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_routes_1 = require("./app/modules/Customer/customer.routes");
const bike_routes_1 = require("./app/modules/Bike/bike.routes");
const service_routes_1 = require("./app/modules/Service/service.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        Message: "Bike servicing management server",
    });
});
app.use("/api/customers", customer_routes_1.customerRoutes);
app.use("/api/bikes", bike_routes_1.bikeRoutes);
app.use("/api/services", service_routes_1.serviceRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 'error',
        message: 'Internal Server Error',
        error: err.message,
    });
});
exports.default = app;
