import NextAuth, { Account, NextAuthResult, Profile } from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut }:NextAuthResult = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }: {
        account: Account,
        profile?: Profile
    }) {
      if (account.provider === "google") {
        return profile?.email_verified
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
})

