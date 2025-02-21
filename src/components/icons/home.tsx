import { ComponentProps } from "react";

export const Home = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M15.2666 6.49926C14.8638 6.13033 14.4713 5.75169 14.0684 5.38276V1.75169C14.0684 1.1012 13.5107 0.576932 12.8186 0.576932C12.1265 0.576932 11.5688 1.1012 11.5688 1.75169V3.02353L9.31698 0.907029C9.02776 0.576932 8.63525 0.343922 8.20142 0.227417H7.76759C7.32343 0.343922 6.93092 0.58664 6.6417 0.916737C4.66882 2.78082 2.69593 4.63518 0.723047 6.47984C0.371853 6.75169 0.123951 7.12062 0 7.52839V7.93615C0.041317 8.08179 0.103292 8.21771 0.165268 8.35363C0.402841 8.80994 0.888315 9.1012 1.43577 9.1012H1.71465V9.28567C1.71465 10.6934 1.72498 12.1109 1.71465 13.5187C1.67334 14.3536 2.30342 15.0721 3.18141 15.208C3.19174 15.208 3.2124 15.2177 3.22272 15.2274H6.09425C6.34216 15.1497 6.4971 14.9167 6.46611 14.6643C6.46611 13.5575 6.46611 12.4507 6.46611 11.3342C6.41446 10.9264 6.72434 10.5478 7.15817 10.4993C7.22014 10.4993 7.28212 10.4993 7.35442 10.4993H8.67657C9.11039 10.4604 9.49258 10.7614 9.53389 11.1692C9.53389 11.208 9.53389 11.2565 9.53389 11.2954V14.6449C9.5029 14.8876 9.65784 15.1206 9.90575 15.208H12.7773C12.8806 15.1789 12.9735 15.1595 13.0768 15.1303C13.7792 14.9264 14.2647 14.3245 14.275 13.6255C14.275 12.1789 14.275 10.7226 14.275 9.27596V9.08179H14.5126C15.2253 9.08179 15.8451 8.60606 15.969 7.94586C15.969 7.92645 15.9897 7.89732 16 7.8779V7.52839C15.8864 7.11091 15.6385 6.73227 15.2873 6.46043" />
    </svg>
  );
};
