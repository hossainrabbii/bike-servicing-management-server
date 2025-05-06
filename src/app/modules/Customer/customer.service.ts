import { PrismaClient } from "@prisma/client";
import type { Customer } from "@prisma/client";
const prisma = new PrismaClient();

// create a customer
const createCustomer = async (data: any) => {
  const result = await prisma.customer.create({ data });
  return result;
};

// get all customers

const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// get a single customer by id

const getASpecificCustomerById = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

// update a single customer by id

const updateCustomer = async (id: string, data: Partial<Customer>) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

// delete a single customer by id

const deleteACustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomer,
  getASpecificCustomerById,
  updateCustomer,
  deleteACustomer,
};
