import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteApp, AppModel } from "./index"

export const _ApiKeyModel = z.object({
  id: z.string(),
  userId: z.string(),
  note: z.string().nullish(),
  createdAt: z.date(),
  expiresAt: z.date().nullish(),
  lastUsedAt: z.date().nullish(),
  hashedKey: z.string(),
  appId: z.string().nullish(),
})

export interface CompleteApiKey extends z.infer<typeof _ApiKeyModel> {
  user?: CompleteUser | null
  app?: CompleteApp | null
}

/**
 * ApiKeyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ApiKeyModel: z.ZodSchema<CompleteApiKey> = z.lazy(() => _ApiKeyModel.extend({
  user: UserModel.nullish(),
  app: AppModel.nullish(),
}))
