import * as z from "zod"
import * as imports from "../zod-utils"
import { ConnectionStatus } from "@prisma/client"
import { CompleteConnectionRequest, ConnectionRequestModel } from "./index"

export const _ConnectionModel = z.object({
  id: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  status: z.nativeEnum(ConnectionStatus),
  affinityScore: z.number().int(),
  initiatorId: z.string(),
  recepientId: z.string(),
  requestId: z.string(),
  connectionRequestId: z.string(),
})

export interface CompleteConnection extends z.infer<typeof _ConnectionModel> {
  request: CompleteConnectionRequest
}

/**
 * ConnectionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ConnectionModel: z.ZodSchema<CompleteConnection> = z.lazy(() => _ConnectionModel.extend({
  request: ConnectionRequestModel,
}))
