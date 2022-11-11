import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";

const queue = withErrorHandling<any>(Queues.Journey);

queue.process(async (job) => {
    // const { userId, id } = job.data;

    // when a new Journey is created:
  // 1. create a new Journey
  // 2. create a new JourneyProgress
  // 3. create a new Backpack
  // 4. create a new BackpackProgress
  // 5. Set as current Journey
  // 6. Set as current Backpack
});
