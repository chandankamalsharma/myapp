import Link from "next/link";
import { ComponentProps } from "react";

import { Theme, calendlyLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Calendly } from "@/components/icons/calendly";
import { NavWrapper } from "@/components/layout/nav-wrapper";
import { Logo } from "@/components/logo/logo";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about-us",
    text: "About Us",
  },
  {
    href: "/our-process",
    text: "Our Process",
  },
  {
    href: "/contactus",
    text: "Contact Us",
  },
];
export const Nav = ({
  inset,
  variant,
}: {
  inset?: boolean;
  variant: Theme;
}) => {
  return (
    <NavWrapper>
      <Link
        href="/"
        title="Go to home page"
        className="mr-[30px] block shrink-0 sm:mr-[50px]"
      >
        <Logo className="w-8 sm:w-[55px]" color={variant} />
      </Link>
      <div className="flex w-full items-center gap-5 self-stretch sm:gap-[50px]">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.text}
          </NavLink>
        ))}
      </div>
      <Link
        title="Calendly Link"
        href={calendlyLink}
        target="_blank"
        className={cn(
          "relative shrink-0 rounded-full p-[7px] sm:h-16 sm:w-16 sm:p-3",
          {
            "bg-have-500": variant === "blue",
            "bg-haze-500": variant === "purple",
            "xl:mr-[184px]": inset,
          },
        )}
      >
        <Calendly className="h-6 w-6 sm:h-full sm:w-full" variant={variant} />
      </Link>
    </NavWrapper>
  );
};

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">,
) => {
  return (
    <Link
      className="flex items-center self-stretch text-xs font-medium text-have-950 sm:text-lg"
      {...props}
    />
  );
};
