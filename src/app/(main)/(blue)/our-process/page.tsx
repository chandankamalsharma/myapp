import type { Metadata } from "next";

import { servicesChooseCards } from "@/lib/data";

import { Choose } from "@/components/choose";
import { ReachOut } from "@/components/layout/reach-out";

import { CenterSection } from "./_components/center-section";
import { ExtraCopy } from "./_components/extra-copy";
import { Hero } from "./_components/hero";
import { Process } from "./_components/process";

export const metadata: Metadata = {
  title: "Our Process",
};
export default function Page() {
  return (
    <>
      <Hero />
      <div className="relative z-10 rounded-t-[13px] bg-have-300 sm:rounded-t-[27px] xl:rounded-t-[50px]">
        <Process />
        <CenterSection />
        <ExtraCopy />
        <Choose
          variant="blue"
          choices={servicesChooseCards}
          className="mb-[60px] sm:mb-[100px] xl:mb-[150px]"
        />
        <ReachOut variant="blue" />
      </div>
    </>
  );
}
