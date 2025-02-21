import { cn } from "@/lib/utils";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConcentricRings } from "@/components/icons/concentric-rings";
import { Button } from "@/components/ui-new/button";

import { commonPadding, topPadding } from "@/styles";

export const Hero = ({
  title,
  description,
}: {
  title: string;
  description?: string | null;
}) => {
  return (
    <>
      <div className={cn(topPadding, commonPadding, "relative min-h-svh")}>
        <Breadcrumbs variant="purple" text="Blog" />
        <h1 className="purple-text pb-[19px] pt-8 text-center text-[72px] font-bold leading-none sm:text-[96px]">
          {title}
        </h1>
        {/*TODO text here should be 400 or 600?*/}
        <p className="mx-auto max-w-[612px] pb-[45px] text-center text-xs font-medium leading-[1.75] text-haze-400 sm:text-lg sm:leading-[2.16]">
          {description}
        </p>
        <div className="flex justify-center gap-[15px]">
          {/* TODO add comment here about the design: which link/test is supposed to be here? it differs across screen sizes*/}
          <Button
            asLink
            href="/"
            className="h-[45px] bg-haze-500 px-[43px] text-sm hover:bg-haze-700 sm:h-[60px] sm:px-[56px] sm:text-lg"
          >
            Home
          </Button>
          <Button
            asLink
            href="/our-process"
            variant="outline"
            className="h-[45px] border-[2.3px] border-haze-500 px-[43px] text-sm text-haze-950 hover:bg-haze-500 sm:h-[60px] sm:border-[3px] sm:px-[56px] sm:text-lg"
          >
            Services
          </Button>
        </div>
        <ConcentricRings
          variant="purple"
          className="absolute z-0 hidden -translate-y-1/2 translate-x-1/2 sm:right-[77px] sm:top-[67px] sm:flex sm:h-[358px] sm:w-[358px] xl:right-0 xl:top-0 xl:translate-x-1/2 xl:translate-y-0"
        />
      </div>
    </>
  );
};
