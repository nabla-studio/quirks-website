/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || "https://quirks.nabla.studio/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
