import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteResource, ResourceModel, CompleteFolder, FolderModel, CompleteAutomation, AutomationModel, CompleteJourney, JourneyModel } from "./index"

export const _BackpackModel = z.object({
  id: z.string(),
  description: z.string().nullish(),
  name: z.string().nullish(),
  userId: z.string(),
  journeyId: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  maxFolders: z.number().int(),
})

export interface CompleteBackpack extends z.infer<typeof _BackpackModel> {
  resources: CompleteResource[]
  folders: CompleteFolder[]
  Automation: CompleteAutomation[]
  Journey: CompleteJourney
}

/**
 * BackpackModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BackpackModel: z.ZodSchema<CompleteBackpack> = z.lazy(() => _BackpackModel.extend({
  resources: ResourceModel.array(),
  folders: FolderModel.array(),
  Automation: AutomationModel.array(),
  Journey: JourneyModel,
}))
