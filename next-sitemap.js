require('dotenv-flow').config()

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEPLOYMENT_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    '/purchase/*',
    '/discord/*',
    '/discord',
    '/_next',
    '/purchase',
    '/404',
    '/ask',
    '/blank',
    '/confirm/membership',
    '/login',
    '/logout',
    '/redirect',
    '/sale',
    '/invoices',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: 'Twitterbot',
        disallow: '',
      },
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/discord',
          '/_next',
          '/purchase',
          '/404',
          '/ask',
          '/blank',
          '/confirm/membership',
          '/login',
          '/logout',
          '/redirect',
          '/sale',
          '/invoices',
        ],
      },
    ],
    additionalSitemaps: [
      'http://egghead-sitemaps.s3.amazonaws.com/sitemaps/sitemap.xml.gz',
      'https://egghead.io/tags-sitemap-0.xml',
      'https://egghead.io/tags-sitemap-1.xml',
      'https://egghead.io/tags-sitemap-2.xml',
      'https://egghead.io/tags-sitemap-3.xml',
      'https://egghead.io/tags-sitemap-4.xml',
      'https://egghead.io/tags-sitemap-5.xml',
      'https://egghead.io/tags-sitemap-6.xml',
      'https://egghead.io/tags-sitemap-7.xml',
      'https://egghead.io/tags-sitemap-8.xml',
      'https://egghead.io/tags-sitemap-9.xml',
      'https://egghead.io/tags-sitemap-10.xml',
      'https://egghead.io/tags-sitemap-11.xml',
      'https://egghead.io/tags-sitemap-12.xml',
      'https://egghead.io/tags-sitemap-13.xml',
      'https://egghead.io/tags-sitemap-14.xml',
      'https://egghead.io/tags-sitemap-15.xml',
    ],
  },
}
