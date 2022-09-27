import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@inspirers/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import InspirersCustomAdapter from "lib/custom-prisma-adapter";
import { 
  facebokClientId,
  facebokClientSecret,
  secret 
} from "config";

const inspirersAdapter = InspirersCustomAdapter(prisma);
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [

    FacebookProvider({
      clientId: facebokClientId,
      clientSecret: facebokClientSecret,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  database: process.env.DATABASE_URL,
  secret,
  pages: {
    signIn: "/auth", // Displays signin buttons
    // signOut: "/auth/signout", // Displays form with sign out button
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // Used for check email page
    newUser: "/auth/new", // If set, new users will be directed here on first sign in
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
    async session({ session, user, token }) {
      // console.log(user);
      return {
        session,
        user,
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
     */
     async jwt({ token, user, account, profile, isNewUser }) { 
      console.log('got data!');

      /**
       *       const isUserSignedIn = user ? true : false;
      // make a http call to our graphql api
      // store this in postgres
      if(isUserSignedIn) {
        token.id = user.id.toString();
      }
       */
      return token;
    }
  },
  debug: true,
};

export default NextAuth(authOptions);
