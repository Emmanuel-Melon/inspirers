import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteRecurrence, RecurrenceModel } from "./index"

export const _EventTypeModel = z.object({
  id: z.string(),
  startTime: z.date(),
  endTime: z.date(),
  title: z.string(),
  description: z.string(),
  recurrenceId: z.string(),
})

export interface CompleteEventType extends z.infer<typeof _EventTypeModel> {
  recurrence: CompleteRecurrence
}

/**
 * EventTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const EventTypeModel: z.ZodSchema<CompleteEventType> = z.lazy(() => _EventTypeModel.extend({
  recurrence: RecurrenceModel,
}))
