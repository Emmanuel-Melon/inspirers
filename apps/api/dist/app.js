"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require("express");
var app = express();
var config_1 = require("./config");
var init_1 = require("./init");
var serverless = require("serverless-http");
var db_1 = require("./db");
var connection = (0, db_1.default)();
(0, init_1.init)(app);
var listen = function () {
    return new Promise(function (resolve, reject) {
        return app.listen(config_1.port, function (error) {
            if (error) {
                return reject(error);
            }
            return resolve();
        });
    });
};
listen().then(function () {
    return console.info("Listening on http://localhost:".concat(config_1.port, "."), "Press CTRL-C to stop\n");
});
connection.end();
