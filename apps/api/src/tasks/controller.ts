import prisma from "@inspirers/prisma";
import { TaskObject } from "types/Task";

export const addTask = async (data) => {
  const newEntry = await prisma.task.create({ data });
  return newEntry;
};

export const getTaskById = async (taskId: string) => {
  const newEntry = await prisma.task.findUnique({
    where: {
      id: taskId.toString(),
    },
  });
  return newEntry;
};

export const getUserTasks = async (userId: string) => {
  const newEntry = await prisma.task.findMany();
  return newEntry;
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
