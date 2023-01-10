import * as z from "zod"
import * as imports from "../zod-utils"
import { ResflectionsType } from "@prisma/client"
import { CompleteReflectionActionItem, ReflectionActionItemModel, CompleteGoal, GoalModel, CompleteJourney, JourneyModel } from "./index"

export const _ReflectionModel = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.nativeEnum(ResflectionsType),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  description: z.string(),
  thoughts: z.string(),
  goalId: z.string().nullish(),
  journeyId: z.string().nullish(),
})

export interface CompleteReflection extends z.infer<typeof _ReflectionModel> {
  actionItems: CompleteReflectionActionItem[]
  Goal?: CompleteGoal | null
  Journey?: CompleteJourney | null
}

/**
 * ReflectionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ReflectionModel: z.ZodSchema<CompleteReflection> = z.lazy(() => _ReflectionModel.extend({
  actionItems: ReflectionActionItemModel.array(),
  Goal: GoalModel.nullish(),
  Journey: JourneyModel.nullish(),
}))
