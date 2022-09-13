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
