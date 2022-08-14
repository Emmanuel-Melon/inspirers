"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.databaseURL = exports.secret = exports.port = void 0;
exports.port = process.env.PORT || 5000;
exports.secret = "SECRET-".concat(process.env.SECRET || "secret");
exports.databaseURL = process.env.DATABASE_URL;
exports.environment = process.env.NODE_ENV || "development";
