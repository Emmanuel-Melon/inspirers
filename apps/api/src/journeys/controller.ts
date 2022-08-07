import prisma from "@inspirers/prisma";

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

interface JourneyAttrs {
  bluePrintId: string;
  title: string;
  description: string;
  userId: string;
  blueprint: string;
  [key: string]: string;
}

export const addJourney = async (journey) => {
  return prisma.journey.create({
    data: {
      title: journey.title,
      description: journey.description,
      userId: journey.userId,
    },
  });
};

export const getUserJourneys = async (userId) => {
  return prisma.journey.findMany({
    where: {
      userId: userId,
    },
  });
};

export const getJourneyById = async (journeyId: string) => {
  return prisma.journey.findUnique({
    where: {
      id: journeyId,
    },
    include: {
      tasks: true,
      user: true,
      goals: true,
      interests: true
    }
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
