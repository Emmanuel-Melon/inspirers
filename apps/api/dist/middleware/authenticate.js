"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var controller_1 = require("../users/controller");
var config_1 = require("../config");
var errors_1 = require("../utils/errors");
function authenticate(req, res, next) {
    var tokenInQuery = req.query.access_token;
    var tokenInHeader = req.header("Authorization") || "";
    var token = tokenInQuery || tokenInHeader.replace(/Bearer\s+/, "");
    if (!token) {
        console.log("hey");
        res.status(401).json({ message: "unauthorized" });
    }
    if (token) {
        return Promise.resolve()
            .then(function () { return jwt.verify(token, config_1.secret); })
            .then(function (_a) {
            var id = _a.id;
            return (0, controller_1.getUserById)(id).then(function (user) {
                req.user = user;
                return next();
            });
        })
            .catch((0, errors_1.handleError)(res, 401, "Your session has expired"));
    }
}
exports.default = authenticate;
