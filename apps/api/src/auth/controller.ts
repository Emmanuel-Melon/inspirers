import prisma from "@inspirers/prisma";
import { User } from "types/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { secret } from "../config";
import { AuthenticationError } from "../utils/errors";

export const createUser = async (user) => {
  const salt = bcrypt.genSaltSync();

  const userExists = prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!userExists) {
    const newEntry = await prisma.user.create({
      data: {
        ...user,
        password: bcrypt.hashSync(user.password, salt),
      },
    });

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      "hello",
      { expiresIn: "8h" }
    );

    return {
      ...newEntry,
      token,
    };
  }

  if (userExists && (await userExists).password === null) {
    // create password
  }

  return userExists;
};

export interface Credentials {
  email: string;
  password: string;
}

export const loginUser = async (credentials: Credentials) => {
  try {
    return prisma.user
    .findUnique({
      where: { email: credentials.email },
    })
    .then((user) => {
      console.log(user);

      if (!user) {
        return Promise.reject("Damn");
      }
      return bcrypt
        .compare(credentials.password, user.password)
        .then((isValidPassword) => {
          if (!isValidPassword) {
            return Promise.reject(
              new AuthenticationError("Invalid username or password")
            );
          }

          return Promise.resolve(jwt.sign(user, secret));
        });
    });
  } catch (err) {

  }
};
