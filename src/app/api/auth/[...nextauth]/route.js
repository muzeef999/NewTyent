import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/app/lib/mongoDB";
import bcrypt from "bcryptjs";

const myNextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phoneNumber: { label: "phoneNumber", type: "phoneNumber" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { phoneNumber, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ phoneNumber });


          if (!user) {
            throw new Error("User not found"); // Ensure error is thrown
          }

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) {
            throw new Error("Invalid email or password");
          }

          return { id: user._id, name: user.name, phoneNumber: user.phoneNumber, role: user.role };
        } catch (error) {
          throw new Error(error.message || "Authentication failed"); // Ensure error is propagated

        }
      },
    }),


  ],

  callbacks: {
    async jwt({ token, user }) {
      // Include user details in JWT if available
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.phoneNumber = user.phoneNumber;
        token.role = user.role; // Include role
      }
      return token;
      
    },
    async session({ session, token }) {
      // Include token details in session
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          phoneNumber: token.phoneNumber,
          role: token.role, // Include role
        };
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback: ", { user, account, profile });
      return true; // Returning true allows the sign-in to proceed
      
    },
    
  },

  pages: {
    signIn: "/login",
    error: "/api/auth/error",
    dashboard: "/dashboard",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

export const GET = (req, res) => NextAuth(req, res, myNextAuthOptions);
export const POST = (req, res) => NextAuth(req, res, myNextAuthOptions);
