"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  LazyMotion,
  MotionValue,
  domAnimation,
  m,
  useMotionValue,
} from "framer-motion";
import { ReactNode, createContext, useContext, useEffect, useRef } from "react";

export const Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <LazyMotion features={domAnimation}>
      <FlyingAnimationProvider>{children}</FlyingAnimationProvider>
    </LazyMotion>
  );
};

type FlyingAnimationContext = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotate: MotionValue<number>;
};
const FlyingAnimationContext = createContext<
  FlyingAnimationContext | undefined
>(undefined);
const FlyingAnimationProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<SVGPathElement>(null);

  const progressLength = useMotionValue(0);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);
  const rotate = useMotionValue(176);

  const prevPoint = useRef<Point | null>(null);

  useEffect(() => {
    const pathElementForeground = ref.current;
    if (!pathElementForeground) return;
    const totalPathLength = pathElementForeground.getTotalLength();
    const initialProgress = progressLength.get();

    const initialCoords = pathElementForeground.getPointAtLength(
      initialProgress * totalPathLength,
    );

    prevPoint.current = initialCoords;

    return progressLength.on("change", (latestPercent: number) => {
      if (!prevPoint.current) return;
      const latestPathProgress = pathElementForeground.getPointAtLength(
        latestPercent * totalPathLength,
      );

      const angle = calculateAngleToNewPoint(
        prevPoint.current,
        latestPathProgress,
      );

      progressX.set(latestPathProgress.x - initialCoords.x);
      progressY.set(latestPathProgress.y - initialCoords.y);
      rotate.set(angle);

      prevPoint.current = latestPathProgress;
    });
  }, [rotate, progressLength, progressX, progressY]);
  return (
    <FlyingAnimationContext.Provider
      value={{
        x: progressX,
        y: progressY,
        rotate,
      }}
    >
      <m.svg width="95" height="95" viewBox="0 0 95 95" className="hidden">
        <g>
          <m.path
            ref={ref}
            pathLength={progressLength}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            fillRule="evenodd"
            clipRule="evenodd"
            transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
            d="M251 1C191.5 4.992 39 21 58 91.5s-93.5 67.5-44.5 131 179 0 231 63.5 103.5 10.5 130-43.499S461 195.5 498 164c37-31.5-24.5-131.5-113.5-113C332.12 61.89 320-3.627 251 1Z"
          />
        </g>
      </m.svg>
      {children}
    </FlyingAnimationContext.Provider>
  );
};

type Point = { x: number; y: number };

function calculateAngleToNewPoint(point1: Point, point2: Point) {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;

  const angleRadians = Math.atan2(dy, dx);
  return angleRadians * (180 / Math.PI);
}

export const useFlyingAnimation = () => {
  const context = useContext(FlyingAnimationContext);
  if (!context) {
    throw new Error(
      "useFlyingAnimation must be used within a FlyingAnimationProvider",
    );
  }
  return context;
};
