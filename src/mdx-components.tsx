import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";
import { File, Files } from "fumadocs-ui/components/files";
import { Callout } from "fumadocs-ui/components/callout";

const mdxComponents: MDXComponents = {
  Popup,
  PopupContent,
  PopupTrigger,
  File,
  Files,
  Callout,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ...mdxComponents,
  };
}
