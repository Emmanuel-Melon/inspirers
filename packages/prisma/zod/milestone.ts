import * as z from "zod"
import * as imports from "../zod-utils"

export const _MileStoneModel = z.object({
  id: z.string(),
  journeyId: z.string().nullish(),
})
