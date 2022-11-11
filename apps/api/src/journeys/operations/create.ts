import prisma from "@inspirers/prisma";
import { Goal, Journey } from "@prisma/client";

// allow a maximum of 5 goals per journey
const MAX_GOALS_PER_JOURNEY = 5;
export const createGoal = async (
  journeyId: string,
  goal: Goal
): Promise<Goal> => {
  const count = await prisma.goal.count({
    where: {
      journeyId,
    },
  });

  if (count >= MAX_GOALS_PER_JOURNEY) {
    throw new Error("Maximum number of goals reached");
  }
  return prisma.goal.create({
    data: {
      journeyId,
      ...goal,
    },
  });
};

// allow a maximum of 2 journeys
const MAX_JOURNEYS = 2;
export const createJourney = async (journey: Journey): Promise<Journey> => {
  // get MAX_JOURNEYS from the user
  const count = await prisma.journey.count({
    where: {
      userId: journey.userId,
    },
  });

  if (count >= MAX_JOURNEYS) {
    throw new Error("Maximum number of Journeys reached");
  }
  return prisma.journey.create({
    data: {
      title: journey.title,
      description: journey.description,
      userId: journey.userId,
    },
  });
};
