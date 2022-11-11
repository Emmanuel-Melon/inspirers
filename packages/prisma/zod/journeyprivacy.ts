import * as z from "zod"
import * as imports from "../zod-utils"

export const _JourneyPrivacyModel = z.object({
  id: z.string(),
  userId: z.string(),
  journeyId: z.string(),
})
