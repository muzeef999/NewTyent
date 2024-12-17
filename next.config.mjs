/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
      LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
  
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  
      FACEBOOK_CLIENT_ID:process.env.FACEBOOK_CLIENT_ID,
      FACEBOOK_CLIENT_SECRET:process.env.FACEBOOK_CLIENT_SECRET
    },
  };
  
  export default nextConfig;
  