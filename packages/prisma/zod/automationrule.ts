import * as z from "zod"
import * as imports from "../zod-utils"
import { AutomationTrigger, AutomationPeriod } from "@prisma/client"

export const _AutomationRuleModel = z.object({
  id: z.string(),
  trigger: z.nativeEnum(AutomationTrigger),
  period: z.nativeEnum(AutomationPeriod),
})
