import { ComponentProps } from "react";

const MULTIPLIER = 0.9;

const scaleClassName =
  "min-[460px]:scale-[1.4] md:scale-[1.7] lg:scale-[2.1] xl:scale-[2.6]";
export const Background = () => {
  return (
    <div>
      <Ellipse1
        style={{
          filter: `blur(${Math.round(137 * MULTIPLIER)}px)`,
        }}
        className={`pointer-events-none absolute bottom-0 right-0 origin-center fill-[#189FDF] ${scaleClassName} blur-fix`}
      />
      <Ellipse2
        className={`pointer-events-none absolute left-0 top-0 origin-center -translate-x-1/2 fill-[#2E5EE2] xl:translate-x-0 ${scaleClassName} blur-fix`}
        style={{
          filter: `blur(${Math.round(137 * MULTIPLIER)}px)`,
        }}
      />
      <Ellipse3
        className={`pointer-events-none absolute right-0 top-0 origin-center translate-x-1/2 fill-[#9D5BD2] xl:-translate-x-1/4 ${scaleClassName} blur-fix`}
        style={{
          filter: `blur(${Math.round(110 * MULTIPLIER)}px)`,
        }}
      />
      <Ellipse4
        className={`pointer-events-none absolute -right-1/4 bottom-0 origin-center fill-[#FAE2B4] xl:translate-x-0 ${scaleClassName} blur-fix`}
        style={{
          filter: `blur(${Math.round(387 * MULTIPLIER)}px)`,
        }}
      />
      <Ellipse4
        className={`pointer-events-none absolute left-0 top-1/4 origin-center fill-[#FAE2B4] ${scaleClassName} blur-fix`}
        style={{
          filter: `blur(${Math.round(387 * MULTIPLIER)}px)`,
        }}
      />
    </div>
  );
};

const Ellipse1 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      width="617"
      height="425"
      viewBox="0 0 617 425"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M444.241 30.262C444.241 144.24 900.814 424.632 326.672 424.632C212.933 424.632 0 328.097 0 214.119C0 100.14 92.2034 160.986 205.942 160.986C319.681 160.986 444.241 -83.7164 444.241 30.262Z"
        fill="#189FDF"
      />
    </svg>
  );
};
const Ellipse2 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      width="542"
      height="602"
      viewBox="0 0 542 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M299.887 331.014C195.42 474.078 257.797 673.873 121.958 574.682C-13.8808 475.491 -39.3126 279.105 65.1544 136.041C169.621 -7.0236 364.428 -42.5899 500.266 56.601C636.105 155.792 404.354 187.95 299.887 331.014Z"
        fill="#2E5EE2"
      />
    </svg>
  );
};
const Ellipse3 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      width="499"
      height="578"
      viewBox="0 0 499 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.8432 106.488C122.225 -14.732 298.627 -34.8665 419.846 61.5157C541.066 157.898 509.671 428.015 413.289 549.235C316.906 670.454 377.386 363.757 256.167 267.375C134.947 170.993 -70.539 227.707 25.8432 106.488Z"
        fill="#9D5BD2"
      />
    </svg>
  );
};
const Ellipse4 = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      width="262"
      height="355"
      viewBox="0 0 262 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M223.303 156.285C223.303 254.278 320.622 354.867 206.548 354.867C92.4748 354.867 0 275.428 0 177.434C0 79.4398 92.4748 0 206.548 0C320.622 0 223.303 58.2906 223.303 156.285Z"
        fill="#FAE2B4"
      />
    </svg>
  );
};
