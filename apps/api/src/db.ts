require("dotenv").config();
import { databaseURL, port } from "./config";
const mysql = require("mysql2");
const connect = () => {
    return mysql.createConnection(databaseURL)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
}

export default connect;