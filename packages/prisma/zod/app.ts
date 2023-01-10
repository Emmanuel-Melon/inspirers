import * as z from "zod"
import * as imports from "../zod-utils"
import { AppCategories } from "@prisma/client"
import { CompleteCredential, CredentialModel, CompleteWebhook, WebhookModel, CompleteApiKey, ApiKeyModel, CompleteJourney, JourneyModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _AppModel = z.object({
  slug: z.string(),
  dirName: z.string(),
  keys: jsonSchema,
  categories: z.nativeEnum(AppCategories).array(),
  createdAt: z.date(),
  updatedAt: z.date(),
  journeyId: z.string().nullish(),
})

export interface CompleteApp extends z.infer<typeof _AppModel> {
  credentials: CompleteCredential[]
  Webhook: CompleteWebhook[]
  ApiKey: CompleteApiKey[]
  Journey?: CompleteJourney | null
}

/**
 * AppModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AppModel: z.ZodSchema<CompleteApp> = z.lazy(() => _AppModel.extend({
  credentials: CredentialModel.array(),
  Webhook: WebhookModel.array(),
  ApiKey: ApiKeyModel.array(),
  Journey: JourneyModel.nullish(),
}))
