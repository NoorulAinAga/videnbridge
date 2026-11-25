import { getSiteContent } from "@/lib/content";
import HeroCarousel from "@/components/home/HeroCarousel/HeroCarousel";
import IntroSection from "@/components/home/IntroSection/IntroSection";
import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import WhyVidenBridge from "@/components/home/WhyVidenBridge/WhyVidenBridge";
import AudienceSection from "@/components/home/AudienceSection/AudienceSection";
import ApproachSection from "@/components/home/ApproachSection/ApproachSection";

import FinalCta from "@/components/home/FinalCta/FinalCta";

export default async function HomePage() {
  const content = await getSiteContent();
  const home = content.home;

  return (
    <>
      <HeroCarousel slides={home.heroSlides} />
      <IntroSection intro={home.intro} />
      <ServicesSection
        heading={home.servicesHeading}
        services={home.services}
        extraService={content.servicesPage.digitalSolutionsLink}
      />
      <WhyVidenBridge items={home.whyUs} />
      <AudienceSection audiences={home.audiences} />
      <ApproachSection items={home.approach} />
      <FinalCta content={home.finalCta} />
     
    </>
  );
}
