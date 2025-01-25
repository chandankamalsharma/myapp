import Link from "next/link";
import { ComponentProps } from "react";

import { Theme } from "@/lib/constants";

import { Mail } from "@/components/icons/mail";
import { Logo } from "@/components/logo/logo";

const quickLinks = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Process",
    href: "/our-process",
  },
  // {
  //   title: "Blogs",
  //   href: "/blogs",
  // },
];
const company = [
  // {
  //   title: "Waiver",
  //   href: "/waiver",
  // },
  // {
  //   title: "Terms & conditions",
  //   href: "/terms-and-conditions",
  // },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
];
export const Footer = ({ variant }: { variant: Theme }) => {
  const bgColor = variant === "blue" ? "bg-have-400" : "bg-haze-700";
  return (
    <footer className={`${bgColor} relative`}>
      <div className="relative mx-auto flex max-w-screen-2xl flex-col items-center gap-[92px] px-[45px] py-[34px] sm:flex-row sm:gap-0 xl:px-[153px]">
        <div className="flex flex-col items-center justify-between self-stretch sm:items-start">
          <Link href="/" title="Go to home page" className="block md:mb-20">
            <Logo className="w-[76px] sm:w-[120px]" />
          </Link>
          <Socials className="mt-[15px] max-w-[292px] text-center sm:mt-0 sm:text-left" />
        </div>
        <div className="flex grow flex-wrap justify-between gap-[51px] self-stretch sm:justify-between sm:gap-x-0 min-[684px]:gap-x-[51px] lg:justify-center lg:gap-[107px] lg:py-[76px]">
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Company" links={company} />
          <div className="w-fit text-white">
            <h2 className="pb-[30px] text-lg font-bold">Contact Us</h2>
            <ul className="flex flex-col gap-[15px]">
              {/*<li>*/}
              {/*  <Link*/}
              {/*    className="flex items-center gap-2.5 text-[15px] font-medium"*/}
              {/*    href="tel:+24 12 345 67 890"*/}
              {/*  >*/}
              {/*    <Phone />*/}
              {/*    <span>+24 12 345 67 890</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link
                  className="flex items-center gap-2.5 text-[15px] font-medium"
                  href="mailto:info@ichras.com"
                >
                  <Mail />
                  <span>info@ichras.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*<Socials className="sm:hidden" />*/}
      </div>
    </footer>
  );
};

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="py-4 text-[15px] font-medium leading-[21px] text-white sm:w-[292px]">
        Empowering Businesses with the future of health care.
      </p>
      <p className="pb-8 text-[15px] font-medium leading-[21px] text-white sm:w-[292px]">
        3012 S Broadway St, Englewood, CO 80113
      </p>
    </div>
  );
};

type FooterLinksProps = {
  title: string;
  links: Omit<ComponentProps<typeof Link>, "className">[];
};
const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="w-fit text-white">
      <h2 className="pb-[30px] text-lg font-bold">{title}</h2>
      <ul className="flex flex-col gap-[15px]">
        {links.map(({ title, ...link }, index) => (
          <li key={index}>
            <Link className="text-[15px] font-medium" {...link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
