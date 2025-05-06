import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// add a new bike
const addABike = async (data: any) => {
  console.log(data);
  const result = await prisma.bike.create({ data });
  return result;
};

// get all Bikes
const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// get a single Bike by id
const getASpecificBikeById = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const bikeService = {
  addABike,
  getAllBikes,
  getASpecificBikeById,
};
