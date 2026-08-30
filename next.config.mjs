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
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/water',
        destination: '/7-types-of-Tyent-water',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/uce-13',
        destination: '/uce-13-plus',
        permanent: true,
      },
      {
        source: '/uce-11',
        destination: '/uce-11-plus',
        permanent: true,
      },
      {
        source: '/uce-9',
        destination: '/nmp-9',
        permanent: true,
      },
      {
        source: '/category/filters',
        destination: '/0.1-micron-filters',
        permanent: true,
      },
      {
        source: '/assets/Tyent_New_catalog.pdf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/blogs/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
