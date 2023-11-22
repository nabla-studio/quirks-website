const { resolve } = require("path");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "browsing-topics=(self)",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [...securityHeaders],
      },
    ];
  },
  webpack: (config) => {
    const noop = resolve(__dirname, "src", "etc", "noop", "index.js");

    config.resolve = {
      ...config.resolve, // This spreads existing resolve configuration (if any)
      alias: {
        ...config.resolve.alias, // This spreads any existing alias configurations
        libsodium: noop,
        "libsodium-wrappers": noop,
        "libsodium-sumo": noop,
        "libsodium-wrappers-sumo": noop,
        // bip39 is only used in the context of the extension wallet, so we can replace it.
        // replacing it with a no-op breaks build, so we can at least replace it with a lighter weight version for now.
        // ideally this becomes replaced with an API-compatible no-op.
        bip39: noop,
      },
    };

    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
