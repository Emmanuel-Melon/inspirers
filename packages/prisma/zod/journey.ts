import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteBackpack, BackpackModel, CompleteRoutine, RoutineModel, CompleteReflection, ReflectionModel, CompleteInterest, InterestModel, CompleteGoal, GoalModel, CompleteTask, TaskModel, CompleteTag, TagModel, CompleteApp, AppModel, CompleteUser, UserModel } from "./index"

export const _JourneyModel = z.object({
  id: z.string(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  userId: z.string(),
  bluePrintId: z.string().nullish(),
  journeyType: z.string().nullish(),
  fieldId: z.string().nullish(),
  active: z.boolean(),
  completed: z.boolean(),
  completedAt: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
})

export interface CompleteJourney extends z.infer<typeof _JourneyModel> {
  backpacks: CompleteBackpack[]
  routines: CompleteRoutine[]
  reflections: CompleteReflection[]
  interests: CompleteInterest[]
  goals: CompleteGoal[]
  tasks: CompleteTask[]
  tags: CompleteTag[]
  applications: CompleteApp[]
  User: CompleteUser
}

/**
 * JourneyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const JourneyModel: z.ZodSchema<CompleteJourney> = z.lazy(() => _JourneyModel.extend({
  backpacks: BackpackModel.array(),
  routines: RoutineModel.array(),
  reflections: ReflectionModel.array(),
  interests: InterestModel.array(),
  goals: GoalModel.array(),
  tasks: TaskModel.array(),
  tags: TagModel.array(),
  applications: AppModel.array(),
  User: UserModel,
}))
