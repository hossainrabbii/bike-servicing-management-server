import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoutes } from "./app/modules/Customer/customer.routes";
import { bikeRoutes } from "./app/modules/Bike/bike.routes";
import { serviceRoutes } from "./app/modules/Service/service.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike servicing management server",
  });
});

app.use("/api/customers", customerRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/services", serviceRoutes);

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send({
    status: 'error',
    message: 'Internal Server Error',
    error: err.message,
  });
});

export default app;
