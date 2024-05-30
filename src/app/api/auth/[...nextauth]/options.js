import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
};
