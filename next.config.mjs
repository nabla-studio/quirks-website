import { resolve } from "path";
import createMDX from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";
import createBundleAnalyzer from "@next/bundle-analyzer";
import { remarkInstall } from "fumadocs-docgen";
import { cwd } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
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

const withMDX = createMDX({
  rootContentPath: "./src/content",
  buildSearchIndex: true,
  mdxOptions: {
    lastModifiedTime: "git",
    rehypeCodeOptions: {
      transformers: [
        ...rehypeCodeDefaultOptions.transformers,
        transformerTwoslash(),
      ],
    },
    remarkPlugins: [[remarkInstall]],
  },
});

export default withMDX(withBundleAnalyzer(nextConfig));
