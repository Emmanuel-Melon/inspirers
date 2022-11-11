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
    },
    {
      command: "yarn run work:backpacks",
      name: "backpack"
    },
    {
      command: "yarn run work:journeys",
      name: "journey"
    }
  ],
  {
    killOthers: ["failure"]
  }
);
