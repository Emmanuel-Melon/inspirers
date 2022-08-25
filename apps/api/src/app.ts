require("dotenv").config();
const express = require("express");
export const app = express();
import { databaseURL, port } from "./config";
import { init } from "./init";


import connect from "./db";
const connection = connect();

/** initialize middleware */
init(app);

const listen = () => {
  return new Promise<void>((resolve, reject) =>
    app.listen(port, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    })
  );
};

listen().then(() =>
  // tslint:disable-next-line:no-console
  console.info(
    `Listening on http://localhost:${port}.`,
    `Press CTRL-C to stop\n`
  )
);

// source maps
// add a few custom build steps to compile and run typescript

connection.end();


