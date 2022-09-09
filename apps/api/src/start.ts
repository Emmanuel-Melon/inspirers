import concurrently from "concurrently";

concurrently(
  [
    {
      command: "yarn run work:mail",
      name: "mail"
    },
    {
      command: "yarn run work:events",
      name: "event"
    },
    {
      command: "yarn run work:push-notifications",
      name: "push-notifications"
    }
  ],
  {
    killOthers: ["failure"]
  }
).then(console.log, console.log);
