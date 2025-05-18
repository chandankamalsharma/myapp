import { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-have-50">
      <Nav variant="blue" />
      {children}
      <Footer variant="blue" />
    </div>
  );
}
