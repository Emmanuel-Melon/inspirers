import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWaitlistMember, WaitlistMemberModel } from "./index"

export const _WaitlistModel = z.object({
  id: z.string(),
  createdAt: z.date().nullish(),
})

export interface CompleteWaitlist extends z.infer<typeof _WaitlistModel> {
  members: CompleteWaitlistMember[]
}

/**
 * WaitlistModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WaitlistModel: z.ZodSchema<CompleteWaitlist> = z.lazy(() => _WaitlistModel.extend({
  members: WaitlistMemberModel.array(),
}))
