import prisma from "@inspirers/prisma";
import { Reflection } from "@prisma/client";

export const getReflectionById = (id: string): Promise<Reflection> => {
  return prisma.reflection.findUnique({
    where: {
      id,
    },
  });
};

export const getAllReflections = (userId: string): Promise<Reflection[]> => {
  return prisma.reflection.findMany({
    where: {
      userId,
    },
  });
};
