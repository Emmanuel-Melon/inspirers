import prisma from "../lib/prisma";
import { UserObject } from "types/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { secret } from "../config";
import { AuthenticationError } from "../utils/errors";

export const createUser = async (user) => {
    const salt = bcrypt.genSaltSync();
  
    const newEntry = await prisma.user.create({
      data: {
        ...user,
        password: bcrypt.hashSync(user.password, salt)
      },
    });
  
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      'hello',
      { expiresIn: '8h' }
    );
  
    return {
      ...newEntry,
      token
    };
  };

  export interface Credentials {
    email: string;
    password: string;
  }
  
  export const loginUser = async (credentials: Credentials) => {
    return prisma.user.findFirst({
      where: { email: credentials.email }
    })
    .then(user => {
      return bcrypt
        .compare(credentials.password, user.password)
        .then(isValidPassword => {
          if (!isValidPassword) {
            return Promise.reject(
              new AuthenticationError("Invalid username or password")
            );
          }
  
          return Promise.resolve(
            jwt.sign(user, secret)
          );
        });
    });
  }