"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var routers_1 = require("./routers");
var express = require("express");
var cors_1 = require("./middleware/cors");
var compression = require("compression");
var morganLogger = require("morgan");
var errors_1 = require("./utils/errors");
function init(app) {
    app.use(cors_1.default);
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.set("trust proxy", "loopback");
    app.use(compression());
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(morganLogger("dev"));
    app.use(errors_1.catchErrors);
    app.use(routers_1.default);
    app.use("/.netlify/functions/api", routers_1.default);
}
exports.init = init;
