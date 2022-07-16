import prisma from "../lib/prisma";

export const addBlueprint = async (blueprint) => {
    console.log(blueprint);
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
            id: blueprintId
        }
    })
  };

export const addJourney = async (journey) => {
  if (journey.blueprint === "blank") {
    return prisma.journey.create({
      data: journey,
    });
  }

  // create blueprint!
  const blueprint = await prisma.journeyBluePrint.create({
    data: journey,
  });
  return prisma.journey.create({
    data: journey,
  });
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
