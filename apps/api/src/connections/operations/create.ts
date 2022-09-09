import { Connection, ConnectionRequest } from "@prisma/client";

export const connectionRequest = async (request: ConnectionRequest) => {
  try {
    const [receipient, sender] = await Promise.all([
      prisma.user.findUnique({ where: { id: request.requesteeId } }),
      prisma.user.findUnique({ where: { id: request.requesterId } }),
    ]);

    console.log(receipient);

    if (receipient && sender) {
      return prisma.connectionRequest.create({
        data: request,
      });
    }
  } catch (err) {}
};

export const establishConnection = async (connection) => {
  try {
    const res = await prisma.connection.create({
      data: connection,
    });
    return res;
  } catch (err) {}
};
