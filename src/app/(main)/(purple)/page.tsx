import { landingChooseCards } from "@/lib/data";

import { AnimationProvider } from "@/components/animation";
import { Choose } from "@/components/choose";
import { Money } from "@/components/icons/money";
import { Shield } from "@/components/icons/shield";
import { Nav } from "@/components/layout/nav";
import { ReachOut } from "@/components/layout/reach-out";
import { AnimatedLogo } from "@/components/logo";

import { CalculateRates } from "./_components/calculate-rates";
import { CopySection } from "./_components/copy-section";
import { Features } from "./_components/features";
import { HealthCareFreedom } from "./_components/health-care-freedom";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <AnimationProvider>
      <div className="relative bg-page xl:bg-page-xl">
        <Nav inset variant="blue" />
        <Hero />
        <HealthCareFreedom />
        <Features />
        <Choose variant="purple" choices={landingChooseCards} />
        <div className="pt-[100px] xl:bg-rest">
          <CalculateRates />
          <CopySection
            title="Why Choose Us?"
            className="mt-0"
            icon={
              <>
                <div className="absolute right-[calc(25%-70px)] top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 xl:block">
                  <Shield className="animate-bounce [animation-duration:5s]" />
                </div>
                <div className="absolute bottom-0 right-[11%] hidden rotate-[34deg] blur-[24px] xl:flex">
                  <AnimatedLogo />
                </div>
              </>
            }
          >
            Working with our team of certified brokers and their expertise, we
            ensure you make informed decisions that benefit both your business
            and your employees. Our certifications and continued education
            demonstrate a deep understanding of ICHRA regulations and empowers
            professionals to better advise employers and employees on utilizing
            ICHRAs to optimize their healthcare benefits
          </CopySection>
          <CopySection
            title="Get expert guidance!"
            align="right"
            className="xl:mb-[300px] xl:mt-[200px]"
            icon={
              <div className="absolute left-[70px] top-1/2 hidden -translate-y-1/2 xl:block">
                <Money className="animate-bounce [animation-duration:5s]" />
              </div>
            }
          >
            Bespoke Guidance and Care: expert advisors ensure that your ICHRA
            experience is streamlined, personalized, and optimized for your
            specific needs. With our service, you can trust that we&apos;ll
            provide you with the highest level of care and attention, making
            your ICHRA journey seamless and stress-free.
          </CopySection>
          <ReachOut variant="purple" />
        </div>
      </div>
    </AnimationProvider>
  );
}
