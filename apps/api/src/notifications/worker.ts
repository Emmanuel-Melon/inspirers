import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";



const queue = withErrorHandling<any>(Queues.Event);

const notificationTemplates = [];

queue.process(job => {
  return prisma.notification.create({
    data: {
        senderId: "job.requesterId",
        receiverId: "job.requesteeId"
    }
  })
});
