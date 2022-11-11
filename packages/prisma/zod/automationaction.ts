import * as z from "zod"
import * as imports from "../zod-utils"

export const _AutomationActionModel = z.object({
  id: z.string(),
  data: z.string(),
  ruleId: z.string().nullish(),
})
