import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  MobileOnlyAccordion,
} from "@/components/ui/accordion";

import { commonPadding } from "@/styles";

const cards = [
  {
    title: "Bespoke Guidance and Care",
    text: "Our team of expert advisors guarantees a streamlined, personalized, and optimized ICHRA experience tailored to your unique needs. With our services, rest assured, we deliver the utmost care and attention, ensuring a seamless and stress-free ICHRA journey for you.",
  },
  {
    title: "Workload Relief for HR Departments",
    text: "Managing health benefits can overwhelm HR departments. That's why we streamline the process, significantly reducing your workload. Experience increased efficiency and peace of mind with our support.",
  },
  {
    title: "Thorough Administrator Vetting Process",
    text: "Through our meticulous vetting process, we ensure your business gains access to top-tier tools and resources. Place your trust in our unwavering commitment to excellence.",
  },
  {
    title: '"Best-in-Class" Payroll Integration Solutions',
    text: "Recognizing the significance of seamless integrations, we offer vetted partners and systems specifically designed to effortlessly integrate with your payroll processes. Trust us to streamline operations and simplify life for you and your team.",
  },
  {
    title: "Comprehensive Enrolment Support and Education",
    text: "Our team collaborates closely with employees, providing comprehensive support and education throughout the enrollment process. We ensure they choose health plans aligned with their unique needs, including preferred doctors and networks.",
  },
];

const allValues = cards.map((card) => card.title);

export const Guidance = () => {
  return (
    <section className={cn(commonPadding, "mb-[110px] xl:mb-[99px]")}>
      <h2 className="pb-[3px] text-center text-[54px] font-bold text-haze-950 sm:text-[74px]">
        Providing Expert Guidance
      </h2>
      <p className="mx-auto max-w-screen-lg text-center text-lg text-have-950 sm:text-[22px]">
        We are dedicated to discovering the ideal ICHRA plan for both you and
        your employees.
      </p>
      <MobileOnlyAccordion
        type="multiple"
        defaultValue={allValues}
        className="flex flex-col items-center gap-[50px] pt-[82px] sm:pt-[50px] xl:flex-row xl:flex-wrap xl:items-start xl:justify-center xl:gap-x-[230px] xl:gap-y-[99px]"
      >
        {cards.map((card, index) => (
          <GuidanceCard title={card.title} key={index}>
            {card.text}
          </GuidanceCard>
        ))}
      </MobileOnlyAccordion>
    </section>
  );
};

const GuidanceCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <AccordionItem
      value={title}
      data-aos="appear"
      data-aos-duration="1800"
      className={cn(
        "max-w-screen-md self-stretch rounded-[25px] border-b-0 bg-have-400 px-[15px] py-[35px] sm:self-auto sm:bg-transparent sm:px-[11px] sm:py-0 xl:w-[455px] xl:px-0",
        "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-y-12 [transition:transform]",
        "[&.aos-animate]:translate-y-0",
      )}
    >
      <AccordionTrigger className="sm:cursor-default [&[data-state=open]>svg]:rotate-180">
        <h3 className="pb-[11px] text-center text-[22px] font-extrabold lining-nums proportional-nums text-have-50 sm:text-[34px] sm:text-have-900">
          {title}
        </h3>
        <ChevronDown className="absolute right-2 top-[13px] h-7 w-7 stroke-2 text-white transition-transform sm:hidden" />
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-center font-medium lining-nums proportional-nums text-haze-100 sm:text-[20px] sm:text-[#242424]">
          {children}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};
