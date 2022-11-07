import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";
import { Backpack } from "@prisma/client";
import { addBackpack } from "./controller";

const queue = withErrorHandling<any>(Queues.Backpack);

queue.process(async (job) => {
  // create a notification object
  // get user notification preferences
  // const channels = await prisma.notificationPreferences.findMany({});
  console.log('check this!')
  console.log(job);
  const { userId, id } = job.data;

  return addBackpack({
    userId,
    name: "My Backpack",
    journeyId: id,
  } as Backpack);
});
