import { Notification } from "@prisma/client";

export const listNotifications = (userId: string): Promise<Notification[]> => {
  try {
    return prisma.notification.findMany({
      where: {
        receiverId: userId,
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
