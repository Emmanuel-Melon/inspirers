import prisma from "@inspirers/prisma";
import { secret } from "../config";
import { AuthenticationError } from "../utils/errors";
import {
  createJWT,
  generateSalt,
  hashPassword,
  comparePasswords,
  ErrorCode,
} from "@inspirers/lib/auth";
import { User } from "@prisma/client";

export const signup = async (user: User) => {
  const salt = generateSalt();

  const userExists = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!userExists) {
    const newEntry = await prisma.user.create({
      data: {
        ...user,
        password: await hashPassword(user.password, salt),
      },
    });

    const token = createJWT(userExists, secret);

    return {
      ...newEntry,
      token,
    };
  }

  if (userExists && (await userExists).password === null) {
    return prisma.user.update({
      where: { email: user.email },
      data: {
        password: await hashPassword(user.password, salt),
      },
    });
  }

  return userExists;
};

export const login = async (
  credentials: Pick<User, "email" | "password">
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) {
      throw new Error(ErrorCode.UserNotFound);
    }

    if(user && user.password === null) {
      throw new Error(ErrorCode.UserMissingPassword);
    }
    const isValidPassword = await comparePasswords(
      credentials.password,
      user.password
    );

    if (!isValidPassword) {
      return Promise.reject(
        new AuthenticationError(ErrorCode.IncorrectPassword)
      );
    }
    return Promise.resolve(createJWT(user, secret));
  } catch (err) {}
};
