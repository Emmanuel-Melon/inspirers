import { Connection, ConnectionRequest } from "@prisma/client";

export const connectionRequest = (request: ConnectionRequest) => {
    try {
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
          console.log(connection);        
    } catch (err) {

    }
}