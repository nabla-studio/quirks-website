import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import { type ReactNode } from "react";
import "./docs.css";
import "fumadocs-ui/twoslash.css";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Quirks",
        githubUrl: "https://github.com/nabla-studio/quirks",
        transparentMode: "top",
      }}
    >
      {children}
    </DocsLayout>
  );
}
