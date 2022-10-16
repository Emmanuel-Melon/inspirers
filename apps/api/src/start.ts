import concurrently from "concurrently";

concurrently(
  [
    {
      command: "yarn run work:mail",
      name: "mail"
    },
    {
      command: "yarn run work:notifications",
      name: "notification"
    },
    {
      command: "yarn run work:routines",
      name: "routine"
    }
  ],
  {
    killOthers: ["failure"]
  }
);
