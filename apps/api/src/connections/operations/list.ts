import {
  Connection,
  ConnectionRequest,
  ConnectionRequestStatus,
  ConnectionStatus,
} from "@prisma/client";

export const listIncomingRequests = (
  userId: string
): Promise<ConnectionRequest[]> => {
  try {
    return prisma.connectionRequest.findMany({
      where: {
        requesteeId: userId,
        status: ConnectionRequestStatus.Pending,
      },
      include: {
        requester: true,
      },
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

export const listConnections = (userId: string): Promise<Connection[]> => {
  try {
    return prisma.connection.findMany({
      where: {
        user1: userId,
        status: ConnectionStatus.Active,
      },
    });
  } catch (err) {
    throw new Error("something broke!");
  }
};
