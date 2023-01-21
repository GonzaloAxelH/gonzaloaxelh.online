import NextAuth from "next-auth";
import { db, firebaseConfig } from "@/settings/firebase";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
