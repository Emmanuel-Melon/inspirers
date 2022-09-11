import prisma from "@inspirers/prisma";
import { Routine } from "@prisma/client";

export const create = async (routine: Routine): Promise<Routine> => {
  try {
    return prisma.routine.create({
      data: routine,
    });
  } catch (err) {
    
  }
};
