import { calendlyLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui-new/button";

import { commonPadding } from "@/styles";

import { Map } from "./map";

export const Book = () => {
  return (
    <section className={cn(commonPadding, "relative mb-[100px] xl:mb-[150px]")}>
      <div className="rounded-2xl bg-[#5287EF]/20 px-[22px] py-6 backdrop-blur-[5.5px] sm:rounded-[34px] sm:px-[46px] sm:py-[50px] xl:px-[74px] xl:py-[116px]">
        <h2 className="pb-2.5 text-[24px] font-bold leading-[33px] tracking-[2px] text-have-950 sm:pb-5 sm:text-[49px] sm:leading-[68px] xl:font-semibold">
          Let&apos;s embark on this insurance journey together
        </h2>
        <p className="max-w-[645px] text-sm leading-normal text-have-950 sm:pb-[138px] sm:text-[22px] xl:pb-[61px]">
          Trusted partner for all your Individual Coverage Health Reimbursement
          Arrangement (ICHRA) needs in Colorado and beyond! With our central
          office located in the Denver metro area, we are conveniently situated
          to support businesses across Colorado for in-person and virtual
          enrollments.
        </p>
        <div className="bottom-0 right-0 mx-4 h-auto w-[calc(100%-32px)] py-[42px] sm:absolute sm:w-2/5 sm:max-w-[580px]">
          <div className="relative h-full w-full">
            <Pulse className="absolute left-[22%] top-[43%] -translate-y-1/2 sm:left-[30%]" />
            <Map className="h-full w-full" />
          </div>
        </div>
        <Button
          variant="special"
          className="h-[37px] gap-2 bg-have-600 px-4 text-sm hover:bg-have-700 sm:h-16 sm:gap-[14px] sm:px-[28px] sm:text-[24px] [&_div]:px-[9.5px] [&_div]:py-[5.5px] sm:[&_div]:px-[16px] sm:[&_div]:py-[10px] [&_span]:hover:!translate-x-2 sm:[&_svg]:h-auto sm:[&_svg]:w-[14px]"
          asLink
          href={calendlyLink}
          target="_blank"
        >
          Book a Meet
        </Button>
      </div>
    </section>
  );
};

const Pulse = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative mx-auto h-20 w-20", className)}>
      <div className="absolute inset-0 m-auto h-6 w-6 rounded-full bg-[#233885] xl:h-8 xl:w-8" />
      <div className="absolute inset-0 m-auto h-6 w-6 animate-ping rounded-full bg-[#233885] xl:h-8 xl:w-8" />
      <div className="absolute inset-0 m-auto h-11 w-11 animate-ping rounded-full bg-[#233885]/40 [animation-delay:400ms] xl:h-14 xl:w-14" />
    </div>
  );
};
