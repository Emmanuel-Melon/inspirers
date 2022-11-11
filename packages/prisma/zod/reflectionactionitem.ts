import * as z from "zod"
import * as imports from "../zod-utils"
import { ResflectionsType } from "@prisma/client"
import { CompleteReflection, ReflectionModel } from "./index"

export const _ReflectionActionItemModel = z.object({
  id: z.string(),
  type: z.nativeEnum(ResflectionsType),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  reflectionId: z.string(),
})

export interface CompleteReflectionActionItem extends z.infer<typeof _ReflectionActionItemModel> {
  Reflection?: CompleteReflection | null
}

/**
 * ReflectionActionItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ReflectionActionItemModel: z.ZodSchema<CompleteReflectionActionItem> = z.lazy(() => _ReflectionActionItemModel.extend({
  Reflection: ReflectionModel.nullish(),
}))
