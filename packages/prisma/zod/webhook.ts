import * as z from "zod"
import * as imports from "../zod-utils"
import { WebhookTriggerEvents } from "@prisma/client"
import { CompleteUser, UserModel, CompleteApp, AppModel } from "./index"

export const _WebhookModel = z.object({
  id: z.string(),
  userId: z.string().nullish(),
  eventTypeId: z.number().int().nullish(),
  subscriberUrl: z.string(),
  payloadTemplate: z.string().nullish(),
  createdAt: z.date(),
  active: z.boolean(),
  eventTriggers: z.nativeEnum(WebhookTriggerEvents).array(),
  appId: z.string().nullish(),
  secret: z.string().nullish(),
})

export interface CompleteWebhook extends z.infer<typeof _WebhookModel> {
  user?: CompleteUser | null
  app?: CompleteApp | null
}

/**
 * WebhookModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WebhookModel: z.ZodSchema<CompleteWebhook> = z.lazy(() => _WebhookModel.extend({
  user: UserModel.nullish(),
  app: AppModel.nullish(),
}))
