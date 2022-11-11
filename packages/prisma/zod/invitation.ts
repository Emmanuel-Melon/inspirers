import * as z from "zod"
import * as imports from "../zod-utils"
import { InvitationStatus } from "@prisma/client"

export const _InvitationModel = z.object({
  id: z.string(),
  email: z.string().nullish(),
  status: z.nativeEnum(InvitationStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date(),
  invitationKeyId: z.string().nullish(),
  accepted: z.boolean(),
  acceptedAt: z.date().nullish(),
  keyId: z.string().nullish(),
  url: z.string().nullish(),
})
