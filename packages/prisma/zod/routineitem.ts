import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteRoutine, RoutineModel } from "./index"

export const _RoutineItemModel = z.object({
  id: z.string(),
  title: z.string(),
  routineId: z.string(),
  progress: z.number().int(),
  completed: z.boolean(),
})

export interface CompleteRoutineItem extends z.infer<typeof _RoutineItemModel> {
  Routine: CompleteRoutine
}

/**
 * RoutineItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoutineItemModel: z.ZodSchema<CompleteRoutineItem> = z.lazy(() => _RoutineItemModel.extend({
  Routine: RoutineModel,
}))
