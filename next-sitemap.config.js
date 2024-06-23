/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://quirks.nabla.studio/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
