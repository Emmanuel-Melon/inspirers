import prisma from "@inspirers/prisma";
export const update = (reflectionId, reflection) => {
    return prisma.resource.update({
        where: {
          id: reflectionId,
        },
        data: reflection,
      });
}