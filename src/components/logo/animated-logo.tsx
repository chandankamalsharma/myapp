"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo/logo";
import { useFlyingAnimation } from "@/components/provider";

export const AnimatedLogo = ({ className }: { className?: string }) => {
  const { rotate, x, y } = useFlyingAnimation();
  return (
    <m.div
      style={{
        rotate,
        x,
        y,
      }}
    >
      <Logo className={cn("w-[205px] rotate-90 blur-[24px]", className)} />
    </m.div>
  );
};
