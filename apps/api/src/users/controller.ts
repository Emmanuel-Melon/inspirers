import prisma from "../lib/prisma";
import { UserObject } from "types/src/User";

export const addUser = async (user: UserObject) => {
  const newEntry = await prisma.user.create({
    data: user,
  });
  return newEntry;
};

export const getUserById = async (userId: number) => {
  const newEntry = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return newEntry;
};

export const modifyUser = async (userId: number, data) => {
  const newEntry = await prisma.user.update({
    where: {
        id: userId,
    },
    data,
  });
  return newEntry;
};
