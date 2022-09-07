require("dotenv").config();
const express = require("express");
export const app = express();
import { databaseURL } from "./config";
import { init } from "./init";


import connect from "./db";
const connection = connect(databaseURL);

/** initialize middleware */
init(app);


// source maps
// add a few custom build steps to compile and run typescript

