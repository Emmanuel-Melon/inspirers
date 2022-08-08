import { IdentityProvider } from "@prisma/client/";

export const identityProviderNameMap: { [key in IdentityProvider]: string } = {
    [IdentityProvider.GITHUB]: "Github",
    [IdentityProvider.GOOGLE]: "Google",
  };
  