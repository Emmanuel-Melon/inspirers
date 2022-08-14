"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var tasksRouter = (0, express_1.Router)();
tasksRouter.get("/:taskId", function (req, res, next) {
    return Promise.resolve((0, controller_1.getTaskById)(req.params.taskId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
tasksRouter.get("/user/:userId", function (req, res, next) {
    return Promise.resolve((0, controller_1.getUserTasks)(req.params.taskId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
tasksRouter.delete("/:taskId", function (req, res, next) {
    return Promise.resolve((0, controller_1.removeTask)(req.params.taskId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
tasksRouter.post("/", function (req, res, next) {
    return Promise.resolve((0, controller_1.addTask)(req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
tasksRouter.put("/:taskId", function (req, res, next) {
    return Promise.resolve((0, controller_1.modifyTask)(req.params.taskId, req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
exports.default = tasksRouter;
