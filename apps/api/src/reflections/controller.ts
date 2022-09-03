import prisma from "@inspirers/prisma";
import { createReflection } from "./operations";

export const addReflection = async (reflection) => {
  try {
    const record = await createReflection(reflection);
    return record;
  } catch (err) {

  }
};

export const getReflections = (userId) => {
  try {
    return prisma.reflection.findMany({
      where: {
        userId,
      },
    });
  } catch (err) {}
};
