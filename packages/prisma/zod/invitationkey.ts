import * as z from "zod"
import * as imports from "../zod-utils"

export const _InvitationKeyModel = z.object({
  id: z.string(),
  key: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date(),
  isValid: z.boolean(),
})
