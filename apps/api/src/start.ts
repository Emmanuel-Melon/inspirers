import concurrently from "concurrently";

concurrently(
  [
    {
      command: "yarn run work:notifications",
      name: "notification"
    }
  ],
  {
    killOthers: ["failure"]
  }
);
