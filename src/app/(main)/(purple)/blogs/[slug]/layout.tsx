import { ReactNode } from "react";

import { Nav } from "@/components/layout/nav";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-have-50">
      <Nav variant="purple" />
      {children}
    </div>
  );
}
