import { steps } from "@/lib/data";
import { cn } from "@/lib/utils";

import { ConcentricRings } from "@/components/icons/concentric-rings";

import { commonPadding, topPadding } from "@/styles";

export const Hero = () => {
  return (
    <div
      className={cn(
        commonPadding,
        topPadding,
        "relative overflow-hidden pb-[55px] sm:pb-[150px] 2xl:overflow-visible",
      )}
    >
      <div
        data-aos="appear"
        data-aos-duration="1800"
        className={cn(
          "data-[aos]:data-[aos]:custom-cubic-bezier -translate-y-[100svh] [transition:transform]",
          "[&.aos-animate]:translate-y-0",
        )}
      >
        <h1 className="blue-text mx-auto max-w-[654px] pb-[29px] pt-[35px] text-center text-[32px] font-semibold leading-[1.05] sm:pt-[65px] sm:text-[68px]">
          Revamp insurance for your Business{" "}
          <span className="font-bold">With ICHRAS</span>
        </h1>
        <p className="mx-auto pb-10 text-center font-medium leading-[1.35] text-[#4B72D7] sm:pb-[62px] sm:text-[22px] xl:max-w-[462px]">
          Here&apos;s why ICHRAs are a game-changer for businesses like yours
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[30px] pb-[22px] sm:gap-x-[25px] xl:pb-0">
        {steps.map(({ title }, index) => (
          <Point
            title={title}
            // subText={point.subText}
            key={index}
            className={cn("z-10", {
              "top-[322px]": index === 0 || index === 1,
              "top-[529px]": index === 2 || index === 3,
              "left-[77px]": index === 0,
              "right-[77px]": index === 1,
              "left-[90px]": index === 2,
              "right-[90px]": index === 3,
              "xl:-translate-x-[150%]": index === 0 || index === 2,
              "xl:translate-x-[150%]": index === 1 || index === 3,
            })}
          />
        ))}
      </div>
      <div className="absolute bottom-0 right-0 z-0 w-[46%] translate-x-[33.5%] translate-y-1/2">
        <ConcentricRings className="h-auto w-full animate-spin [animation-duration:15s]" />
      </div>
    </div>
  );
};

const Point = ({
  title,
  className,
}: {
  title: string;
  subText?: string;
  className?: string;
}) => {
  return (
    // <div
    //   className={cn(
    //     "flex w-fit items-center gap-[10px] rounded-full bg-have-400 px-[5.5px] py-[6px] text-left font-semibold leading-[1.05] text-white sm:gap-[15px] sm:px-[8px] sm:py-[9px] xl:absolute xl:z-10 xl:w-[255px]",
    //     className,
    //   )}
    // >
    //   <div className="h-[28px] w-[28px] rounded-full bg-white sm:h-[42px] sm:w-[42px]"/>
    //   <div>
    //     <p className="pb-0.5 text-[9.5px] sm:pb-px sm:text-sm">{title}</p>
    //     <p className="text-[7px] font-semibold sm:text-[10px]">{subText}</p>
    //   </div>
    // </div>
    <div
      data-aos="appear"
      data-aos-duration="1800"
      className={cn(
        "flex h-[40px] w-fit items-center justify-center gap-[10px] rounded-full bg-have-400 px-4 py-[6px] text-left font-semibold leading-[1.05] text-white sm:h-[60px] sm:gap-[15px] sm:px-4 sm:py-[9px] xl:absolute xl:z-10 xl:w-[255px]",
        "data-[aos]:data-[aos]:custom-cubic-bezier [transition:transform]",
        "[&.aos-animate]:translate-x-0",
        className,
      )}
    >
      <p className="text-[9.5px] sm:pb-px sm:text-sm">{title}</p>
    </div>
  );
};
