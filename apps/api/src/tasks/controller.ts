import prisma from "@inspirers/prisma";
import { TaskObject } from "types/Task";

export const addTask = async (data) => {
  try {
    return prisma.task.create({ data });
  } catch (err) {

  }
};

export const getTaskById = async (taskId: string) => {
  return prisma.task.findUnique({
    where: {
      id: taskId.toString(),
    },
  });
};

export const getUserTasks = async (userId: string) => {
  try {
    return prisma.task.findMany({
      where: {
        userId
      }
    });
  } catch (err) {

  }
};

export const removeTask = async (taskId: string) => {
  const newEntry = await prisma.task.delete({
    where: {
      id: taskId.toString(),
    },
  });
  return newEntry;
};

export const modifyTask = async (taskId: string, data) => {
  const newEntry = await prisma.task.update({
    where: {
      id: taskId.toString(),
    },
    data,
  });
  return newEntry;
};
