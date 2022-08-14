"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var journeyRouter = (0, express_1.Router)();
journeyRouter.get("/blueprints", function (req, res, next) {
    return Promise.resolve((0, controller_1.getBlueprints)())
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.get("/:userId/list", function (req, res, next) {
    return Promise.resolve((0, controller_1.getUserJourneys)(req.params.userId))
        .then(function (data) {
        console.log(data);
        return res.json({ data: data });
    })
        .catch(next);
});
journeyRouter.get("/:journeyId", function (req, res, next) {
    return Promise.resolve((0, controller_1.getJourneyById)(req.params.journeyId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.put("/:journeyId", function (req, res, next) {
    return Promise.resolve((0, controller_1.updateJourney)(req.params.journeyId, req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.put("/blueprints/:blueprintId", function (req, res, next) {
    return Promise.resolve((0, controller_1.updateBlueprint)(req.params.blueprintId, req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.post("/", function (req, res, next) {
    return Promise.resolve((0, controller_1.addJourney)(req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.post("/blueprint", function (req, res, next) {
    return Promise.resolve((0, controller_1.addBlueprint)(req.body))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.delete("/blueprints/:blueprintId", function (req, res, next) {
    return Promise.resolve((0, controller_1.deleteBlueprint)(req.params.blueprintId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
journeyRouter.delete("/:journeyId", function (req, res, next) {
    return Promise.resolve((0, controller_1.deleteJourney)(req.params.journeyId))
        .then(function (data) { return res.json({ data: data }); })
        .catch(next);
});
exports.default = journeyRouter;
