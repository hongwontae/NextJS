import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth/next";
import Providers from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    Providers({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        if (!user) {
          client.close();
          throw new Error('Not found USER');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Not Found Password');
        }

        client.close();
        return {
          email: user.email,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
