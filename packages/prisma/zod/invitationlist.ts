import * as z from "zod"
import * as imports from "../zod-utils"

export const _InvitationListModel = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.date().nullish(),
  invitedBy: z.string().nullish(),
})
