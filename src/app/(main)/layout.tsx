import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Script from "next/script";
import { ReactNode } from "react";

import { baseUrl } from "@/lib/constants";
import { pardot } from "@/lib/pardot";
import { cn } from "@/lib/utils";

import { AutomaticVisualEditing } from "@/components/automatic-visual-editing";
import { Provider } from "@/components/provider";

import { poppins, spaceGrotesk } from "@/styles";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ICHRAS",
    default: "ICHRAS",
  },
  description:
    "Unlock the future of employee health benefits with ICHRAS.COM – revolutionizing insurance solutions for businesses of every size!",
  metadataBase: new URL(baseUrl),
  openGraph: {
    images: ["/opengraph-image.png"],
    siteName: "ICHRAS",
    url: new URL(baseUrl),
    description:
      "Unlock the future of employee health benefits with ICHRAS.COM – revolutionizing insurance solutions for businesses of every size!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          spaceGrotesk.variable,
          "overflow-x-hidden",
        )}
      >
        <Provider>
          {children}
          {draftMode().isEnabled && <AutomaticVisualEditing />}
          <Script id="pardot-track" strategy="afterInteractive">
            {pardot}
          </Script>
        </Provider>
      </body>
    </html>
  );
}
