import * as z from "zod"
import * as imports from "../zod-utils"

export const _RoutineAutomationModel = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
})
