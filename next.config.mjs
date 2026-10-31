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
        destination: '/7-types-of-tyent-water',
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
        destination: '/pdf/Tyent_New_catalog.pdf',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/blogs/:slug',
        permanent: true,
      },
      {
        source: '/contact/tyent-delhi',
        destination: '/contact/best-hydrogen-rich-alkaline-water-ionizer-in-new-delhi',
        permanent: true,
      },
      {
        source: '/contact/Best_Hydrogen-Rich_Alkaline_Water_Ionizer_in_pune',
        destination: '/contact/best-hydrogen-rich-alkaline-water-ionizer-in-pune',
        permanent: true,
      },
      {
        source: '/contact/best-hydrogen-rich-alkaline-water-ionizer-in-delhi',
        destination: '/contact/best-hydrogen-rich-alkaline-water-ionizer-in-new-delhi',
        permanent: true,
      },
      {
        source: '/Terms_of_Use',
        destination: '/terms-of-use',
        permanent: true,
      },
      {
        source: '/Cancellation_Returns',
        destination: '/cancellation-returns',
        permanent: true,
      },
      {
        source: '/Sterilizing-water-generator',
        destination: '/sterilizing-water-generator',
        permanent: true,
      },
      {
        source: '/7-types-of-Tyent-water',
        destination: '/7-types-of-tyent-water',
        permanent: true,
      },
      {
        source: '/patented-SMPS-plus',
        destination: '/patented-smps-plus',
        permanent: true,
      },
      {
        source: '/Privacy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/Security',
        destination: '/security',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
