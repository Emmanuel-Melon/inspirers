import prisma from "../lib/prisma";

export const getUserById = async (userId: string) => {
  const newEntry = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return newEntry;
};

export const modifyUser = async (userId: string, data) => {
  const newEntry = await prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });
  return newEntry;
};
