import {
  ClientPerspective,
  QueryParams,
  createClient,
  groq,
} from "next-sanity";
import { draftMode } from "next/headers";
import {
  GET_BLOGS_QUERYResult,
  GET_BLOG_QUERYResult,
  GET_POLICIES_QUERYResult,
  GET_POLICY_QUERYResult,
} from "sanity-types";
import "server-only";

import { token } from "@/sanity/lib/token";

import { apiVersion, dataset, projectId, studioUrl, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    studioUrl,
    // logger: console,
    // filter: (props) => {
    //   if (props.sourcePath.at(-1) === "title") {
    //     return true;
    //   }
    //
    //   return props.filterDefault(props);
    // },
  },
});

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  /**
   * Stega embedded Content Source Maps are used by Visual Editing by both the Sanity Presentation Tool and Vercel Visual Editing.
   * The Sanity Presentation Tool will enable Draft Mode when loading up the live preview, and we use it as a signal for when to embed source maps.
   * When outside of the Sanity Studio we also support the Vercel Toolbar Visual Editing feature, which is only enabled in production when it's a Vercel Preview Deployment.
   */
  stega = perspective === "previewDrafts" ||
    process.env.VERCEL_ENV === "preview",
}: {
  query: string;
  params?: QueryParams;
  perspective?: Omit<ClientPerspective, "raw">;
  stega?: boolean;
}) {
  if (perspective === "previewDrafts") {
    return client.fetch<QueryResponse>(query, params, {
      stega,
      perspective: "previewDrafts",
      // The token is required to fetch draft content
      token,
      // The `previewDrafts` perspective isn't available on the API CDN
      useCdn: false,
      // And we can't cache the responses as it would slow down the live preview experience
      next: { revalidate: 0 },
    });
  }
  return client.fetch<QueryResponse>(query, params, {
    stega,
    perspective: "published",
    // The `published` perspective is available on the API CDN
    useCdn,
    // Only enable Stega in production if it's a Vercel Preview Deployment, as the Vercel Toolbar supports Visual Editing
    // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (60 seconds)
    next: { revalidate: 60 },
  });
}

// export async function sanityFetch<QueryResponse>({
//   query,
//   params = {},
//   tags,
// }: {
//   query: string;
//   params?: QueryParams;
//   tags?: string[];
// }) {
//   return client.fetch<QueryResponse>(query, params, {
//     next: {
//       revalidate: process.env.NODE_ENV === "development" ? 5 : 3600,
//       tags,
//     },
//   });
// }

const GET_POLICY_QUERY = groq`*[
    _type == "policy" &&
    slug.current == $slug
  ][0]{
  title,
  slug,
  content
}`;
export const getPolicy = async (slug: string) => {
  return sanityFetch<GET_POLICY_QUERYResult>({
    params: { slug },
    query: GET_POLICY_QUERY,
  });
};

const GET_POLICIES_QUERY = groq`*[
    _type == "policy"
  ]{
  title,
  slug,
}`;
export const getPolicies = async () => {
  return sanityFetch<GET_POLICIES_QUERYResult>({
    query: GET_POLICIES_QUERY,
  });
};

const GET_BLOG_QUERY = groq`*[
    _type == "blog" &&
    slug.current == $slug
  ][0]{
  title,
  slug,
  smallDescription,
  titleImage,
  content
}`;
export const getBlog = async (slug: string) => {
  return sanityFetch<GET_BLOG_QUERYResult>({
    params: { slug },
    query: GET_BLOG_QUERY,
  });
};

const GET_BLOGS_QUERY = groq`*[
    _type == "blog"
  ]{
  title,
  slug,
}`;
export const getBlogs = async () => {
  return sanityFetch<GET_BLOGS_QUERYResult>({
    query: GET_BLOGS_QUERY,
  });
};
