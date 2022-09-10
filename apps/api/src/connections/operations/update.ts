import { ConnectionRequestStatus, ConnectionStatus } from "@prisma/client";

export const respondToRequest = async (requestId, response) => {
  try {
    const { status } = response;
    if (status === ConnectionRequestStatus.Accepted) {
      const { requesterId, recepientId } =
      await prisma.connectionRequest.update({
        where: {
          id: requestId,
        },
        data: {
          ...response,
        },
      });
      return {
        user1: requesterId,
        user2: recepientId,
        status: ConnectionRequestStatus.Accepted,
      };
    } else if (status === ConnectionRequestStatus.Declined) {
      await prisma.connectionRequest.update({
        where: {
          id: requestId,
        },
        data: {
          ...response,
        },
      });
    }
  } catch (err) {}
};

export const cancelRequest = async (requestId) => {
  try {
    const { status } = await prisma.connectionRequest.update({
      where: {
        id: requestId,
      },
      data: {
        status: ConnectionRequestStatus.Declined
      }
    });
    if (status === ConnectionRequestStatus.Accepted) {
      console.log("already friends!");
      // throw new Error("Already Connected");
      return "Ac";
    }
  } catch (err) {}
};

export const cancelConnection = async (connectionId, response) => {
  try {
    const { status } = await prisma.connectionRequest.update({
      where: {
        id: connectionId,
      },
      data: {
        ...response,
      },
    });
    if (status === ConnectionRequestStatus.Accepted) {
      console.log("already friends!");
      // throw new Error("Already Connected");
      return "Ac";
    }
  } catch (err) {}
};
