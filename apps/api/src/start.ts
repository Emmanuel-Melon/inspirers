import concurrently from "concurrently";

concurrently(
  [
    {
      command: "yarn run work:events",
      name: "event"
    }
  ],
  {
    killOthers: ["failure"]
  }
);
