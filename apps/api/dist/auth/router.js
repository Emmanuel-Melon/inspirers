"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var authRouter = (0, express_1.Router)();
authRouter.post("/", function (req, res, next) {
    return Promise.resolve((0, controller_1.createUser)(req.body))
        .then(function (data) {
        res.json({ data: data });
    })
        .catch(next);
});
authRouter.post("/login", function (req, res, next) {
    return Promise.resolve((0, controller_1.loginUser)(req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
exports.default = authRouter;
