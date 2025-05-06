import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create A Service
const createAService = async (data: any) => {
  const result = await prisma.service.create({ data });
  return result;
};

// Get all service
const getAllServices = async () => {
  const result = await prisma.service.findMany();
  return result;
};

// Get a specific service
const getASpecificService = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const serviceInProgress = async (id: string) => {
  console.log(id);
  const data = {
    status: "in-progress",
  };
  const result = await prisma.service.update({
    where: { serviceId: id },
    data,
  });
  return result;
};

const serviceStatus = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.service.findMany({
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
};

const serviceCompleted = async (id: string) => {
  const data = {
    completionDate: new Date(),
    status: "done",
  };
  const result = await prisma.service.update({
    where: {
      serviceId: id,
    },
    data,
  });
  return result;
};

// delete a single service by id

const deleteAService = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      serviceId: id,
    },
  });
  return result;
};

export const servService = {
  createAService,
  getAllServices,
  getASpecificService,
  serviceCompleted,
  serviceInProgress,
  serviceStatus,
  deleteAService,
};
