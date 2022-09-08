import { Job } from "bull";
import { MailDataRequired } from "@sendgrid/mail";

import { IdInObject } from "./id";
import { create, Queues } from "./queue";

export type Enqueue<T> = (data: T) => Promise<Job<T>>;

export const eventsQueue = create<any>(Queues.Event);
export const emailsQueue = create<MailDataRequired>(Queues.Mail);
export const pushNotificationsQueue = create<any>(Queues.PushNotifications);

export const pushEmail: Enqueue<MailDataRequired> = message =>
  emailsQueue.add(message, { removeOnComplete: true });

  export const pushIntoEvents: Enqueue<any> = message =>
  eventsQueue.add(message, { removeOnComplete: false });