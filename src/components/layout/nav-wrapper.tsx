"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { AnimationContext } from "@/components/animation";

type NavWrapperProps = {
  children: ReactNode;
};

export const NavWrapper = ({ children }: NavWrapperProps) => {
  const ctx = useContext(AnimationContext);
  const { show: ctxShow } = ctx || {};
  const isLargeScreen = useMediaQuery("(min-width: 1280px)", {
    initializeWithValue: true,
    defaultValue: true,
  });

  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const [showBg, setShowBg] = useState(!isHome);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!showBg && (latest > window.innerHeight || !isHome)) {
      setShowBg(true);
    } else if (showBg && latest <= window.innerHeight && isHome) {
      setShowBg(false);
    }
  });

  const ctxAnimation = ctxShow !== undefined;
  const animationClassName = "[&.aos-animate]:translate-y-0";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-2xl items-center sm:absolute",
        "data-[aos]:data-[aos]:custom-cubic-bezier translate-y-[-135%]",
        ctxAnimation && "[&.aos-animate]:translate-y-0",
        ctxAnimation
          ? !ctxShow &&
              isLargeScreen &&
              `aos-init aos-animate ${animationClassName}`
          : animationClassName,
      )}
      data-aos="appear"
      data-aos-duration="1800"
    >
      <div
        className={cn(
          "flex w-full p-5 transition-colors duration-300 ease-in-out sm:bg-transparent sm:px-[45px] sm:py-[35px] xl:px-[113px]",
          showBg && "bg-white",
        )}
      >
        {children}
      </div>
    </header>
  );
};
