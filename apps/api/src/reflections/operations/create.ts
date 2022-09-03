import prisma from "@inspirers/prisma";
import { Reflection } from "@prisma/client";

export const create = async (reflection: Reflection): Promise<Reflection> => {
  try {
    return prisma.reflection.create({
      data: reflection,
    });
  } catch (err) {
    
  }
};
