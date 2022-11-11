import * as z from "zod"
import * as imports from "../zod-utils"
import { SharableLinkType, SharableLinkStatus, SharableLinkPermission } from "@prisma/client"

export const _SharableLinkModel = z.object({
  id: z.string(),
  key: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date(),
  isValid: z.boolean(),
  type: z.nativeEnum(SharableLinkType),
  status: z.nativeEnum(SharableLinkStatus),
  permission: z.nativeEnum(SharableLinkPermission),
  resourceId: z.string().nullish(),
})
