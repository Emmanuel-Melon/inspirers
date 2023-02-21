import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@inspirers/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from 'jsonwebtoken';
import {
  facebookClientId,
  facebookClientSecret,
  secret,
  authUrl,
  githubClientId,
  githubClientSecret,
  googleClientId,
  googleClientSecret,
  databaseUrl,
  jwtSecret
} from "config";


// https://www.youtube.com/watch?v=A5ZN--P9vXM
// https://morioh.com/p/e6c38e941a60
// https://www.youtube.com/watch?v=K8L6KVGG-7o
// https://www.reddit.com/r/nextjs/comments/pm8q9r/nextauth_customer_authentication_how_to_set/
// https://www.reddit.com/r/nextjs/comments/puoa33/configuring_axios_with_an_access_token_for_every/
// https://www.reddit.com/r/nextjs/comments/qnm7bj/next_auth_with_bearer_token_in_axios_request/
// https://arunoda.me/blog/add-auth-support-to-a-next-js-app-with-a-custom-backend
// accurate example: https://medium.com/vmlyrpoland-tech/nextjs-with-full-stack-authorization-based-on-jwt-and-external-api-e9977f9fdd5e
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@inspirers.com",
        },
        password: {
          label: "Password",
          type: "password",
        }
      },
      async authorize(credentials, req) {

        if(!credentials) {
          throw new Error("Email and password are required");
        }
        const res = await fetch(`${authUrl}/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      }
    }),
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    })
  ],
  database: databaseUrl,
  secret, // setting session to jwt makes user data unavailable in the client
  session: {
    strategy: "jwt",
  },
  jwt:{
    secret: jwtSecret
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
    newUser: "/auth/new",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return {
        user,
        account,
        profile,
        email,
      };
    },
    async session(data) {

      const { session, token } = data;
  
      // custom jwt
      const encodedToken = jwt.sign({ ...token?.user }, jwtSecret, { algorithm: 'HS256'});
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      // session.jwt = encodedToken;
      // pick certain fields
      session.user = token?.user;
      session.id_token = token.id_token
      return session;
    },
    async jwt(data) {
      const { token, user, account, profile, isNewUser } = data;
      if (account) {
        
        token.accessToken = account.access_token
        token.id = profile.id
        token.id_token = account.id_token
      }

      if(user) {
        token.user = user
      }


      if(profile) {
        token.profile = profile
      }
      return token;
    },
  },
  debug: true,
};

export default NextAuth(authOptions);
