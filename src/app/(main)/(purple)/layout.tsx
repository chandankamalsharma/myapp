import { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer variant="purple" />
    </>
  );
}
