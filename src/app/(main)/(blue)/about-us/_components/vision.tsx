import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { commonPadding } from "@/styles";

const cards = [
  {
    title: "Savings",
    text: "Our mission is to empower businesses through ongoing education, enabling them to make well-informed decisions about their employee benefits package.",
  },
  {
    title: "Exceptional Support",
    text: "Helping you navigate the complex world of insurance solutions tailored specifically to your business needs through our personalized process.",
  },
  {
    title: "Nationwide Accessibility",
    text: "Delivering top-notch support and guidance for implementing and managing your ICHRA plan, whether you are based in Colorado or anywhere else in the United States.",
  },
];

export const Vision = () => {
  return (
    <section
      className={cn(
        commonPadding,
        "relative mb-[100px] text-center text-black sm:mb-[150px]",
      )}
    >
      <p className="text-[24px] font-extralight sm:text-[38px]">Our Vision</p>
      <h2 className="pb-[25px] text-[54px] font-bold sm:text-[68px] xl:text-[74px]">
        The story of Ichras
      </h2>
      <p className="mx-auto max-w-[875px] text-lg sm:text-[22px] xl:pb-[103px]">
        We believe in providing nothing but the best. With our personalized
        approach and meticulous attention to detail we understand and prioritize
        your unique needs.
      </p>
      <div className="flex flex-col items-center xl:flex-row xl:px-4 xl:py-[51px]">
        <div
          data-aos="appear"
          data-aos-duration="1800"
          data-aos-offset="0"
          className={cn(
            "mx-auto my-10 h-[3px] w-[72px] shrink-0 bg-have-900 xl:mr-[65px]",
            "data-[aos]:data-[aos]:custom-cubic-bezier xl:-translate-x-[300px] xl:[transition:transform]",
            "[&.aos-animate]:xl:translate-x-0",
          )}
        />
        <div
          data-aos="appear"
          data-aos-duration="1800"
          data-aos-offset="0"
          className={cn(
            "xl:max-w-[524px] xl:grow xl:basis-1/2",
            "data-[aos]:data-[aos]:custom-cubic-bezier xl:-translate-x-3/4 xl:[transition:transform]",
            "[&.aos-animate]:xl:translate-x-0",
          )}
        >
          <p className="mb-[14px] rounded-[25px] bg-have-400 px-[15px] py-[46px] font-semibold lining-nums proportional-nums text-haze-100 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[24px] sm:font-bold sm:text-black xl:max-w-[524px]">
            At ICHRAs.com, we provide personalized, expert-level health
            insurance solutions for businesses of all sizes in Colorado. Our
            dedicated team with over 50 years of combined expertise ensures
            top-quality benefits and cost-effective ICHRA solutions. We empower
            businesses through informed decision-making, offering white-glove
            service and ongoing education for exceptional support and innovative
            solutions.
          </p>
          <p className="mb-8 sm:text-[20px]">
            Join us for the next generation of health insurance tailored for
            businesses of any size.
          </p>
          <p className="sm:text-[20px]">
            Empower your business and champion employee freedom with our
            esteemed services.
          </p>
        </div>
        <div className="my-[54px] h-[1.2px] w-full shrink-0 bg-black/60 xl:mx-[54px] xl:my-0 xl:h-auto xl:w-[1.2px] xl:self-stretch" />
        <div
          data-aos="appear"
          data-aos-duration="1800"
          data-aos-offset="0"
          className={cn(
            "flex flex-col gap-[60px] sm:gap-[34px] xl:grow xl:basis-1/3 xl:gap-[50px]",
            "data-[aos]:data-[aos]:custom-cubic-bezier xl:translate-x-3/4 xl:[transition:transform]",
            "[&.aos-animate]:xl:translate-x-0",
          )}
        >
          {cards.map((card, index) => (
            <VisionCard title={card.title} key={index}>
              {card.text}
            </VisionCard>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -left-[7%] top-52 hidden aspect-square w-1/2 rounded-full bg-sail-100 blur-[352px] xl:flex" />
    </section>
  );
};

const VisionCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="pb-[15px] text-[22px] font-bold text-have-900 sm:pb-2.5 sm:text-[30px] xl:pb-[5px]">
        {title}
      </h3>
      <p className="text-base font-medium text-have-950 sm:text-[20px] sm:font-normal">
        {children}
      </p>
    </div>
  );
};
