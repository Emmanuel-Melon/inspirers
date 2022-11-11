import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteResource, ResourceModel } from "./index"

export const _FolderModel = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
})

export interface CompleteFolder extends z.infer<typeof _FolderModel> {
  Resources: CompleteResource[]
}

/**
 * FolderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FolderModel: z.ZodSchema<CompleteFolder> = z.lazy(() => _FolderModel.extend({
  Resources: ResourceModel.array(),
}))
