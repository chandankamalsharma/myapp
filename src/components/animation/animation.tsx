"use client";

import { m } from "framer-motion";
import dynamic from "next/dynamic";
import {
  ReactNode,
  RefObject,
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery, useScrollLock } from "usehooks-ts";

import { cn } from "@/lib/utils";

const LottiePlayer = dynamic(
  () => import("./lottie-player").then((mod) => mod.LottiePlayer),
  { ssr: false },
);
type TStyle = {
  x: number | string;
  y: number | string;
};

type TAnimationContext = {
  show: boolean;
  startRef: RefObject<HTMLDivElement>;
  endRef: RefObject<HTMLDivElement>;
};
export const AnimationContext = createContext<TAnimationContext | undefined>(
  undefined,
);
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(true);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });
  const [style, setStyle] = useState<TStyle>({ x: 0, y: 0 });

  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const isLargeScreen = useMediaQuery("(min-width: 1280px)", {
    initializeWithValue: true,
    defaultValue: true,
  });

  useEffect(() => {
    if (!endRef.current || !startRef.current) return;

    const startRect = startRef.current.getBoundingClientRect();
    const endRect = endRef.current.getBoundingClientRect();

    const startCoords = getCenterCoords(startRect);
    const endCoords = getCenterCoords(endRect);

    const translateX = endCoords.x - startCoords.x;
    const translateY = endCoords.y - startCoords.y + window.scrollY;

    setStyle(isLargeScreen ? { x: translateX, y: translateY } : { x: 0, y: 0 });
  }, [endRef, startRef, isLargeScreen]);

  useLayoutEffect(() => {
    if (isLargeScreen) {
      if (typeof window !== "undefined") {
        lock();
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 200);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        show,
        startRef,
        endRef,
      }}
    >
      <div
        className={cn(
          "pointer-events-none relative z-50 flex h-dvh items-center justify-center overflow-hidden bg-have-300 transition-colors duration-1000 xl:fixed xl:inset-0",
          {
            "xl:absolute xl:bg-transparent": !show,
          },
        )}
      >
        <m.div
          className="pointer-events-auto"
          ref={startRef}
          key="bird"
          layout
          layoutId="bird"
          transition={{
            duration: 1.4,
          }}
          animate={!show ? style : undefined}
        >
          <LottiePlayer
            className="translate-x-3 [&_svg]:!h-[600px] [&_svg]:!w-[600px] sm:[&_svg]:!h-[900px] sm:[&_svg]:!w-[900px]"
            play={true}
            onComplete={() => {
              setShow(false);
              if (isLargeScreen) {
                setTimeout(() => {
                  unlock();
                }, 1000);
              }
            }}
          />
        </m.div>
      </div>
      {children}
    </AnimationContext.Provider>
  );
};

function getCenterCoords(rect: DOMRect) {
  return {
    y: rect.top + rect.height / 2,
    x: rect.left + rect.width / 2,
  };
}
