import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteEventType, EventTypeModel } from "./index"

export const _RecurrenceModel = z.object({
  id: z.string(),
  frequency: z.string(),
  startDate: z.date(),
  endDate: z.date().nullish(),
})

export interface CompleteRecurrence extends z.infer<typeof _RecurrenceModel> {
  EventType: CompleteEventType[]
}

/**
 * RecurrenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RecurrenceModel: z.ZodSchema<CompleteRecurrence> = z.lazy(() => _RecurrenceModel.extend({
  EventType: EventTypeModel.array(),
}))
