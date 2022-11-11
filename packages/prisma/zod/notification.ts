import * as z from "zod"
import * as imports from "../zod-utils"
import { NotificationTrigger, NotificationChannel, NotificationState } from "@prisma/client"
import { CompleteNotificationRecepient, NotificationRecepientModel } from "./index"

export const _NotificationModel = z.object({
  id: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  senderId: z.string(),
  recepientId: z.string(),
  trigger: z.nativeEnum(NotificationTrigger),
  channel: z.nativeEnum(NotificationChannel),
  message: z.string(),
  title: z.string(),
  interactive: z.boolean(),
  url: z.string().nullish(),
  state: z.nativeEnum(NotificationState),
  spam: z.boolean(),
  muted: z.boolean(),
  entityId: z.string(),
})

export interface CompleteNotification extends z.infer<typeof _NotificationModel> {
  Recepient: CompleteNotificationRecepient[]
}

/**
 * NotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const NotificationModel: z.ZodSchema<CompleteNotification> = z.lazy(() => _NotificationModel.extend({
  Recepient: NotificationRecepientModel.array(),
}))
