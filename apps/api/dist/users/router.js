"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var userRouter = (0, express_1.Router)();
userRouter.get("/:userId", function (req, res, next) {
    return Promise.resolve((0, controller_1.getUserById)(req.params.userId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
userRouter.put("/:userId", function (req, res, next) {
    return Promise.resolve((0, controller_1.modifyUser)(req.params.userId, req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
exports.default = userRouter;
