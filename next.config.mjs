import { resolve } from "path";
import { createMDX } from "fumadocs-mdx/next";
import createBundleAnalyzer from "@next/bundle-analyzer";
import { cwd } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["typescript", "twoslash"],
  webpack: (config) => {
    const noop = resolve(cwd(), "src", "etc", "noop", "index.js");

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

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = createMDX();

export default withMDX(withBundleAnalyzer(nextConfig));
