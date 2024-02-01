import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";

const mdxComponents = {
  Popup,
  PopupContent,
  PopupTrigger,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ...mdxComponents,
  };
}
