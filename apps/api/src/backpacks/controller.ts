import prisma from "@inspirers/prisma";
import { Backpack, Folder } from "@prisma/client";

export const addBackpack = (backpack: Backpack): Promise<Backpack> => {
  try {
    return prisma.backpack.create({
      data: backpack,
    });
  } catch (err) {}
};

export const addFolder = (folder: Folder): Promise<Folder> => {
  try {
    return prisma.folder.create({
      data: folder,
    });
  } catch (err) {}
};

export const addResource = (backpackId, resource) => {
  console.log(backpackId)
  try {
    return prisma.resource.create({
      data: {
        backpackId,
        ...resource,
      },
    });
  } catch (err) {}
};

export const deleteResource = async (resourceId) => {
  try {
    const record = await prisma.resource.delete({
      where: {
        id: resourceId,
      },
    });
    console.log(record);
  } catch (err) {
    if (err.code === "P2025") {
      return "Deleted";
    }
  }
};

export const modifyResource = async (resourceId, resource) => {
  try {
    return prisma.resource.update({
      where: {
        id: resourceId,
      },
      data: resource,
    });
  } catch (err) {}
};

export const getResources = (backpackId) => {
  try {
    return prisma.resource.findMany({
      where: {
        backpackId,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        tags: true,
      }
    });
  } catch (err) {}
};

export const getFolders = (backpackId: string) => {
  try {
    return prisma.folder.findMany({
      where: {
        backpackId,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ]
    });
  } catch (err) {}
};
