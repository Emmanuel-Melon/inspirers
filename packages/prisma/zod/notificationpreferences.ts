import * as z from "zod"
import * as imports from "../zod-utils"
import { NotificationChannel } from "@prisma/client"

export const _NotificationPreferencesModel = z.object({
  id: z.string(),
  email: z.boolean(),
  userId: z.string(),
  preferredChannels: z.nativeEnum(NotificationChannel).array(),
})
