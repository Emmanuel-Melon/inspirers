import concurrently from "concurrently";

concurrently(
  [
    {
      command: "yarn run work:events",
      name: "event"
    },
    {
      command: "yarn run work:notifications",
      name: "notification"
    }
  ],
  {
    killOthers: ["failure"]
  }
);
