import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";
import { NotificationTrigger, NotificationChannel } from "@prisma/client";

const queue = withErrorHandling<any>(Queues.Notification);

const getNotificationTemplate = (job) => {};

queue.process(async (job) => {
  // create a notification object
  // get user notification preferences
  const channels = await prisma.notificationPreferences.findMany({});
  const receipient = await prisma.user.findUnique({
    where: {
      id: job.data.recepientId,
    },
  });

  console.log(receipient);

  const notificationTemplates = {
    ConnectionRequest: {
      message: "Hello!",
      title: "New Friend Request",
    },
  };

  const template = notificationTemplates[job.data.trigger];

  const notification = await prisma.notification.create({
    data: {
      ...template,
      senderId: job.data.requesterId,
      recepientId: job.data.recepientId,
      trigger: NotificationTrigger.Event,
      channel: NotificationChannel.InApp,
      url: `/user/${job.data.requesterId}`,
      entityId: "",
    },
  });

  // dispatch according to channel
  return notification;
});
