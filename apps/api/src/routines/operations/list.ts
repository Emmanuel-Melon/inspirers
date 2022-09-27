import prisma from "@inspirers/prisma";
import { Routine } from "@prisma/client";

export const list = async (userId: string): Promise<Routine[]> => {
  try {
    return prisma.routine.findMany({
        where: {
            userId
        },
        orderBy: [
          {
            createdAt: "asc",
          },
        ]
    });
  } catch (err) {
    
  }
};
