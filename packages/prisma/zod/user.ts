import * as z from "zod"
import * as imports from "../zod-utils"
import { IdentityProvider } from "@prisma/client"
import { CompleteAccount, AccountModel, CompleteSession, SessionModel, CompleteJourney, JourneyModel, CompleteNotificationRecepient, NotificationRecepientModel, CompleteSchedule, ScheduleModel, CompleteApiKey, ApiKeyModel, CompleteWebhook, WebhookModel, CompleteCredential, CredentialModel, CompleteMembership, MembershipModel, CompleteRoutine, RoutineModel } from "./index"

export const _UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  username: z.string().nullish(),
  image: z.string().nullish(),
  email: z.string(),
  createdAt: z.date().nullish(),
  bio: z.string().nullish(),
  password: z.string().nullish(),
  emailVerified: z.boolean().nullish(),
  login: z.string().nullish(),
  identityProvider: z.nativeEnum(IdentityProvider),
  identityProviderId: z.string().nullish(),
  journeyLimit: z.number().int(),
  location: z.string().nullish(),
  occupation: z.string().nullish(),
  timeZone: z.string(),
  weekStart: z.string(),
  dayStart: z.string().nullish(),
  dayEnd: z.string().nullish(),
  completedOnboarding: z.boolean(),
  createdFirstJourney: z.boolean(),
  timeFormat: z.number().int().nullish(),
  journeyId: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof _UserModel> {
  Account: CompleteAccount[]
  Session: CompleteSession[]
  Journey?: CompleteJourney | null
  NotificationRecepient: CompleteNotificationRecepient[]
  Schedule: CompleteSchedule[]
  ApiKey: CompleteApiKey[]
  Webhook: CompleteWebhook[]
  Credential: CompleteCredential[]
  Memberships: CompleteMembership[]
  Routine: CompleteRoutine[]
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() => _UserModel.extend({
  Account: AccountModel.array(),
  Session: SessionModel.array(),
  Journey: JourneyModel.nullish(),
  NotificationRecepient: NotificationRecepientModel.array(),
  Schedule: ScheduleModel.array(),
  ApiKey: ApiKeyModel.array(),
  Webhook: WebhookModel.array(),
  Credential: CredentialModel.array(),
  Memberships: MembershipModel.array(),
  Routine: RoutineModel.array(),
}))
