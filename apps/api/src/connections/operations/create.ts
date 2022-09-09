import { Connection, ConnectionRequest } from "@prisma/client";

export const connectionRequest = (request: ConnectionRequest) => {
    try {
        // don't create a request if none of the parties exist
        // make sure current user is allowed to.
        return prisma.connectionRequest.create({
            data: request
        });
    } catch (err) {

    }
}

export const establishConnection = async (connection) => {
    try {
        const res = await prisma.connection.create({
            data: connection
          });
          return res;       
    } catch (err) {

    }
}