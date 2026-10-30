import { getSiteContent } from "@/lib/content";
import ServicesBannerCarousel from "@/components/services/ServicesBannerCarousel";
import ServicesQuickNav from "@/components/services/ServicesQuickNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import FinalCta from "@/components/home/FinalCta";

export async function generateMetadata() {
  const content = await getSiteContent();
  const metadata = content.digitalSolutionsPage.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function DigitalSolutionsPage() {
  const content = await getSiteContent();
  const digital = content.digitalSolutionsPage;
  const services = digital.services.map((service) => ({
    ...service,
    anchorId: service.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  }));

  return (
    <>
      <ServicesBannerCarousel services={services} eyebrowPrefix="DIGITAL SOLUTIONS" />
      <ServicesQuickNav heading={digital.heading} services={services} />
      {services.map((service, index) => (
        <ServiceDetail
          key={service.anchorId}
          service={service}
          alternate={index % 2 === 0}
          copy={digital.detail}
        />
      ))}
      <WhyChooseUs content={digital.whyUs} />
      <FinalCta content={digital.finalCta} />
    </>
  );
}
