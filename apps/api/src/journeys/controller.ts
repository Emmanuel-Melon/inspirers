import prisma from "../lib/prisma";

export const addJourney = async (journey) => {
  return prisma.journey.create({
    data: journey,
  });
};

export const getUserJourneys = async (userId) => {
  return prisma.journey.findMany({
    where: {
        userId: userId
    }
});
};

export const getJourneyById = async (journeyId) => {     
  return prisma.journey.findUnique({
    where: {
        id: journeyId
    }
})
};

export const updateJourney = async (journeyId, journey) => {     
    return prisma.journey.update({
        where: {
            id: journeyId
        },
        data: journey
    })
  };