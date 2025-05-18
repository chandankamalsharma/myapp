import { steps } from "@/lib/data";

import { commonPadding } from "@/styles";

import { ProcessCarousel } from "./process-carousel";

export const Process = () => {
  return (
    <section className={commonPadding}>
      <div className="flex justify-center gap-8 py-2 pb-2 sm:gap-[69px] sm:py-4 xl:py-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            className="h-[9px] w-8 rounded-[1.3px] bg-have-400 sm:h-5 sm:w-[66px] sm:rounded-[2.6px] xl:h-[36px] xl:w-[125px] xl:rounded-[5px]"
            key={i}
          />
        ))}
      </div>
      <h2 className="pb-[6px] pt-[13px] text-center text-[26px] font-bold text-white sm:pb-[13px] sm:pt-[26px] sm:text-[42px] xl:text-[72px]">
        Our Personalized Process
      </h2>
      <ProcessCarousel steps={steps} />
    </section>
  );
};
