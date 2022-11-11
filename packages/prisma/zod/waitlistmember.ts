import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWaitlist, WaitlistModel } from "./index"

export const _WaitlistMemberModel = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.date(),
  waitlistId: z.string().nullish(),
})

export interface CompleteWaitlistMember extends z.infer<typeof _WaitlistMemberModel> {
  Waitlist?: CompleteWaitlist | null
}

/**
 * WaitlistMemberModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WaitlistMemberModel: z.ZodSchema<CompleteWaitlistMember> = z.lazy(() => _WaitlistMemberModel.extend({
  Waitlist: WaitlistModel.nullish(),
}))
