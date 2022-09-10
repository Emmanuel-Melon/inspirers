import {
  Connection,
  ConnectionRequest,
  ConnectionRequestStatus,
  ConnectionStatus,
  UserConnections
} from "@prisma/client";

export const listIncomingRequests = (
  userId: string
): Promise<ConnectionRequest[]> => {
  try {
    return prisma.connectionRequest.findMany({
      where: {
        recepientId: userId,
        status: ConnectionRequestStatus.Pending,
      }
    });
  } catch (err) {
    throw new Error("something broke!");
  }
};

export const listOutgoingRequests = (
  userId: string
): Promise<ConnectionRequest[]> => {
  try {
    return prisma.connectionRequest.findMany({
      where: {
        requesterId: userId,
        status: ConnectionRequestStatus.Pending,
      },
    });
  } catch (err) {
    throw new Error("something broke!");
  }
};

export const listConnections = (userId: string): Promise<UserConnections[]> => {
  try {
    return prisma.userConnections.findMany({
      where: {
        userId: userId,
      },
    });
  } catch (err) {
    throw new Error("something broke!");
  }
};

export const listRecommendations = (userId: string): Promise<any[]> => {
  try {
    return prisma.recommendedConnections.findMany({});
  } catch (err) {
    throw new Error("something broke!");
  }
};
