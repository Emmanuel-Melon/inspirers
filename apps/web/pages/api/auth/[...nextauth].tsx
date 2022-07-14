import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    /**
     * CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      }
    })
     */
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    })
  ],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,

  session: {
    jwt: true
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.SECRET,
    /**
     * encode: async ({ secret, token, maxAge }) => {
      const jwtClaims = {
        "sub": token?.sub.toString() ,
        "name": token?.name ,
        "email": token?.email,
        "iat": Date.now() / 1000,
        "exp": Math.floor(Date.now() / 1000) + (24*60*60)
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256'});
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }) => {
      const decodedToken = jwt.verify(token, secret, { algorithms: ['HS256']});
      return decodedToken;
    },
     */
  },

  pages: {
    signIn: "/auth", // Displays signin buttons
    // signOut: "/auth/signout", // Displays form with sign out button
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // Used for check email page
    // newUser: "/auth/new", // If set, new users will be directed here on first sign in
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
    /**
     * async session(session, user) {
      console.log(session);
      session.user.id = user.id
      return session
    } */
    async jwt(tokenPayload, user, account, profile, isNewUser) {
      console.log(user);

      if (isNewUser) {
        console.log(isNewUser);
      }

      if (tokenPayload && user) {
        return { ...tokenPayload, id: `${user.id}` }
      }

      return tokenPayload
    },
    // async redirect(url: string, baseUrl: string) { },
    // async session(session, token) {
    // const encodedToken = jwt.sign(token, process.env.SECRET, { algorithm: 'HS256'});
    // session.id = token.id;
    //session.token = encodedToken;
    // return Promise.resolve(session);
    // }
    /**
     * ,
    async jwt(token, user, account, profile, isNewUser) { 
      const isUserSignedIn = user ? true : false;
      // make a http call to our graphql api
      // store this in postgres
      if(isUserSignedIn) {
        token.id = user.id.toString();
      }
      return Promise.resolve(token);
    }
     */
  },
  events: {},
  debug: true,
}

export default NextAuth(authOptions);