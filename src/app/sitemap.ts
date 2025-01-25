import { MetadataRoute } from "next";

import { getPolicies } from "@/sanity/lib/client";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ["", "about-us", "our-process", "blogs"].map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date().toISOString(),
  }));

  const policiesPromise = getPolicies().then((policies) =>
    policies.map((policy) => ({
      url: `${baseUrl}/${policy.slug?.current}`,
      lastModified: new Date().toISOString(),
    })),
  );

  let fetchedRoutes: MetadataRoute.Sitemap = [];

  try {
    fetchedRoutes = (await Promise.all([policiesPromise])).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }
  return [...routesMap, ...fetchedRoutes];
}
