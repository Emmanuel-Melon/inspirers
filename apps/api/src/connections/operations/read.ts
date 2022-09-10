import {
  Connection,
  ConnectionRequest,
  ConnectionRequestStatus,
} from "@prisma/client";

export const getConnectionById = (id: string): Promise<Connection> => {
  try {
    return prisma.connection.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {}
};

export const getConnectionRequestById = (
  id: string
): Promise<ConnectionRequest> => {
  try {
    return prisma.connectionRequest.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {}
};

export const getConnectionStatus = async (
  requesterId: string,
  recepientId: string
) => {
  try {
    const connection = await prisma.connection.findUnique({
      where: {
        participants: {
          initiatorId: requesterId,
          recepientId
        },
      },
    });
    if(connection) {
      return {
        status: connection.status
      }
    } else {
      const request = await prisma.connectionRequest.findUnique({
        where: {
          participants: {
            requesterId,
            recepientId,
          },
        },
      });
      if (request) {
        return {
          status: request.status
        }
      }
    }

    return {
      status: null
    }
  } catch (err) {}
};
