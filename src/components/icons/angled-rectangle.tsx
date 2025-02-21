import { ComponentProps } from "react";

export const AngledRectangle = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="252"
      height="94"
      viewBox="0 0 252 94"
      {...props}
    >
      <path d="M0 93.9797L51.9513 19.1101C65.4561 -0.352434 91.8546 -5.79798 111.959 6.73153L251.953 93.9798L118.164 93.9797L0 93.9797Z" />
    </svg>
  );
};
