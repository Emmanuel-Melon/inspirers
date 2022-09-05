import prisma from "@inspirers/prisma";
export const deleteReflection = (reflectionId: string) => {
  try {
    return prisma.reflection.delete({
        where: {
            id: reflectionId
        }
    })
  } catch (err) {}
};
