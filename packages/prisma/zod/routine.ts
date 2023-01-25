import * as z from "zod"
import * as imports from "../zod-utils"
import { RoutineType, RoutinePrivacy, RoutineSource, PeriodType, RoutineSchedule } from "@prisma/client"
import { CompleteRoutineItem, RoutineItemModel, CompleteResource, ResourceModel, CompleteFolder, FolderModel, CompleteJourney, JourneyModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _RoutineModel = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
  startsAt: z.date().nullish(),
  finishesAt: z.date().nullish(),
  resourceId: z.string().nullish(),
  journeyId: z.string().nullish(),
  type: z.nativeEnum(RoutineType).nullish(),
  duration: z.string().nullish(),
  description: z.string().nullish(),
  reminders: z.boolean(),
  reminder: z.string().nullish(),
  privacy: z.nativeEnum(RoutinePrivacy).nullish(),
  source: z.nativeEnum(RoutineSource).nullish(),
  periodStartDate: z.date().nullish(),
  periodEndDate: z.date().nullish(),
  periodDays: z.number().int().nullish(),
  beforeEventBuffer: z.number().int(),
  afterEventBuffer: z.number().int(),
  periodType: z.nativeEnum(PeriodType),
  scheduleType: z.nativeEnum(RoutineSchedule),
  startingDate: z.date().nullish(),
  endDate: z.date().nullish(),
  linkedFolderId: z.string().nullish(),
  position: z.number().int(),
  recurrence: jsonSchema,
})

export interface CompleteRoutine extends z.infer<typeof _RoutineModel> {
  items: CompleteRoutineItem[]
  resources: CompleteResource[]
  folders: CompleteFolder[]
  Journey?: CompleteJourney | null
}

/**
 * RoutineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoutineModel: z.ZodSchema<CompleteRoutine> = z.lazy(() => _RoutineModel.extend({
  items: RoutineItemModel.array(),
  resources: ResourceModel.array(),
  folders: FolderModel.array(),
  Journey: JourneyModel.nullish(),
}))
