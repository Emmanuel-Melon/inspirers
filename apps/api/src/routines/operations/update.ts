import prisma from "@inspirers/prisma";

export const update = (routineId, routine) => {
  try {
    return prisma.routine.update({
      where: {
        id: routineId,
      },
      data: routine,
    });
  } catch (err) {}
};
