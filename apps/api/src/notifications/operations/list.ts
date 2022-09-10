import { Notification, NotificationChannel } from "@prisma/client";

export const listNotifications = (userId: string): Promise<Notification[]> => {
  try {
    return prisma.notification.findMany({
      where: {
        recepientId: userId,
        channel: NotificationChannel.InApp
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        Recepient: true
      }
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
