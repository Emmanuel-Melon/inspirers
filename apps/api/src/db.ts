require("dotenv").config();
import { databaseURL, port } from "./config";
const mysql = require("mysql2");
const connect = () => {
    return mysql.createConnection(databaseURL);
}

export default connect;