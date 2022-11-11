import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteNotification, NotificationModel, CompleteUser, UserModel } from "./index"

export const _NotificationRecepientModel = z.object({
  id: z.string(),
  userId: z.string(),
  notificationId: z.string(),
})

export interface CompleteNotificationRecepient extends z.infer<typeof _NotificationRecepientModel> {
  notification: CompleteNotification
  user: CompleteUser
}

/**
 * NotificationRecepientModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const NotificationRecepientModel: z.ZodSchema<CompleteNotificationRecepient> = z.lazy(() => _NotificationRecepientModel.extend({
  notification: NotificationModel,
  user: UserModel,
}))
