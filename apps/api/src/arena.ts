import * as bcrypt from "bcrypt";
import express = require("express");
import { NextFunction, Response } from "express";
import { queueConfig, Queues } from "./queue";
import * as Arena from "bull-arena";
import Bull from "bull";

import { arenaPort, redisHost, redisPassword, redisPort } from "./config";

const app = express();

const queueNames: string[] = Object.keys(Queues).map((key) => Queues[key]);

const arenaConfig = Arena(
  {
    queues: queueNames.map((queueName) => ({
      type: "bull",
      hostId: "queues",
      name: queueName,
      ...queueConfig,
      redis: {
        port: redisPort,
        host: redisHost,
      },
    })),
  },
  {
    basePath: "/",
    disableListen: true,
  }
);

function authenticate(authorization: string): Promise<void> {
  const withoutBase64 = authorization.replace("Basic ", "");
  const [email, password] = Buffer.from(withoutBase64, "base64")
    .toString()
    .split(":");
  return prisma.user
    .findUnique({
      where: {
        email,
      },
    })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("Invalid Email"));
      }
      return bcrypt.compare(password, user.password);
    })
    .then((isValidPassword) => {
      if (!isValidPassword) {
        return Promise.reject(new Error("Invalid password"));
      }
    });
}

function authorize(
  req: Request<void, {}, {}>,
  res: Response,
  next: NextFunction
) {
  authenticate(req.headers.authorization || "")
    .then(() => {
      next();
    })
    .catch((error) => {
      // tslint:disable-next-line:no-console
      console.log(error);
      res.set("WWW-Authenticate", 'Basic realm="401"');
      res.status(401).json({ message: error.message });
    });
}

// Make arena's resources (js/css deps) available at the base app route
app.use("/", authorize, arenaConfig);

app.listen(arenaPort, () => {
  // tslint:disable-next-line:no-console
  console.log("Arena running on http://0.0.0.0:%s", arenaPort);
});
