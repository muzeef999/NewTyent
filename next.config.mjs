/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      LINKEDIN_CLIENT_ID: process.env.linkedin_client_id,
      LINKEDIN_CLIENT_SECRET: process.env.linkedin_client_secret,
  
      GOOGLE_CLIENT_ID: process.env.google_client_id,
      GOOGLE_CLIENT_SECRET: process.env.google_client_secret,
  
      FACEBOOK_CLIENT_ID:process.env.facebook_client_id,
      FACEBOOK_CLIENT_SECRET:process.env.facebook_client_secret
    },
  };
  
  export default nextConfig;
  