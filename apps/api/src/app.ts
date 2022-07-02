require("dotenv").config();
const express = require("express");
import * as bodyParser from "body-parser";
import { Prisma, PrismaClient } from "@prisma/client";
const app = express();
const port = 5000;
import routers from "./routers";

const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");

/** middleware */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(routers);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connection.end();