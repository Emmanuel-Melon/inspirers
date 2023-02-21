import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteRoutine, RoutineModel } from "./index"

export const _RoutineReferenceModel = z.object({
  id: z.string(),
  routineId: z.string(),
  active: z.boolean(),
})

export interface CompleteRoutineReference extends z.infer<typeof _RoutineReferenceModel> {
  Routine: CompleteRoutine
}

/**
 * RoutineReferenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoutineReferenceModel: z.ZodSchema<CompleteRoutineReference> = z.lazy(() => _RoutineReferenceModel.extend({
  Routine: RoutineModel,
}))
