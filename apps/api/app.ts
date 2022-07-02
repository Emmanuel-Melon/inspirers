require("dotenv").config();
const express = require("express");
import * as bodyParser from "body-parser";
import { Prisma, PrismaClient } from "@prisma/client";
const app = express();
const port = 5000;

const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connection.end();