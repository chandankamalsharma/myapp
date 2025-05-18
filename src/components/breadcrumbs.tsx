import Link from "next/link";

import { Theme } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Home } from "@/components/icons/home";

type BreadcrumbsProps = {
  variant: Theme;
  text: string;
};
export const Breadcrumbs = ({ variant, text }: BreadcrumbsProps) => {
  return (
    <div className="mt-[80px] flex items-center justify-center gap-[5px] text-lg font-bold xl:mt-[145px]">
      <Home
        className={cn("h-4 w-4", {
          "fill-have-400": variant === "blue",
          "fill-haze-400": variant === "purple",
        })}
      />
      <Link
        className={cn({
          "text-have-950": variant === "blue",
          "text-haze-950": variant === "purple",
        })}
        href="/"
      >
        Home
      </Link>
      <span
        className={cn({
          "text-have-400": variant === "blue",
          "text-haze-400": variant === "purple",
        })}
      >
        /
      </span>
      <span
        className={cn({
          "text-have-950": variant === "blue",
          "text-haze-950": variant === "purple",
        })}
      >
        {text}
      </span>
    </div>
  );
};
