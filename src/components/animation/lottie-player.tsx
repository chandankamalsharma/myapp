import Lottie from "react-lottie-player";

import lottieJson from "./lz17vcja.json";

export const LottiePlayer = ({
  onComplete,
  play,
  className,
}: {
  onComplete: () => void;
  play: boolean;
  className?: string;
}) => {
  return (
    <Lottie
      className={className}
      loop={false}
      animationData={lottieJson}
      play={play}
      onComplete={onComplete}
    />
  );
};
