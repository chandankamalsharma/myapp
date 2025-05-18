import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui-new/button";

import { commonPadding } from "@/styles";

type CopySectionProps = {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  title: string;
  innerClassName?: string;
  align?: "left" | "right";
};
export const CopySection = ({
  children,
  className,
  title,
  innerClassName,
  icon,
  align = "left",
}: CopySectionProps) => {
  return (
    <section
      className={cn(
        commonPadding,
        "relative my-[100px] px-[45px] text-left sm:text-center xl:px-[70px] xl:text-left",
        className,
      )}
    >
      <h2
        data-aos="appear"
        data-aos-duration="1800"
        data-aos-offset="0"
        className={cn(
          "mx-auto max-w-[736px] pb-[22px] text-[42px] font-bold text-haze-950 sm:text-[60px] md:text-nowrap lg:text-wrap xl:text-[64px]",
          {
            "xl:ml-0": align === "left",
            "xl:mr-0": align === "right",
          },
          "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-y-[20px] [transition:transform]",
          "[&.aos-animate]:translate-y-0",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mx-auto max-w-[736px] pb-[45px] text-lg font-medium text-haze-900 sm:text-[22px] xl:pr-[76px]",
          {
            "xl:ml-0": align === "left",
            "xl:mr-0": align === "right",
          },
          innerClassName,
        )}
      >
        <p
          data-aos="appear"
          data-aos-duration="1800"
          data-aos-offset="0"
          className={cn(
            "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-y-[60px] [transition:transform]",
            "[&.aos-animate]:translate-y-0",
          )}
        >
          {children}
        </p>
        {icon}
      </div>
      {/*<div className={align === "right" ? "ml-auto max-w-[736px]" : undefined}>*/}
      <div
        data-aos="appear"
        data-aos-duration="1800"
        data-aos-offset="0"
        className={cn(
          "mx-auto flex max-w-[736px] justify-center xl:justify-start",
          {
            "xl:ml-0": align === "left",
            "xl:mr-0": align === "right",
          },
          "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-y-[60px] [transition:transform]",
          "[&.aos-animate]:translate-y-0",
        )}
      >
        <Button
          variant="long"
          className="h-[75px] w-full rounded-[32px] bg-haze-600 [--padding-x:48px] hover:h-[84px] sm:flex sm:max-w-[298px] [&_>div>div]:h-0.5 [&_svg]:h-auto [&_svg]:w-[8px]"
          asLink
          href="/about-us"
        >
          Discover
        </Button>
      </div>
    </section>
  );
};
