/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.tyent.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/dashboard',
    '/adminBlog',
    '/adminBlog/*',
    '/adminOrder',
    '/leads',
    '/service',
    '/complains',
    '/shipping',
    '/our-story1',
    '/tyent-global1',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        disallow: '/private',
      },
    ],
  },
};
