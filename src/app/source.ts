import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const { getPage, generateParams, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: docs.toFumadocsSource(),
});
