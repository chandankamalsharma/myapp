import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

import { Theme } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo/logo";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  MobileOnlyAccordion,
} from "@/components/ui/accordion";

import { commonPadding } from "@/styles";

type ChooseProps = {
  className?: string;
  variant: Theme;
  choices: {
    title: string;
    text: string;
    tag: string;
  }[];
};
export const Choose = ({ className, choices, variant }: ChooseProps) => {
  const allValues = choices.map((choice) => choice.title);
  return (
    <div className={variant === "purple" ? "xl:bg-features" : undefined}>
      <section
        className={cn(
          commonPadding,
          "text-center xl:px-[70px] xl:py-[75px]",
          className,
        )}
      >
        <div
          data-aos="appear"
          data-aos-duration="1800"
          data-aos-offset="0"
          className={cn(
            "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-y-16 [transition:transform]",
            "[&.aos-animate]:translate-y-0",
          )}
        >
          <p
            className={`text-[24px] sm:text-[38px] ${variant === "purple" ? "text-haze-900" : "text-have-50"}`}
          >
            Why Choose an ICHRA?
          </p>
          <h2
            className={`pb-[25px] text-[42px] font-bold sm:text-[68px] xl:text-[72px] ${variant === "purple" ? "text-haze-900" : "text-have-50"}`}
          >
            Choosing an ICHRA
          </h2>
          <p
            className={`sm:text-[26px] xl:text-[24px] ${variant === "purple" ? "text-haze-900" : "text-have-50"}`}
          >
            We know you&apos;re tired of the same old group plans that just
            don&apos;t quite fit the bill for your diverse team. Here&apos;s why
            you should make the switch
          </p>
        </div>
        <MobileOnlyAccordion
          type="multiple"
          defaultValue={allValues}
          className="flex flex-col items-center justify-center gap-[25px] pt-6 sm:flex-row sm:flex-wrap sm:items-start sm:gap-[48px] sm:pt-[106px] xl:gap-8 xl:gap-y-0 xl:pt-[98px]"
        >
          <div
            data-aos="appear"
            data-aos-duration="1800"
            data-aos-offset="0"
            className={cn(
              "!visible order-1 hidden w-full max-w-[405px] items-center justify-center self-stretch xl:flex",
              "data-[aos]:data-[aos]:custom-cubic-bezier [transition:transform] xl:translate-y-[240px]",
              "[&.aos-animate]:translate-y-0",
            )}
          >
            <Logo className="w-[146px]" />
          </div>
          {choices.map((card, index) => (
            <ChooseCard
              variant={variant}
              key={index}
              {...card}
              className={cn("xl:translate-y-[240px]", {
                "xl:translate-y-0": index === 1,
                "xl:order-2": index === 4,
                "xl:mb-[77px]": index === 0 || index === 2,
                "xl:-mt-[19px]": index === 3 || index === 4,
                "xl:mt-[24px]": index === 5,
              })}
            >
              {card.text}
            </ChooseCard>
          ))}
        </MobileOnlyAccordion>
      </section>
    </div>
  );
};

type ChooseCardProps = {
  title: string;
  tag: string;
  children: ReactNode;
  className?: string;
  variant: Theme;
};
// TODO update mobile choose cards
const ChooseCard = ({
  tag,
  children,
  title,
  className,
  variant,
}: ChooseCardProps) => {
  return (
    <AccordionItem
      value={title}
      className={cn(
        "relative mx-auto flex w-full max-w-[380px] grow flex-col self-stretch border-b-0 text-center sm:mx-[unset] sm:w-auto sm:max-w-[310px] sm:basis-1/3 sm:self-auto xl:max-w-[405px] xl:basis-1/4 xl:last:order-2 xl:last:w-full xl:last:max-w-none",
        "data-[aos]:data-[aos]:custom-cubic-bezier !visible [transition:transform]",
        "[&.aos-animate]:translate-y-0",
        className,
      )}
      data-aos="appear"
      data-aos-duration="1800"
      data-aos-offset="0"
    >
      <p
        className={cn(
          "mx-auto mb-3.5 hidden w-fit text-nowrap rounded-full px-[22px] py-[11px] text-[17px] font-bold lining-nums proportional-nums sm:block",
          {
            "bg-[#374B96] text-have-50": variant === "blue",
            "bg-[#353C6A] text-haze-50": variant === "purple",
          },
        )}
      >
        {tag}
      </p>
      <div
        className={cn(
          "flex min-h-[115px] grow flex-col justify-center gap-4 rounded-[25px] border px-4 py-5 sm:min-h-[326px] sm:rounded-[42px] xl:px-10",
          {
            "border-haze-900 bg-[#8A82C8]": variant === "purple",
            "border-have-900 bg-[#5287F0]": variant === "blue",
          },
        )}
      >
        <AccordionTrigger className="sm:cursor-default [&[data-state=open]>svg]:rotate-180">
          <h3
            className={cn(
              "flex h-full w-full items-center justify-center text-[28px] font-bold lining-nums proportional-nums sm:inline sm:h-auto sm:w-auto xl:text-[30px]",
              {
                "text-haze-50": variant === "purple",
                "text-have-50": variant === "blue",
              },
            )}
          >
            {title}
          </h3>
          <ChevronDown className="absolute right-2 top-[13px] h-7 w-7 stroke-2 text-white transition-transform sm:hidden" />
        </AccordionTrigger>
        <AccordionContent>
          <p
            className={cn(
              "text-base lining-nums proportional-nums leading-[1.4]",
              {
                "text-haze-100": variant === "purple",
                "text-have-100": variant === "blue",
              },
            )}
          >
            {children}
          </p>
        </AccordionContent>
      </div>
    </AccordionItem>
  );
};
