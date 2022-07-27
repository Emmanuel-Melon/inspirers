import prisma from "../lib/prisma";

export const addBlueprint = async (blueprint) => {
  return prisma.journeyBluePrint.create({
    data: blueprint,
  });
};

export const getBlueprints = async () => {
  return prisma.journeyBluePrint.findMany();
};

export const updateBlueprint = async (blueprintId, blueprint) => {
  return prisma.journeyBluePrint.update({
    where: {
      id: blueprintId,
    },
    data: blueprint,
  });
};

export const deleteBlueprint = async (blueprintId: string) => {
  return prisma.journeyBluePrint.delete({
    where: {
      id: blueprintId,
    },
  });
};

export const addJourney = async (journey) => {
  if (journey.blueprint === "blank") {
    const blueprint = await prisma.journeyBluePrint.create({
      data: {
        title: journey.title
      },
    });
    return prisma.journey.create({
      data: {
        bluePrintId: blueprint.id,
        title: journey.title,
        description: journey.description,
        userId: journey.userId
      },
    });
  } else {
    return prisma.journey.create({
      data: journey,
    });
  }
};

export const getUserJourneys = async (userId) => {
  return prisma.journey.findMany({
    where: {
      userId: userId,
    },
  });
};

export const getJourneyById = async (journeyId) => {
  return prisma.journey.findUnique({
    where: {
      id: journeyId,
    },
    include: {
      user: true,
    },
  });
};

export const updateJourney = async (journeyId, journey) => {
  return prisma.journey.update({
    where: {
      id: journeyId,
    },
    data: journey,
  });
};

export const deleteJourney = async (journeyId: string) => {
  return prisma.journey.delete({
    where: {
      id: journeyId,
    },
  });
};