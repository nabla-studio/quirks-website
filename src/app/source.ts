import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: docs.toFumadocsSource(),
});
