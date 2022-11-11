import * as z from "zod"
import * as imports from "../zod-utils"

export const _BusinessJourneyModel = z.object({
  id: z.string(),
  title: z.string(),
})
