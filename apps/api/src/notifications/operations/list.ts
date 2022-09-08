import { Notification } from "@prisma/client";

export const listNotifications = (userId: string): Promise<Notification[]> => {
  try {
    return prisma.notification.findMany({
      where: {
        receiverId: userId,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
