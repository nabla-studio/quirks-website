import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Folder, File, Files } from "fumadocs-ui/components/files";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

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

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ...mdxComponents,
    // HTML `ref` attribute conflicts with `forwardRef`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
  };
}
