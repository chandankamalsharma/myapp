import { Poppins, Space_Grotesk } from "next/font/google";

export const commonPadding =
  "px-5 sm:px-[45px] mx-auto w-full max-w-screen-2xl";

export const topPadding = "pt-20 sm:pt-[139px]";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
