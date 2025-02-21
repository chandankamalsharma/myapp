"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { useContext } from "react";
import { useMediaQuery } from "usehooks-ts";

import { calendlyLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { AnimationContext } from "@/components/animation";
import { AngledRectangle } from "@/components/icons/angled-rectangle";
import { ConcentricRings } from "@/components/icons/concentric-rings";
import { Logo } from "@/components/logo/logo";

import { commonPadding, topPadding } from "@/styles";

export const Hero = ({ className }: { className?: string }) => {
  const ctx = useContext(AnimationContext);
  if (!ctx) throw new Error();
  const { show, endRef } = ctx;
  const isLargeScreen = useMediaQuery("(min-width: 1280px)", {
    initializeWithValue: true,
    defaultValue: true,
  });

  return (
    <div className="-mt-20 overflow-hidden bg-[linear-gradient(90deg,_#E4E5F3_0%,_#F6F6FB_100%)] sm:mt-0 xl:[background-color:#e8e9f5] xl:[background-image:unset]">
      <div
        className={cn(
          commonPadding,
          topPadding,
          "relative pb-[calc(90px+var(--extra-hero-padding))] [--extra-hero-padding:32px] sm:pb-[calc(201px+var(--extra-hero-padding))] xl:min-h-svh xl:px-[113px] xl:[--extra-hero-padding:0px]",
          className,
        )}
      >
        <p
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "relative pb-1 pt-4 text-center text-sm font-medium text-have-400 sm:pb-2 sm:pt-[60px] sm:text-[22px] xl:pt-[70px] xl:text-left",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-0 translate-y-[94svh] xl:translate-x-[-104svw] xl:translate-y-0",
            "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            !show &&
              isLargeScreen &&
              "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
          )}
        >
          Championing Employee Freedom
        </p>
        <h1
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "blue-text pb-[15px] text-center text-[48px] font-bold leading-none sm:pb-5 sm:text-[83px] xl:max-w-[50%] xl:text-left",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-0 translate-y-[94svh] xl:translate-x-[-95svw] xl:translate-y-0",
            "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            !show &&
              isLargeScreen &&
              "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
          )}
        >
          Empowering Businesses
        </h1>
        <p
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "mx-[18px] pb-6 text-center text-sm font-medium text-have-950 sm:mx-8 sm:pb-10 sm:text-base sm:leading-[30px] xl:mx-0 xl:max-w-[50%] xl:pb-[46px] xl:text-left",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-0 translate-y-[94svh] xl:translate-x-[-83svw] xl:translate-y-0",
            "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            !show &&
              isLargeScreen &&
              "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
          )}
        >
          ICHRAs are a game-changer for businesses of all sizes. They allow you
          to empower your employees to choose the health insurance plan that
          best fits their needs and budget, while still receiving valuable
          financial support from your company.
        </p>
        <div
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "relative z-10 flex justify-between min-[380px]:justify-center min-[380px]:gap-8 xl:justify-start",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-0 translate-y-[94svh] xl:translate-x-[-52svw] xl:translate-y-0",
            "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            !show &&
              isLargeScreen &&
              "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
          )}
        >
          <Button asChild>
            <Link href={calendlyLink} target="_blank">
              Book a Meet
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/about-us">Learn More</Link>
          </Button>
        </div>

        <div className="absolute right-[39px] top-[39px] z-0 -translate-y-1/2 translate-x-1/2 sm:right-[77px] sm:top-[67px] xl:right-0 xl:top-[28px] xl:translate-x-[20%] xl:translate-y-0">
          <div
            data-aos="appear"
            data-aos-duration="1800"
            className={cn(
              "hidden sm:block",
              "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-[10%] translate-y-[10%] [transition:transform]",
              "[&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
              !show &&
                isLargeScreen &&
                "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0",
            )}
          >
            <ConcentricRings className="animate-spin [animation-duration:15s] sm:h-[358px] sm:w-[358px]" />
          </div>
        </div>
        <div
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "absolute right-[113px] top-0 hidden h-[212px] w-[429px] rounded-b-[265px] bg-have-200 xl:block",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-y-[-240px]",
            !show && "aos-init aos-animate [&.aos-animate]:translate-y-0",
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 right-[113px] z-10 hidden h-[calc(100%-212px)] w-[429px] items-center justify-center xl:flex",
          )}
        >
          <div
            data-aos="appear"
            data-aos-duration="1800"
            className={cn(
              "absolute inset-0 z-[-1] rounded-t-[265px] bg-have-300",
              "data-[aos]:data-[aos]:custom-cubic-bezier translate-y-[79%] [transition:transform]",
              !show && "aos-init aos-animate [&.aos-animate]:translate-y-0",
            )}
          />
          <div ref={endRef}>
            <Logo className="w-[306px] opacity-0" />
          </div>
        </div>
        <AngledRectangle
          data-aos="appear"
          data-aos-duration="1800"
          className={cn(
            "absolute bottom-0 right-0 z-0 h-auto w-[calc(2/3*100vw)] max-w-[512px] fill-have-300 xl:right-[334px] xl:fill-have-200",
            "data-[aos]:data-[aos]:custom-cubic-bezier translate-x-[129px] translate-y-12 [transition:transform] xl:-rotate-[22deg]",
            !show &&
              "aos-init aos-animate [&.aos-animate]:translate-x-0 [&.aos-animate]:translate-y-0 [&.aos-animate]:rotate-0",
          )}
        />
      </div>
    </div>
  );
};

const buttonVariants = cva(
  "inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-full px-10 text-xs font-medium transition-colors sm:h-[70px] sm:px-[56px] sm:px-[66px] sm:text-[22px] sm:text-lg xl:h-[60px]",
  {
    variants: {
      variant: {
        default: "bg-have-500 text-white",
        secondary:
          "border-2 border-have-500 bg-transparent text-have-950 sm:border-[3.5px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
