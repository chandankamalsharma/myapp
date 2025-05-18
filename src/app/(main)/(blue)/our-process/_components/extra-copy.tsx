import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { commonPadding } from "@/styles";

export const ExtraCopy = () => {
  const paraClassName =
    "text-xs text-center text-white pb-6 sm:text-[20px] leading-normal sm:pb-[50px] xl:text-[22px] xl:text-left mx-auto max-w-[720px] xl:mx-[unset] xl:mr-auto";
  return (
    <section className={cn(commonPadding, "relative pb-6")}>
      <h2 className="pb-3 text-center text-[33px] font-bold leading-[1.25] text-white sm:pb-[25px] sm:text-[68px] xl:pb-10 xl:text-left xl:text-[82px]">
        Thats not all!
      </h2>
      <p className="mx-auto max-w-[878px] pb-[14px] text-center font-semibold text-white sm:pb-[30px] sm:text-[26px] sm:font-bold xl:mx-[unset] xl:mr-auto xl:text-left xl:text-[28px]">
        Our reach extends far beyond the state borders. We proudly offer
        nationwide support to clients all over the U.S., making us your go-to
        resource no matter where you are located.
      </p>
      <p className={paraClassName}>
        With a network of referral partners spanning all 50 states, we truly
        have your back wherever your business takes you.
      </p>
      <p className={paraClassName}>
        Choosing ICHRAS.COM is a no-brainer. Our commitment to excellence,
        personalized service, and nationwide accessibility ensures that you
        receive top-notch support and guidance for implementing and managing
        your ICHRA plan, whether you are based in Colorado or anywhere else in
        the United States.
      </p>
      <div
        data-aos="appear"
        data-aos-duration="1800"
        className={cn(
          "absolute -right-[65px] top-1/2 hidden -translate-y-1/2 xl:flex",
          "data-[aos]:data-[aos]:custom-cubic-bezier !visible translate-x-1/2 [transition:transform]",
          "[&.aos-animate]:translate-x-0",
        )}
      >
        <Mountains data-aos="appear" data-aos-duration="1800" />
      </div>
    </section>
  );
};

const Mountains = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="533"
      height="528"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M529 179.177c0-1.555-.403-3.083-1.169-4.436L433.457 8.13438c-3.337-5.89076-11.738-6.12672-15.401-.43252L256.85 258.355l150.563 265.806 112.587.005c4.971 0 9-4.029 9-9V179.177Z"
        fill="#5287EF"
      />
      <path
        d="M337.431 133.064c-2.055 3.195-1.883 7.336.431 10.349l80.651 105.042c3.741 4.871 11.153 4.648 14.594-.439l71.015-105.004c1.915-2.831 2.061-6.503.376-9.477L433.463 8.1283c-3.337-5.89078-11.738-6.12683-15.4-.43269L337.431 133.064Z"
        fill="#fff"
      />
      <path
        d="M407.413 524.161 256.85 258.355v256.806c0 4.971 4.03 9 9 9h141.563Z"
        fill="#5287EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M416.81 3.69562c5.636-5.65998 15.523-4.664133 19.698 2.70766L507.544 131.81c.069.123.137.247.203.373l23.129 40.833c1.065 1.879 1.624 4.001 1.624 6.161v335.989c0 6.904-5.597 12.5-12.5 12.5l-254.15-.005c-6.903 0-12.5-5.596-12.5-12.5V258.355c0-.671.193-1.328.557-1.893L415.113 5.80861c.505-.78544 1.075-1.48965 1.697-2.11299ZM334.302 144.398 260.938 258.47l148.515 262.191 110.547.005c3.038 0 5.5-2.462 5.5-5.5V179.177c0-.951-.246-1.885-.714-2.711l-17.805-31.433-70.975 104.944c-4.778 7.066-15.074 7.375-20.269.61l-80.651-105.043c-.285-.37-.546-.753-.784-1.146ZM421.751 8.6608c2.482-2.48221 6.825-2.04176 8.661 1.19863L501.585 135.508c.887 1.771.755 3.891-.362 5.544l-71.015 105.003c-2.103 3.109-6.633 3.246-8.919.269l-80.651-105.043c-1.414-1.841-1.519-4.372-.263-6.324L421.006 9.5889c.222-.34492.472-.65423.745-.9281ZM401.408 520.661 260.35 271.636v243.525c0 3.038 2.463 5.5 5.5 5.5h135.558Z"
        fill="#354993"
      />
      <path
        d="m284.748 277.928-58.021-114.164c-3.215-6.326-12.146-6.616-15.765-.512L5.05659 510.577c-3.55664 5.999.7674 13.589 7.74181 13.589H411L284.748 277.928Z"
        fill="#5287EF"
      />
      <path
        d="M163.567 245.773c-1.736 3.008-1.586 6.745.383 9.604l47.47 68.908c3.703 5.376 11.719 5.144 15.105-.437l41.79-68.87c1.616-2.662 1.74-5.97.329-8.746l-41.809-82.266c-3.237-6.369-12.247-6.609-15.818-.421l-47.45 82.228Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M223.596 165.329c.003.007.007.014.011.021l42.016 82.672c.756 1.653.648 3.578-.3 5.14l-41.79 68.87c-2.069 3.411-6.968 3.553-9.231.267l-47.469-68.907c-1.204-1.748-1.295-4.032-.235-5.869l47.45-82.229c2.14-3.708 7.476-3.639 9.548.035Zm-63.439 90.485c.264.532.568 1.05.911 1.549l47.469 68.907c5.144 7.467 16.277 7.145 20.981-.607l41.122-67.769 10.988 21.62.006.011 123.638 241.141H12.7984c-4.26215 0-6.90461-4.638-4.73111-8.304L160.157 255.814Zm111.759-10.86c-.049-.103-.1-.206-.152-.308l-41.809-82.266c-.065-.129-.132-.255-.2-.38-4.543-8.613-16.812-8.953-21.804-.532L2.04589 508.792c-4.93978 8.332 1.06583 18.874 10.75251 18.874H411c1.22 0 2.351-.634 2.987-1.675.636-1.04.684-2.337.128-3.422L287.868 276.342l-.005-.011-15.947-31.377Z"
        fill="#354993"
      />
    </svg>
  );
};
