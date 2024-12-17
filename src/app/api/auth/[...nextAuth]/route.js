import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/app/lib/mongoDB";
import bcrypt from "bcrypt";

const myNextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });


          if (!user) {
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);

          if (!isValid) {
            throw new Error("Invalid email or password");
          }

          return { id: user._id, name: user.name, email: user.email, role: user.role };
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),

    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: { scope: "openid profile email" },
      },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile, tokens) {
        const defaultImage =
          "https://cdn-icons-png.flaticon.com/512/174/174857.png";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Include user details in JWT if available
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
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
          email: token.email,
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
