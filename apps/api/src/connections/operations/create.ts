import { ConnectionRequest, ConnectionStatus } from "@prisma/client";
import { connect } from "http2";

export const connectionRequest = async (request: ConnectionRequest) => {
  try {
    const [receipient, sender] = await Promise.all([
      prisma.user.findUnique({ where: { id: request.recepientId } }),
      prisma.user.findUnique({ where: { id: request.requesterId } }),
    ]);

    if (receipient && sender) {
      return prisma.connectionRequest.create({
        data: request,
      });
    } 
  } catch (err) {
    console.log(err);
  }
};

export const establishConnection = async (connection) => {
  try {


    const request = {
      status: ConnectionStatus.Active,
      recepientId: connection.user2,
      initiatorId: connection.user1,
      requestId: "",
      connectionRequestId: ""
    }

    const res = await prisma.connection.create({
      data: request,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
