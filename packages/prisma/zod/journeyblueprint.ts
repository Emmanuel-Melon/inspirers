import * as z from "zod"
import * as imports from "../zod-utils"

export const _JourneyBluePrintModel = z.object({
  id: z.string(),
  userId: z.string().nullish(),
  type: z.string().nullish(),
  templateId: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  field: z.string().nullish(),
  expertise: z.string().nullish(),
  price: z.string().nullish(),
  creator: z.string().nullish(),
  createdAt: z.string().nullish(),
  updateAt: z.string().nullish(),
  image: z.string().nullish(),
})
