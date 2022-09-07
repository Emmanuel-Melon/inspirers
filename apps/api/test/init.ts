// tslint:disable-next-line:no-var-requires
require("dotenv-safe").load({
    path: ".env.test"
});

import { databaseURL } from "../src/config";

import connect from "../src/db";
const connection = connect(databaseURL);

/** initialize middleware */


// source maps
// add a few custom build steps to compile and run typescript

connection.end();
