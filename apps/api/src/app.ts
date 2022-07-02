require("dotenv").config();
const express = require("express");
const app = express();
import { databaseURL, port } from "./config";
import { init } from "./init";

const mysql = require("mysql2");
const connection = mysql.createConnection(databaseURL);

/** initialize middleware */
init(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connection.end();