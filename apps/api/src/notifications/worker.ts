import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";



const queue = withErrorHandling<any>(Queues.Event);

queue.process(job => {
  console.log('got a new job!');
  return prisma.notification.create({
    data: {
        senderId: "job.requesterId",
        receiverId: "job.requesteeId"
    }
  })
});
