import Link from "next/link";

import { Theme } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo/logo";

export const ReachOut = ({
  variant,
  className,
}: {
  variant: Theme;
  className?: string;
}) => {
  const isPurple = variant === "purple";
  return (
    <div className={cn("pb-[110px] xl:pb-[180px]", className)}>
      <section className="mx-auto max-w-screen-2xl px-5 py-2.5 pb-[calc(2.5*4px+var(--bottom-padding))] text-center text-white [--bottom-padding:37px] sm:text-left sm:[--bottom-padding:52px] lg:[--bottom-padding:95px]">
        <div
          className={`${isPurple ? "bg-haze-500" : "bg-have-500 sm:bg-have-400"} relative mx-auto max-w-[964px] rounded-xl px-4 py-[26px] sm:px-[50px] sm:py-5 lg:px-[70px] lg:py-[18px]`}
        >
          <h2 className="relative mb-3 text-[28px] font-bold">Reach Out!</h2>
          <p className="relative mx-auto max-w-[298px] pb-[37px] text-xs sm:mx-0 sm:ml-3.5">
            We invite you to reach out to our dedicated team today, and
            let&apos;s work together to unravel any questions or concerns you
            may have. We are here to provide you with clear and reliable
            answers, just a message away.
          </p>
          <div
            className={`${isPurple ? "bg-haze-400" : "bg-white"} absolute inset-y-0 right-0 hidden w-1/2 items-center justify-end rounded-r-xl pr-[47px] sm:flex`}
            style={{
              clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <Logo className="w-[110px]" color={isPurple ? "white" : "blue"} />
          </div>
          <div
            className={`${isPurple ? "bg-haze-500" : "bg-have-500 sm:bg-have-400"} lg:py-[18px]" absolute inset-x-0 bottom-0 z-10 mx-16 translate-y-1/2 rounded-xl p-[18px] sm:mx-auto sm:w-fit sm:translate-y-[60%] sm:px-20 sm:py-6 lg:w-[373px] lg:translate-y-[75%]`}
            style={{
              boxShadow: "0px 5px 14.7px 5px rgba(36, 36, 36, 0.10)",
            }}
          >
            <p className="hidden pb-7 text-center text-lg font-bold lg:block">
              Be Informed
            </p>
            <Link
              href="/contactus"
              className={`${isPurple ? "bg-haze-700" : "bg-have-600 sm:bg-have-500"} flex w-full items-center rounded-2xl px-6 py-3.5 lg:mx-auto lg:w-fit lg:px-[18px] lg:py-3`}
            >
              <div className="h-px w-full bg-white sm:w-[100px]" />
              <Triangle />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Triangle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="10"
      viewBox="0 0 5 10"
      fill="none"
    >
      <path
        d="M0.206512 9.01954V0.871826L4.28037 4.94568L0.206512 9.01954Z"
        fill="white"
      />
    </svg>
  );
};
