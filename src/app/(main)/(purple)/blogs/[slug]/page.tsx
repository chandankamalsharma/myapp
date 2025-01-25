import { PortableText, groq } from "next-sanity";
import { notFound } from "next/navigation";
import { BlogSlugsResult } from "sanity-types";

import { cn } from "@/lib/utils";

import { ReachOut } from "@/components/layout/reach-out";

import { getBlog, sanityFetch } from "@/sanity/lib/client";
import { commonPadding, topPadding } from "@/styles";

import { Hero } from "./_components/hero";

const blogSlugs = groq`*[_type == "blog"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<BlogSlugsResult>({
    query: blogSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: blog.smallDescription,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }
  return (
    <>
      <Hero
        title={blog.title || "Default Title"}
        description={blog.smallDescription}
      />
      <main
        className={cn(
          commonPadding,
          topPadding,
          "prose text-center text-[22px] text-black prose-headings:relative prose-headings:mt-[144px] prose-headings:font-bold prose-headings:text-[#242424] prose-headings:after:absolute prose-headings:after:inset-x-0 prose-headings:after:h-px prose-headings:after:bg-black prose-h1:mb-[86px] prose-h1:mt-[80px] prose-h1:text-[66px] prose-h1:after:-bottom-[43px] prose-h2:mb-[33px] prose-h2:text-[48px] prose-h2:after:-bottom-[8px] prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:underline prose-strong:font-bold prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 sm:text-left",
        )}
      >
        {blog.content && <PortableText value={blog.content} />}
      </main>
      <ReachOut variant="purple" />
    </>
  );
}
