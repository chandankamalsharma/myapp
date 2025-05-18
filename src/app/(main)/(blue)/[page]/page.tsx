import { PortableText, groq } from "next-sanity";
import { notFound } from "next/navigation";
import { PolicySlugsResult } from "sanity-types";

import { cn } from "@/lib/utils";

import { ReachOut } from "@/components/layout/reach-out";

import { getPolicy, sanityFetch } from "@/sanity/lib/client";
import { commonPadding, topPadding } from "@/styles";

const policySlugs = groq`*[_type == "policy"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PolicySlugsResult>({
    query: policySlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}) {
  const policy = await getPolicy(params.page);

  if (!policy) {
    notFound();
  }

  return {
    title: policy?.title,
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const policy = await getPolicy(params.page);

  if (!policy) {
    notFound();
  }

  return (
    <>
      <main
        className={cn(
          commonPadding,
          topPadding,
          "prose text-center text-[22px] text-black prose-headings:relative prose-headings:mt-[144px] prose-headings:font-bold prose-headings:text-[#242424] prose-headings:after:absolute prose-headings:after:inset-x-0 prose-headings:after:h-px prose-headings:after:bg-black prose-h1:mb-[86px] prose-h1:mt-[80px] prose-h1:text-[66px] prose-h1:after:-bottom-[43px] prose-h2:mb-[33px] prose-h2:text-[48px] prose-h2:after:-bottom-[8px] prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:underline prose-strong:font-bold prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 sm:text-left",
        )}
      >
        <h1>{policy.title}</h1>
        {policy.content && <PortableText value={policy.content} />}
      </main>
      <ReachOut
        variant="blue"
        className="my-[100px] sm:my-[110px] xl:my-[200px]"
      />
    </>
  );
}
