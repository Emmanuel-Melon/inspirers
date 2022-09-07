export const updateUser = async (userId: string, data) => {
    try {
        const newEntry = await prisma.user.update({
            where: {
              id: userId,
            },
            data,
          });
          return newEntry;
    } catch (err) {}
};
  