import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo/logo";

import { commonPadding } from "@/styles";

export const CenterSection = () => {
  return (
    <section className="relative my-12 ml-5 rounded-l-full text-center lining-nums proportional-nums text-white sm:my-[100px] min-[684px]:ml-[220px] min-[684px]:rounded-none min-[684px]:text-left lg:ml-auto lg:max-w-[70%] xl:my-[200px]">
      <div
        data-aos="appear"
        data-aos-duration="1800"
        data-aos-mirror="true"
        className={cn(
          "absolute z-[-1] h-full w-full rounded-l-full bg-have-400 before:absolute before:inset-y-0 before:aspect-square before:rounded-l-full before:bg-have-400",
          "data-[aos]:data-[aos]:custom-cubic-bezier before:custom-cubic-bezier !visible [transition:transform] before:!visible before:translate-x-0 before:transition-all before:[transition-duration:1.8s] sm:translate-x-full",
          "[&.aos-animate]:translate-x-0 [&.aos-animate]:before:-translate-x-1/2",
        )}
      />
      <div
        className={cn(
          commonPadding,
          "py-3 min-[684px]:min-h-[203px] min-[684px]:py-[18px] min-[684px]:!pl-[calc(203px/2+50px)] min-[684px]:pr-4 lg:min-h-[266px] lg:!pl-[calc(266px/2+83px)] xl:py-[58px]",
        )}
      >
        <h2 className="pb-1 text-lg font-bold min-[684px]:pb-2.5 min-[684px]:text-[32px] xl:pb-3 xl:text-[38px]">
          You can trust us!
        </h2>
        <p className="text-[10px] font-semibold leading-[1.4] min-[684px]:max-w-[400px] min-[684px]:text-sm md:max-w-[698px] xl:text-xl">
          Trusted partner for all your Individual Coverage Health Reimbursement
          Arrangement (ICHRA) needs in Colorado and beyond! With our central
          office located in the Denver metro area, we are conveniently situated
          to support businesses across Colorado for in-person and virtual
          enrollments.
        </p>
      </div>
      <div className="absolute left-0 top-0 hidden aspect-square h-full -translate-x-1/2 items-center justify-center rounded-full bg-[#F0F0F0] min-[684px]:flex">
        <Logo className="w-[99px] xl:w-[125px]" color="blue" />
      </div>
      <div className="pointer-events-none absolute left-0 top-1/2 hidden aspect-square h-[calc(100%+15px*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-have-50 min-[684px]:flex lg:h-[calc(100%+50px*2)]" />
    </section>
  );
};
