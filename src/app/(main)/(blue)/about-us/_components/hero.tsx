import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { AngledRectangle } from "@/components/icons/angled-rectangle";
import { ConcentricRings } from "@/components/icons/concentric-rings";
import { Button } from "@/components/ui-new/button";

import { commonPadding, topPadding } from "@/styles";

export const Hero = () => {
  return (
    <>
      <div
        className={cn(
          topPadding,
          commonPadding,
          "relative -mt-20 pb-[100px] sm:mt-0 sm:pt-16 xl:min-h-svh",
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
          <Breadcrumbs variant="blue" text="About Us" />
          <h1
            data-aos="appear"
            data-aos-duration="1800"
            className="blue-text pb-[19px] pt-8 text-center text-[52px] font-bold leading-none sm:text-[96px]"
          >
            Who We Are
          </h1>
          <p className="mx-auto max-w-[612px] pb-[45px] text-center text-xs font-medium leading-[1.75] text-have-400 sm:text-lg sm:leading-[2.16]">
            We are committed to excellence, delivering unparalleled service with
            a personalized touch and meticulous attention to detail. Your unique
            needs are our priority.
          </p>
          <div className="flex justify-center gap-[15px]">
            <Button
              asLink
              href="/our-process"
              className="h-[45px] px-[43px] text-sm sm:h-[60px] sm:px-[56px] sm:text-lg"
            >
              Our Process
            </Button>
            {/*<Button*/}
            {/*  asLink*/}
            {/*  href="/blogs"*/}
            {/*  variant="outline"*/}
            {/*  className="h-[45px] border-[2.3px] px-[43px] text-sm sm:h-[60px] sm:border-[3px] sm:px-[56px] sm:text-lg"*/}
            {/*>*/}
            {/*  Blogs*/}
            {/*</Button>*/}
          </div>
        </div>
        <div className="absolute z-0 hidden -translate-y-1/2 translate-x-1/2 sm:right-[77px] sm:top-[67px] sm:flex xl:right-0 xl:top-0 xl:translate-x-1/2 xl:translate-y-0">
          <div
            data-aos="appear"
            data-aos-duration="1800"
            className={cn(
              "hidden sm:block",
              "data-[aos]:data-[aos]:custom-cubic-bezier -translate-x-10 translate-y-10 [transition:transform]",
              "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            )}
          >
            <ConcentricRings className="animate-spin [animation-duration:15s] sm:h-[358px] sm:w-[358px]" />
          </div>
        </div>
      </div>
      <AngledRectangle
        data-aos="appear"
        data-aos-duration="1800"
        className={cn(
          "absolute bottom-0 right-0 z-0 hidden h-auto w-[429px] origin-bottom-right -translate-y-[300px] -rotate-90 fill-have-200 xl:flex",
          "data-[aos]:data-[aos]:custom-cubic-bezier -translate-y-[200px] [transition:transform]",
          "[&.aos-animate]:-translate-y-[400px]",
        )}
      />
      <div
        data-aos="appear"
        data-aos-duration="1800"
        className={cn(
          "absolute bottom-[66px] left-0 z-0 hidden h-[175px] w-[175px] rounded-[28px] rounded-tl-[276px] bg-have-400 min-[700px]:flex xl:-left-[13px] xl:top-1/2 xl:-translate-y-1/2",
          "data-[aos]:data-[aos]:custom-cubic-bezier -translate-x-[120%] rotate-[-60deg] [transition:transform]",
          "[&.aos-animate]:translate-x-0 [&.aos-animate]:rotate-0",
        )}
      />
      <Shape
        data-aos="appear"
        data-aos-duration="1800"
        className={cn(
          "absolute bottom-[66px] left-0 hidden origin-top-left translate-y-full min-[700px]:flex xl:-left-5 xl:bottom-[unset] xl:top-1/2 xl:translate-y-[85px]",
          "data-[aos]:data-[aos]:custom-cubic-bezier -translate-x-1/2 rotate-[-60deg] [transition:transform]",
          "[&.aos-animate]:translate-x-0 [&.aos-animate]:rotate-0",
        )}
      />
    </>
  );
};

const Shape = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="349"
      height="350"
      viewBox="0 0 349 350"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.407 0.99998C186.943 0.99998 174.643 13.6216 172.192 28.8901C160.305 102.939 101.851 161.306 27.8923 173.188C12.6241 175.64 0.00238037 187.941 0.00238037 203.405V321.821C0.00238037 337.285 12.5827 349.938 27.9982 348.714C198.349 335.194 334.196 199.355 347.717 28.9958C348.94 13.5803 336.287 0.99998 320.823 0.99998L202.407 0.99998Z"
        stroke="#67A0F3"
        strokeWidth="2"
      />
    </svg>
  );
};
