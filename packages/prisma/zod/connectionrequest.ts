import * as z from "zod"
import * as imports from "../zod-utils"
import { ConnectionRequestStatus } from "@prisma/client"
import { CompleteConnection, ConnectionModel } from "./index"

export const _ConnectionRequestModel = z.object({
  id: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  acceptedAt: z.date().nullish(),
  requesterId: z.string(),
  recepientId: z.string(),
  note: z.string().nullish(),
  status: z.nativeEnum(ConnectionRequestStatus),
})

export interface CompleteConnectionRequest extends z.infer<typeof _ConnectionRequestModel> {
  Connection: CompleteConnection[]
}

/**
 * ConnectionRequestModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ConnectionRequestModel: z.ZodSchema<CompleteConnectionRequest> = z.lazy(() => _ConnectionRequestModel.extend({
  Connection: ConnectionModel.array(),
}))
