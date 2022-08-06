import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@inspirers/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InspirersCustomAdapter from "lib/custom-prisma-adapter";


const inspirersAdapter = InspirersCustomAdapter(prisma);
export const authOptions = {
  adapter: inspirersAdapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
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
  debug: true,
};

export default NextAuth(authOptions);
