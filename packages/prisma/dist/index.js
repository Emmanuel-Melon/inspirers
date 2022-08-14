"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customPrisma = exports.prisma = void 0;
var client_1 = require("@prisma/client");
var prismaOptions = {};
exports.prisma = globalThis.prisma || new client_1.PrismaClient(prismaOptions);
var customPrisma = function (options) {
    return new client_1.PrismaClient(__assign(__assign({}, prismaOptions), options));
};
exports.customPrisma = customPrisma;
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = exports.prisma;
}
exports.default = exports.prisma;
