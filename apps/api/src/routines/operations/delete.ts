import prisma from "@inspirers/prisma";

export const deleteById = (routineId: string) => {
  try {
    return prisma.routine.delete({
        where: {
            id: routineId
        }
    })
  } catch (err) {}
};

export const removeObjective = (objectiveId: string) => {
  try {
    return prisma.routineItem.delete({
        where: {
            id: objectiveId
        }
    })
  } catch (err) {}
};
