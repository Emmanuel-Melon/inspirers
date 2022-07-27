require("dotenv").config();
const express = require("express");
const app = express();
import { databaseURL, port } from "./config";
import { init } from "./init";

const mysql = require("mysql2");
const connection = mysql.createConnection(databaseURL);

/** initialize middleware */
init(app);

const listen = () => {
  return new Promise<void>((resolve, reject) =>
    app.listen(port, error => {
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

connection.end();