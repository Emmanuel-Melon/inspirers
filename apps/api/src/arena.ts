import * as bcrypt from "bcrypt";
import express = require("express");
import { NextFunction, Response } from "express";
import { queueConfig, Queues } from "./queue";
import Arena from "bull-arena";
import Bull from "bull";

import { arenaPort, redisHost, redisPassword, redisPort } from "./config";

const app = express();

const queueNames: string[] = Object.keys(Queues).map((key) => Queues[key]);

const arenaConfig = Arena(
  {
    Bull,
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


// Make arena's resources (js/css deps) available at the base app route
app.use("/", arenaConfig);

app.listen(arenaPort, () => {
  // tslint:disable-next-line:no-console
  console.log("Arena running on http://0.0.0.0:%s", arenaPort);
});
