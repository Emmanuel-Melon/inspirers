import * as z from "zod"
import * as imports from "../zod-utils"

export const _ActivityModel = z.object({
  id: z.string(),
  title: z.string(),
  userId: z.number().int(),
  taskId: z.number().int(),
  createdAt: z.date(),
  journeyId: z.string().nullish(),
})
