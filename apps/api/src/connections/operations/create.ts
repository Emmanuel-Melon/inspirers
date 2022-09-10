import { ConnectionRequest } from "@prisma/client";

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
    const res = await prisma.connection.create({
      data: connection,
    });
    return res;
  } catch (err) {}
};
