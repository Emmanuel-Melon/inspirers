import prisma from "@inspirers/prisma";
import { Routine, RoutineItem } from "@prisma/client";

export const create = async (routine: Routine): Promise<Routine> => {
  try {
    return prisma.routine.create({
      data: routine,
    });
  } catch (err) {
    
  }
};

export const addObjective = async (routine: RoutineItem): Promise<RoutineItem> => {
  try {
    return prisma.routineItem.create({
      data: routine,
    });
  } catch (err) {
    
  }
};
