import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";

export const docs = defineDocs({
  dir: "./src/content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      langs: ["ts", "js", "tsx", "jsx"],
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
    remarkPlugins: [remarkInstall],
  },
});
