import { cn } from "@/lib/utils";

import { AnimatedLogo } from "@/components/logo";
import { Button } from "@/components/ui-new/button";

import { commonPadding } from "@/styles";

export const CalculateRates = () => {
  return (
    <section
      className={cn(
        commonPadding,
        "relative mb-[100px] sm:mb-[174px] sm:mt-[74px] xl:mb-[165px] xl:mt-[105px]",
      )}
    >
      <h2 className="pb-1 text-center text-[42px] font-bold text-haze-950 sm:text-[58px] xl:pb-5 xl:text-[92px]">
        Calculate Your Rates
      </h2>
      <p className="pb-[45px] text-center text-lg font-medium text-haze-900 sm:text-[22px] xl:pb-[60px] xl:text-[32px]">
        Find out what investment you need to make!
      </p>
      <Button
        className="mx-auto flex h-[73px] w-[calc(100%-30px)] max-w-[298px] rounded-[32px] bg-haze-600 [--padding-x:47px] hover:h-[100px] xl:h-[98px] xl:rounded-[43px] xl:text-2xl xl:[--padding-x:62px] xl:hover:h-[124px] xl:[&_div>div]:h-[2px] [&_svg]:h-auto [&_svg]:w-[8px] xl:[&_svg]:w-[10.5px]"
        variant="long"
        asLink
        href="mailto:info@ichras.com"
      >
        Contact Us
      </Button>
      <div className="absolute left-[53px] top-[93px] hidden rotate-[15.2deg] blur-[23.5px] xl:flex">
        <AnimatedLogo />
      </div>
    </section>
  );
};
