import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";
import { NotificationTrigger, NotificationChannel } from "@prisma/client";



const queue = withErrorHandling<any>(Queues.Notification);

const notificationTemplates = [];

queue.process(async job => {
  // create a notification object
  // get user notification preferences
  const channels = await prisma.notificationPreferences.findMany({});


  return prisma.notification.create({
    data: {
        senderId: "job.requesterId",
        receiverId: "job.requesteeId",
        trigger: NotificationTrigger.Event,
        channel: NotificationChannel.InApp,
        message: "Hello!",
        url: "hello!"
    }
  });

  // dispatch according to channel
});
