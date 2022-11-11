import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteJourney, JourneyModel, CompleteTaskLabel, TaskLabelModel } from "./index"

export const _TaskModel = z.object({
  id: z.string(),
  title: z.string(),
  userId: z.string(),
  description: z.string(),
  completed: z.boolean(),
  journeyId: z.string().nullish(),
  progress: z.number().int(),
  active: z.boolean(),
  completedAt: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  due: z.date().nullish(),
  group: z.string().nullish(),
})

export interface CompleteTask extends z.infer<typeof _TaskModel> {
  Journey?: CompleteJourney | null
  labels: CompleteTaskLabel[]
}

/**
 * TaskModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TaskModel: z.ZodSchema<CompleteTask> = z.lazy(() => _TaskModel.extend({
  Journey: JourneyModel.nullish(),
  labels: TaskLabelModel.array(),
}))
