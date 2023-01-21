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
    adapter: FirestoreAdapter({...firebaseConfig }),
};
export default NextAuth(authOptions);
