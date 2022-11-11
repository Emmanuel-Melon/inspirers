import prisma from "@inspirers/prisma";
import { Goal } from "@prisma/client";

export const listGoals = (journeyId: string): Promise<Goal[]> => {
  return prisma.goal.findMany({
    where: {
      journeyId,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
};
  