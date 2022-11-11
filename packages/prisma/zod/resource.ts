import * as z from "zod"
import * as imports from "../zod-utils"
import { ResourceType, ResourceOrigin } from "@prisma/client"
import { CompleteBackpack, BackpackModel, CompleteRoutine, RoutineModel, CompleteTag, TagModel, CompleteFolder, FolderModel } from "./index"

export const _ResourceModel = z.object({
  id: z.string(),
  backpackId: z.string().nullish(),
  title: z.string(),
  type: z.nativeEnum(ResourceType),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  routineId: z.string().nullish(),
  resourceUrl: z.string().nullish(),
  origin: z.nativeEnum(ResourceOrigin),
  folderId: z.string().nullish(),
  progress: z.number().int().nullish(),
  completed: z.boolean().nullish(),
  completedAt: z.date().nullish(),
  due: z.date().nullish(),
  next: z.date().nullish(),
  notes: z.string().nullish(),
  reflectionId: z.string().nullish(),
  completionTime: z.number().int().nullish(),
})

export interface CompleteResource extends z.infer<typeof _ResourceModel> {
  Backpack?: CompleteBackpack | null
  Routine?: CompleteRoutine | null
  tags: CompleteTag[]
  Folder?: CompleteFolder | null
}

/**
 * ResourceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ResourceModel: z.ZodSchema<CompleteResource> = z.lazy(() => _ResourceModel.extend({
  Backpack: BackpackModel.nullish(),
  Routine: RoutineModel.nullish(),
  tags: TagModel.array(),
  Folder: FolderModel.nullish(),
}))
