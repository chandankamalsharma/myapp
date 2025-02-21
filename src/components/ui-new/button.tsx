import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex h-[60px] items-center justify-center whitespace-nowrap rounded-full px-[56px] text-lg font-medium transition-colors duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-have-500 text-white hover:bg-have-700",
        outline:
          "border-[3px] border-have-500 bg-transparent text-have-950 hover:bg-have-500 hover:text-white",
        special:
          "relative h-[47px] gap-8 bg-have-500 px-5 text-white hover:bg-have-600",
        specialOutline:
          "relative h-[47px] gap-8 border border-have-600 bg-transparent px-5 text-have-600 hover:bg-haze-400",
        long: "duration-400 relative h-[41px] rounded-[18px] bg-have-500 px-[var(--padding-x)] text-lg text-white transition-all ease-out [--padding-x:26px] [transition-delay:400ms] hover:h-[56px] hover:delay-0",
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
  asLink?: boolean;
  href?: string;
  target?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, asLink = false, ...props }, ref) => {
    const Comp = asLink ? Link : asChild ? Slot : "button";
    const isSpecial = variant === "special" || variant === "specialOutline";
    const isNormal = !isSpecial && variant !== "long";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {variant === "long" && (
          <>
            <div className="absolute inset-x-[var(--padding-x)] inset-y-0 flex items-center">
              <div className="duration-400 flex h-px w-full items-center bg-white transition-all ease-out [transition-delay:400ms] group-hover:scale-x-0 group-hover:opacity-0 group-hover:delay-0" />
              <ArrowHead className="duration-400 transition-transform ease-out [transition-delay:400ms] group-hover:scale-75 group-hover:delay-0" />
            </div>
            <span className="delay:0 duration-400 group-hover:duration-400 flex scale-50 opacity-0 transition-all ease-out group-hover:scale-100 group-hover:opacity-100 group-hover:[transition-delay:400ms]">
              {props.children}
            </span>
          </>
        )}
        {isSpecial && (
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-[19px]">
            {props.children}
          </span>
        )}
        {isSpecial && (
          <div
            className={cn(
              "rounded-full border-[0.5px] px-3 py-[7px] transition-colors duration-300 ease-out group-hover:border-transparent",
              {
                "border-have-600": variant === "specialOutline",
                "border-white": variant === "special",
              },
            )}
          >
            <SpecialArrow className="transition-transform duration-300 ease-out group-hover:translate-x-[7px] group-hover:scale-[1.3]" />
          </div>
        )}
        {isNormal && props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

const SpecialArrow = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="currentColor"
      {...props}
    >
      <path d="M11.0469 5.5L6 10.25L5.3376 9.62656L9.24893 5.94531H0.953125V5.05469H9.24893L5.3376 1.37344L6 0.75L11.0469 5.5Z" />
    </svg>
  );
};

const ArrowHead = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="10"
      viewBox="0 0 5 10"
      fill="none"
      {...props}
    >
      <path
        d="M0.206512 9.01954V0.871826L4.28037 4.94568L0.206512 9.01954Z"
        fill="white"
      />
    </svg>
  );
};

export { Button, buttonVariants };
