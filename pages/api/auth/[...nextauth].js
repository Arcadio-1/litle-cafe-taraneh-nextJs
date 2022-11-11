import NextAuth from "next-auth/next";
// import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";

import { varifiyPassword } from "../../../lib/hash-helper";
import { getClient } from "../../../lib/api-helper";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await getClient();
        const userCollection = client.db().collection("taraneh-users");
        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("user not Found");
        }
        const isPasswordIsCrect = await varifiyPassword(
          credentials.password,
          user.password
        );
        if (!isPasswordIsCrect) {
          throw new Error("your Entered Password is Wrong");
        }
        client.close();
        // console.log(user.email);
        return { email: user.email };
        // return user;
      },
    }),
  ],
});
