/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.tyent.co.in',
  generateRobotsTxt: true, // Generates robots.txt file
   robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        disallow: '/private', // Example: Blocking specific paths
      },
    ],
  },
};
