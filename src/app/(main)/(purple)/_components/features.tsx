"use client";

import { cubicBezier, m } from "framer-motion";
import { ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { AnimatedLogo } from "@/components/logo";
import { Button } from "@/components/ui-new/button";

import { commonPadding } from "@/styles";

const features = [
  {
    title: "Full Service",
    bgText: "Full Support",
    text: "When we say we’ve got your back we mean it. Our commitment to modernization means crafting a...",
  },
  {
    title: "Expertise",
    bgText: "NABIP Certified",
    text: "Certified and proud of it! Backed by the National Association of Benefits and Insurance...",
  },
  {
    title: "Bespoke",
    bgText: "Bespoke Service",
    text: "No cookie-cutter solutions here, we're all about tailored perfection. With our expertise...",
  },
];

export const Features = ({ className }: { className?: string }) => {
  return (
    <div className="xl:bg-features">
      <section
        className={cn(
          commonPadding,
          "relative pb-[71px] pt-8 sm:pb-[102px] sm:pt-16 xl:pb-[116px]",
          className,
        )}
      >
        <h2 className="relative z-10 text-center text-[58px] font-semibold text-haze-950 sm:text-[74px]">
          Noteworthy Features
        </h2>
        <div className="relative z-10 flex flex-wrap justify-center gap-[50px] py-[29px] sm:py-10 xl:pb-0 xl:pt-20">
          {features.map((feature, index) => (
            <Feature
              key={index}
              number={index + 1}
              {...feature}
              initialX={70 * (index === 0 ? -1 : index === 1 ? 0 : 1)}
            >
              {feature.text}
            </Feature>
          ))}
        </div>
        <div className="absolute left-0 top-4 hidden rotate-[124deg] blur-[13px] xl:flex">
          <AnimatedLogo className="w-[306px]" />
        </div>
        <div className="absolute right-4 top-10 hidden rotate-[-56deg] blur-[13px] xl:flex">
          <AnimatedLogo className="w-[306px]" />
        </div>
        <div className="absolute bottom-0 right-[28%] hidden rotate-[43deg] blur-[20px] xl:flex">
          <AnimatedLogo className="w-[306px]" />
        </div>
      </section>
    </div>
  );
};

type FeatureProps = {
  title: string;
  bgText: string;
  children: ReactNode;
  number: number;
  initialX: number;
};
const Feature = ({
  title,
  bgText,
  number,
  children,
  initialX,
}: FeatureProps) => {
  const isAnimated = useMediaQuery("(min-width: 1280px)");
  return (
    <m.div
      animate={{
        translateX: isAnimated ? initialX : 0,
      }}
      whileInView={{
        translateX: 0,
      }}
      viewport={{
        once: false,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        ease: cubicBezier(0.5, 0, 0, 1),
      }}
      className="flex max-w-[308px] flex-col gap-6 rounded-3xl border-[3.3px] border-haze-400 bg-[#1A2451]/80 px-[18px] py-4 will-change-transform xl:max-w-[338px] xl:rounded-[24px] xl:px-5 xl:py-[18px]"
    >
      <div className="flex justify-between self-stretch font-space-grotesk text-[28px] font-medium text-haze-500 xl:text-[31px]">
        {/*<p>0{number}</p>*/}
        <p>{bgText}</p>
      </div>
      <div className="text-white">
        <h3 className="pb-1.5 text-[38px] font-bold text-white xl:text-[42px]">
          {title}
        </h3>
        <p className="text-base font-medium">{children}</p>
      </div>
      <Button
        variant="long"
        className="mb-3.5 mt-auto h-[68px] rounded-[30px] bg-haze-700 [--padding-x:40px] hover:h-[76px] [&_svg]:h-auto [&_svg]:w-[7px]"
        asLink
        href="/our-process"
      >
        Discover
      </Button>
    </m.div>
  );
};
