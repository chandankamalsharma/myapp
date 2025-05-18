import Image from "next/image";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Logo = forwardRef<
  HTMLImageElement,
  Omit<
    ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt" | "width" | "height"
  > & { color?: "white" | "blue" | "purple" }
>(({ className, color = "white", ...props }, ref) => {
  return (
    <Image
      ref={ref}
      src="/logo-blue.png"
      alt="ICHRAS Logo"
      width={1024}
      height={1280}
      className={cn(
        {
          "brightness-0 invert": color === "white",
          "brightness-[0.984] hue-rotate-[28deg] saturate-[0.337]":
            color === "purple",
        },
        className,
      )}
      {...props}
    />
  );
});

Logo.displayName = "Logo";
