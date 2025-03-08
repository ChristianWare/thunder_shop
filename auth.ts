/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          // Find user in database - use findUnique for more precise lookup
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          // Debug log for troubleshooting
          console.log(
            "User lookup result:",
            user ? "Found user" : "User not found"
          );

          // Check if the user exists and if the password matches:
          if (user && user.password) {
            const isMatch = compareSync(
              credentials.password as string,
              user.password
            );

            // Debug log for password matching
            console.log("Password match:", isMatch ? "Yes" : "No");

            // If password is correct, return user
            if (isMatch) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
              };
            }
          }
          // If user does not exist or password does not match then return null
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Add JWT callback to store user data in the token
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    // Update session callback to properly pass user data from token
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.id || token.sub;
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
