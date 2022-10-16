export const updateUser = async (userId: string, data) => {
    try {
          return prisma.user.update({
            where: {
              id: userId,
            },
            data,
          });
    } catch (err) {}
};
  