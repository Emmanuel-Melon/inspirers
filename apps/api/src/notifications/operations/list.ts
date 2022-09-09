import { Notification, NotificationChannel } from "@prisma/client";

export const listNotifications = (userId: string): Promise<Notification[]> => {
  try {
    return prisma.notification.findMany({
      where: {
        receiverId: userId,
        channel: NotificationChannel.InApp
      },
      orderBy: [
        {
          createdAt: "desc",
        }
      ]
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
