import { Job } from "bull";
import { MailService, MailDataRequired } from "@sendgrid/mail";

import { IdInObject } from "./id";
import { create, Queues } from "./queue";

export type Enqueue<T> = (data: T) => Promise<Job<T>>;

export const eventsQueue = create<any>(Queues.Event);
export const notificationsQueue = create<any>(Queues.Notification);
export const emailsQueue = create<MailDataRequired>(Queues.Mail);
export const pushNotificationsQueue = create<any>(Queues.PushNotifications);
export const routinesQueue = create<any>(Queues.Routine);

export const pushEmail: Enqueue<MailDataRequired> = message =>
emailsQueue.add(message, { removeOnComplete: true });

export const pushIntoEvents: Enqueue<any> = message =>
  eventsQueue.add(message, { removeOnComplete: false });

export const pushIntoNotification: Enqueue<any> = message =>
notificationsQueue.add(message, { removeOnComplete: false });

export const pushIntoRoutines: Enqueue<any> = message =>
routinesQueue.add(message, { removeOnComplete: false });