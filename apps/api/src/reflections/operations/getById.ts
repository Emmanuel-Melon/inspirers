export const getReflectionById = (id: string) => {
  return prisma.reflection.findUnique({
    where: {
      id,
    },
  });
};
