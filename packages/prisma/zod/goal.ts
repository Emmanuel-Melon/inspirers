import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteJourney, JourneyModel, CompleteReflection, ReflectionModel } from "./index"

export const _GoalModel = z.object({
  id: z.string(),
  title: z.string(),
  achieved: z.boolean(),
  journeyId: z.string().nullish(),
  eta: z.date().nullish(),
  reflectionId: z.string().nullish(),
  completedAt: z.date().nullish(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  progress: z.number().int(),
  userId: z.number().int(),
})

export interface CompleteGoal extends z.infer<typeof _GoalModel> {
  Journey?: CompleteJourney | null
  Reflections: CompleteReflection[]
}

/**
 * GoalModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const GoalModel: z.ZodSchema<CompleteGoal> = z.lazy(() => _GoalModel.extend({
  Journey: JourneyModel.nullish(),
  Reflections: ReflectionModel.array(),
}))
