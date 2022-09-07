import { Connection, ConnectionRequest } from "@prisma/client";

export const getConnectionById = (id: string): Promise<Connection> => {
  try {
    return prisma.connection.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {}
};

export const getConnectionRequestById = (id: string): Promise<ConnectionRequest> => {
  try {
    return prisma.connectionRequest.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {}
};
