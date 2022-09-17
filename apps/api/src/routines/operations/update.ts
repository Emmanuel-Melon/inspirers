import prisma from "@inspirers/prisma";
import { Routine, RoutineItem } from "@prisma/client";

export const update = (routineId: string, routine: Routine) => {
  try {
    return prisma.routine.update({
      where: {
        id: routineId,
      },
      data: routine,
    });
  } catch (err) {}
};

export const updateObjective = async (id: string, routine: RoutineItem): Promise<RoutineItem> => {
  try {
    return prisma.routineItem.update({
      where: {
        id
      },
      data: routine,
    });
  } catch (err) {
    
  }
};