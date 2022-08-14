"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var config_1 = require("./config");
var mysql = require("mysql2");
var connect = function () {
    return mysql.createConnection(config_1.databaseURL)
        .then(function (res) {
        console.log(res);
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.default = connect;
