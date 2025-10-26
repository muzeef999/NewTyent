// Remove TypeScript-only type import/annotation for .mjs
const nextConfig = {
  experimental: {
    optimizeCss: true,
    serverActions: { allowedOrigins: ['*']} 
  },
  env: {
    BULKLY_API_URL: process.env.BULKLY_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tyent-crm.vercel.app',
      },
       {
        protocol: 'https',
        hostname: 'tyent-crm.vercel.app',
      },
      
    ]
  }
};

export default nextConfig;
