import Bull from "bull";

import { redisHost } from "./config";

export const queueConfig: Bull.QueueOptions = {
  redis: { host: redisHost }
};

export enum Queues {
  Mail = "Mail",
  PushNotifications = "PushNotifications",
  Event = "Event",
  Notification = "Notification",
  Routine = "Routine"
}

export function withErrorHandling<T>(
  name: Queues,
  config = queueConfig
): Bull.Queue<T> {
  const queue: Bull.Queue<T> = create(name, config);

  queue.isReady().then(() => {
    // tslint:disable-next-line:no-console
    console.log(`${name} queue is ready!`);
  });

  queue.on("error", (error: Error) => {
    // tslint:disable-next-line:no-console
    console.error(error);
    process.exit(1);
  });

  queue.on("failed", (job: Bull.Job, error: Error) => {
    // tslint:disable-next-line:no-console
    // console.log(`Job ${job.id} failed`, error);
  });

  process.once("SIGINT", () => {
    queue
      .close()
      .then(() => {
        process.exit(0);
      })
      .catch(err => {
        // tslint:disable-next-line:no-console
        console.log("Bull closed with error: %s", err);
        process.exit(1);
      });
  });

  return queue;
}

export function create<T>(name: Queues, config = queueConfig): Bull.Queue<T> {
  return new Bull(name, config);
}
