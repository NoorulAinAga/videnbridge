import { getSiteContent } from "@/lib/content";
import HeroCarousel from "@/components/home/HeroCarousel";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyVidenBridge from "@/components/home/WhyVidenBridge";
import AudienceSection from "@/components/home/AudienceSection";
import ApproachSection from "@/components/home/ApproachSection";

import FinalCta from "@/components/home/FinalCta";

export default async function HomePage() {
  const content = await getSiteContent();
  const home = content.home;

  return (
    <>
      <HeroCarousel slides={home.heroSlides} />
      <IntroSection intro={home.intro} />
      <ServicesSection heading={home.servicesHeading} services={home.services} />
      <WhyVidenBridge items={home.whyUs} />
      <AudienceSection audiences={home.audiences} />
      <ApproachSection items={home.approach} />
      <FinalCta content={home.finalCta} />
     
    </>
  );
}
