/** @type {import('next-sitemap').IConfig} */
module.exports = {
  sourceDir: process.env.TYENT_NEXT_DIST_DIR || ".next",
  siteUrl: process.env.SITE_URL || 'https://www.tyent.co.in',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: null,
  priority: null,
  autoLastmod: false,
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
};
