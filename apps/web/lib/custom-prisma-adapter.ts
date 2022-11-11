import {
  Account,
  Prisma,
  PrismaClient,
  User,
  IdentityProvider,
} from "@prisma/client";
import { identityProviderNameMap } from "utils/auth";

/** @return { import("next-auth/adapters").Adapter } */
export default function InspirersCustomAdapter(prismaClient: PrismaClient) {
  return {
    signup: async (data: Prisma.UserCreateInput) => {
      const user = await prismaClient.user.create({ data });
      return user;
    },
    async getUser(id: User["id"]) {
      return prismaClient.user.findUnique({ where: { id } });
    },
    async getUserByEmail(email: User["email"]) {
      return;
    },
    async getUserByAccount(provider_providerAccountId: {
      providerAccountId: Account["providerAccountId"];
      provider: User["identityProvider"];
    }) {
      let _account;
      const account = await prismaClient.account.findUnique({
        where: {
          provider_providerAccountId,
        },
        select: {
          user: true,
        },
      });
      const provider =
        provider_providerAccountId?.provider.toUpperCase() as IdentityProvider;
      const obtainProvider = identityProviderNameMap[
        provider
      ].toUpperCase() as IdentityProvider;
      const user = await prismaClient.user.findFirst({
        where: {
          identityProviderId: provider_providerAccountId?.providerAccountId,
          identityProvider: obtainProvider,
        },
      });
      return user || null;
    },
    async updateUser({ id, ...data }) {
      return prismaClient.user.update({ where: { id }, data });
    },
    async deleteUser(id: User["id"]) {
      return prismaClient.user.delete({ where: { id } });
    },
    async linkAccount(data: Prisma.AccountCreateInput) {
      return prismaClient.account.create({ data });
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return;
    },
    async createSession(data: Prisma.SessionCreateInput) {
      return prismaClient.session.create({ data });
    },
    async getSessionAndUser(sessionToken: string) {
      const userAndSession = await prismaClient.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
    async updateSession(data: Prisma.SessionWhereUniqueInput) {
      return;
    },
    async deleteSession(sessionToken: string) {
      return;
    },
    async createVerificationToken({ identifier, expires, token }) {
      return;
    },
    async useVerificationToken({ identifier, token }) {
      return;
    },
  };
}
