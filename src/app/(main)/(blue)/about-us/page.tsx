import type { Metadata } from "next";

import { ReachOut } from "@/components/layout/reach-out";

import { Book } from "./_components/book";
import { Guidance } from "./_components/guidance";
import { Hero } from "./_components/hero";
import { Vision } from "./_components/vision";

export const metadata: Metadata = {
  title: "About Us",
};
export default function Page() {
  return (
    <>
      <Hero />
      <Book />
      <Vision />
      <Guidance />
      <ReachOut variant="blue" />
    </>
  );
}
