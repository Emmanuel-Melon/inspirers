"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api");
var router_1 = require("../auth/router");
var router = express.Router();
router.use("/auth", router_1.default);
router.use("/api", api_1.default);
exports.default = router;
