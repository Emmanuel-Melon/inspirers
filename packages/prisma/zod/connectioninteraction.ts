import * as z from "zod"
import * as imports from "../zod-utils"

export const _ConnectionInteractionModel = z.object({
  id: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  weight: z.number().int(),
  connectionId: z.string(),
})
