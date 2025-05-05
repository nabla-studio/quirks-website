import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import { remarkInclude } from "fumadocs-mdx/config";
import type { InferPageType } from "fumadocs-core/source";
import { source } from "@/app/source";
import { fileGenerator } from "fumadocs-docgen";
import { remarkInstall } from "fumadocs-docgen";
import { remarkDocGen } from "fumadocs-docgen";
import remarkStringify from "remark-stringify";
import matter from "gray-matter";
import { readFile } from "fs/promises";

const processor = remark()
  .use(remarkMdx)
  // https://fumadocs.dev/docs/mdx/include
  .use(remarkInclude)
  // gfm styles
  .use(remarkGfm)
  .use(remarkDocGen, { generators: [fileGenerator()] })
  .use(remarkInstall)
  .use(remarkStringify); // to string

export async function getLLMText(page: InferPageType<typeof source>) {
  const fileContent = await readFile(page.data._file.absolutePath, "utf8");
  const { content } = matter(fileContent);

  const processed = await processor.process({
    path: page.data._file.absolutePath,
    value: content,
  });

  return `# ${page.data.title}
URL: ${page.url}
 
${page.data.description}
 
${processed.value}`;
}
