"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concurrently_1 = require("concurrently");
(0, concurrently_1.default)([
    {
        command: "npm run work:notifications",
        name: "notifications"
    },
    {
        command: "npm run work:mail",
        name: "mail"
    },
    {
        command: "npm run work:events",
        name: "event"
    },
    {
        command: "npm run work:push-notifications",
        name: "push-notifications"
    }
], {
    killOthers: ["failure"]
}).then(console.log, console.log);
