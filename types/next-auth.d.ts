// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role?: string;
    name?: string | null;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
      name?: string | null;
      email?: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}
