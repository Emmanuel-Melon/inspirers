import { Job } from "bull";
import { MailService, MailDataRequired } from "@sendgrid/mail";

import { create, Queues } from "./queue";
import { 
  Backpack,
  Journey,
  Notification,
  Routine,
  NotificationTrigger
 } from "@prisma/client";

export type Enqueue<T> = (data: T) => Promise<Job<T>>;

export const eventsQueue = create<any>(Queues.Event);
export const notificationsQueue = create<any>(Queues.Notification);
export const emailsQueue = create<MailDataRequired>(Queues.Mail);
export const pushNotificationsQueue = create<any>(Queues.PushNotifications);
export const routinesQueue = create<any>(Queues.Routine);
export const journeyQueue = create<any>(Queues.Journey);
export const backpackQueue = create<any>(Queues.Backpack);

export const pushEmail: Enqueue<MailDataRequired> = message =>
emailsQueue.add(message, { removeOnComplete: true });

export const pushIntoEvents: Enqueue<any> = message =>
  eventsQueue.add(message, { removeOnComplete: false });

export interface NotificationData extends Notification  {
  trigger: NotificationTrigger;
};

export const pushIntoNotification: Enqueue<NotificationData> = message =>
notificationsQueue.add(message, { removeOnComplete: false });

export const pushIntoRoutines: Enqueue<Routine> = message =>
routinesQueue.add(message, { removeOnComplete: false });

export const pushIntoBacpack: Enqueue<any> = message =>
backpackQueue.add(message, { removeOnComplete: false });

export const pushIntoJourney: Enqueue<any> = message =>
journeyQueue.add(message, { removeOnComplete: false });