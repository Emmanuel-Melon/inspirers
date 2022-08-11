import concurrently from "concurrently";

concurrently(
  [
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
  ],
  {
    killOthers: ["failure"]
  }
).then(console.log, console.log);
