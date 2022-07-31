import prisma from "prisma";
import { TaskObject } from "types/Task";

export const addTask = async (task) => {
  const newEntry = await prisma.task.create({
    data: task,
  });
  return newEntry;
};

export const getTaskById = async (taskId: number) => {
  const newEntry = await prisma.task.findUnique({
    where: {
      id: taskId.toString(),
    },
  });
  return newEntry;
};

export const getUserTasks = async (userId: number) => {
  const newEntry = await prisma.task.findMany();
  return newEntry;
};

export const removeTask = async (taskId: number) => {
  const newEntry = await prisma.task.delete({
    where: {
      id: taskId.toString()
    }
  })
  return newEntry;
};

export const modifyTask = async (taskId: number | string, data) => {
  const newEntry = await prisma.task.update({
    where: {
        id: taskId.toString(),
    },
    data,
  });
  return newEntry;
};
