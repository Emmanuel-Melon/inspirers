import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTask, TaskModel } from "./index"

export const _TaskLabelModel = z.object({
  id: z.string(),
  title: z.string(),
  color: z.string(),
  taskId: z.string().nullish(),
})

export interface CompleteTaskLabel extends z.infer<typeof _TaskLabelModel> {
  Task?: CompleteTask | null
}

/**
 * TaskLabelModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TaskLabelModel: z.ZodSchema<CompleteTaskLabel> = z.lazy(() => _TaskLabelModel.extend({
  Task: TaskModel.nullish(),
}))
