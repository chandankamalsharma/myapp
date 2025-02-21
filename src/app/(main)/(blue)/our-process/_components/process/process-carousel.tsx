"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

type ProcessCarouselProps = {
  steps: { body: ReactNode; title: string }[];
};

const sizes = "[--size:38px] sm:[--size:64px] xl:[--size:121px]";
export const ProcessCarousel = ({ steps }: ProcessCarouselProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const activeStep = steps[activeSection];
  return (
    <div className="sm:flex sm:items-center sm:justify-center sm:gap-[22px] xl:gap-[56px] xl:pt-16">
      <div className="flex gap-5 py-[48px] sm:gap-10 xl:gap-[91px]">
        <div
          className={`flex w-[var(--size)] shrink-0 flex-col items-center gap-[17px] sm:gap-[30px] xl:gap-[55px] ${sizes}`}
        >
          {steps.map((_, i) => (
            <Number
              number={i + 1}
              active={i === activeSection}
              key={i}
              onClick={() => setActiveSection(i)}
            />
          ))}
        </div>
        <div className="flex grow flex-col justify-center sm:max-w-[265px] lg:max-w-[520px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={`title-${activeSection}`}
              className="pb-[15px] text-[20px] font-bold text-white sm:text-[32px] xl:text-[48px]"
            >
              {activeStep.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={`body-${activeSection}`}
              className="space-y-8 text-xs font-semibold text-white sm:text-sm lg:text-[22px] [&_p]:leading-[1.4]"
            >
              <p>{activeStep.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="relative mx-auto hidden h-[190px] w-full max-w-[252px] pb-3 pl-[30px] pr-3 pt-[30px] sm:visible sm:mx-0 sm:h-[200px] sm:max-w-[264px] sm:opacity-0 xl:h-[376px] xl:max-w-[498px] xl:pb-6 xl:pl-[56px] xl:pr-6 xl:pt-[56px]">
        <div className="relative z-10 h-full w-full rounded-[20px] border-[0.5px] border-have-600 bg-gray-300 shadow-[0px_1.6px_23.8px_0px_rgba(0,0,0,0.25)] xl:rounded-[38px]" />
        <div className="absolute left-0 top-0 h-[98px] w-[127px] rounded-[20px] bg-have-800 opacity-50 xl:h-[185px] xl:w-[240px]" />
        <div className="xl:border-1 absolute bottom-0 right-0 h-[97px] w-[102px] rounded-[20px] border-[0.5px] border-have-600 opacity-60 xl:h-[184px] xl:w-[194px]" />
      </div>
    </div>
  );
};

const Number = ({
  active,
  number,
  onClick,
}: {
  active?: boolean;
  number: number;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex h-[var(--size)] w-[var(--size)] items-center justify-center rounded-full border-[0.5px] border-have-900 bg-have-900 text-[10.6px] font-bold text-white opacity-80 transition-all duration-700 ease-out [--size:30px] before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-[var(--size)] before:w-[var(--size)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-[0.5px] before:border-transparent before:opacity-50 before:transition-all before:duration-700 before:ease-out sm:text-lg sm:[--size:51px] xl:text-[34px] xl:[--size:97px]",
        active &&
          ` ${sizes} border-have-50 bg-have-600 text-sm before:h-[49px] before:w-[49px] before:border-have-50 sm:text-[23px] sm:before:h-[101px] sm:before:w-[101px] xl:text-[43px] xl:before:h-[191px] xl:before:w-[191px]`,
      )}
      title={`Go to step ${number}`}
    >
      {number}
    </button>
  );
};
