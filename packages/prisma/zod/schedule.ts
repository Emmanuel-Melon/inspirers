import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _ScheduleModel = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  timeZone: z.string().nullish(),
})

export interface CompleteSchedule extends z.infer<typeof _ScheduleModel> {
  user: CompleteUser
}

/**
 * ScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ScheduleModel: z.ZodSchema<CompleteSchedule> = z.lazy(() => _ScheduleModel.extend({
  user: UserModel,
}))
