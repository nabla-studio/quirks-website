import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";
import { Folder, File, Files } from "fumadocs-ui/components/files";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";

const mdxComponents: MDXComponents = {
  Popup,
  PopupContent,
  PopupTrigger,
  Folder,
  File,
  Files,
  Callout,
  TypeTable,
  Tab,
  Tabs,
  Step,
  Steps,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ...mdxComponents,
  };
}
