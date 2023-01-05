import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteResource, ResourceModel, CompleteJourney, JourneyModel } from "./index"

export const _TagModel = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  resourceId: z.string().nullish(),
  color: z.string().nullish(),
  journeyId: z.string().nullish(),
})

export interface CompleteTag extends z.infer<typeof _TagModel> {
  Resource?: CompleteResource | null
  Journey?: CompleteJourney | null
}

/**
 * TagModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TagModel: z.ZodSchema<CompleteTag> = z.lazy(() => _TagModel.extend({
  Resource: ResourceModel.nullish(),
  Journey: JourneyModel.nullish(),
}))
