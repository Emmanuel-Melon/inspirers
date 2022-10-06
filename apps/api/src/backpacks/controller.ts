import prisma from "@inspirers/prisma";

export const addBackpack = (backpack) => {
  try {
    return prisma.backpack.create({
      data: backpack,
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
      ]
    });
  } catch (err) {}
};
