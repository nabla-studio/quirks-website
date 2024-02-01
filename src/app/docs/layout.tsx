import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={pageTree}
        nav={{
          title: "Quirks",
          githubUrl: "https://github.com/nabla-studio/quirks",
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
