import { Server } from "socket.io";
import { app } from "../app";
const http = require('http');
const server = http.createServer(app);

const io = new Server(server, {});

io.on("connection", (socket) => {
  console.log(`connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

const port = 8080;
server.listen(port, () =>
  console.log(`Socket server running at http://localhost:${port}`)
);
