"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import {
  defineDocuments,
  defineLocations,
  presentationTool,
} from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/env";
import { schema } from "@/sanity/schema";

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          // {
          //   route: "/blogs/:slug",
          //   filter: `_type == "blog" && slug.current == $slug`,
          // },
          {
            route: "/:page",
            filter: `_type == "policy" && slug.current == $page`,
          },
        ]),
        locations: {
          // blog: defineLocations({
          //   select: {
          //     title: "title",
          //     slug: "slug.current",
          //   },
          //   resolve: (doc) => ({
          //     locations: [
          //       {
          //         title: doc?.title || "Untitled",
          //         href: `/blogs/${doc?.slug}`,
          //       },
          //       {
          //         title: "Blogs",
          //         href: "/blogs",
          //       },
          //     ],
          //   }),
          // }),
          policy: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: `/${doc?.slug}`,
                },
              ],
            }),
          }),
        },
      },
      previewUrl: { previewMode: { enable: "/api/draft" } },
    }),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
