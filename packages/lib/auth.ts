import { compare, hash } from "bcryptjs";
import { IdentityProvider } from "@prisma/client";
import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

export const generateSalt = () => bcrypt.genSaltSync();

export async function hashPassword(password: string, salt) {
  return hash(password, salt);
}

export const comparePasswords = (password, target) => {
  return bcrypt.compare(password, target);
};

export const createJWT = (user, secret) => {
  const token = jwt.sign(
    { id: user.id, ...user },
    secret
  );
  return token;
};

export enum ErrorCode {
  UserNotFound = "user-not-found",
  IncorrectPassword = "incorrect-password",
  UserMissingPassword = "missing-password",
  InternalServerError = "internal-server-error",
  RateLimitExceeded = "rate-limit-exceeded",
}

export const identityProviderNameMap: { [key in IdentityProvider]: string } = {
  [IdentityProvider.GOOGLE]: "Google",
  [IdentityProvider.GITHUB]: "Github",
};
