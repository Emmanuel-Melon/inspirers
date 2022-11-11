import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteJourney, JourneyModel } from "./index"

export const _InterestModel = z.object({
  id: z.string(),
  journeyId: z.string().nullish(),
})

export interface CompleteInterest extends z.infer<typeof _InterestModel> {
  Journey?: CompleteJourney | null
}

/**
 * InterestModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const InterestModel: z.ZodSchema<CompleteInterest> = z.lazy(() => _InterestModel.extend({
  Journey: JourneyModel.nullish(),
}))
