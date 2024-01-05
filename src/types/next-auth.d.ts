import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      id: string | number;
      email: string;
    };
  }
}