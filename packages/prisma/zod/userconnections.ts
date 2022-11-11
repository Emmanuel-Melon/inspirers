import * as z from "zod"
import * as imports from "../zod-utils"

export const _UserConnectionsModel = z.object({
  id: z.string(),
  userId: z.string(),
  connectionId: z.string(),
})
