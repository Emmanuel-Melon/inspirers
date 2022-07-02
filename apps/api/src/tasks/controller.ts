import prisma from "../lib/prisma";
import { TaskObject } from "types/src/Task";

export const addTask = async (task) => {
  const newEntry = await prisma.task.create({
    data: task,
  });
  return newEntry;
};

export const getTaskById = async (taskId: number) => {
  const newEntry = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });
  return newEntry;
};

export const getUserTasks = async (userId: number) => {
  const newEntry = await prisma.task.findMany();
  return newEntry;
};

export const modifyTask = async (taskId: number, data) => {
  const newEntry = await prisma.task.update({
    where: {
        id: taskId,
    },
    data,
  });
  return newEntry;
};
