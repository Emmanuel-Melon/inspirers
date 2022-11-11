import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteBackpack, BackpackModel } from "./index"

export const _AutomationModel = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  userId: z.string(),
  journeyId: z.string(),
  backpackId: z.string().nullish(),
})

export interface CompleteAutomation extends z.infer<typeof _AutomationModel> {
  Backpack?: CompleteBackpack | null
}

/**
 * AutomationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AutomationModel: z.ZodSchema<CompleteAutomation> = z.lazy(() => _AutomationModel.extend({
  Backpack: BackpackModel.nullish(),
}))
