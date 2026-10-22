import { getSiteContent } from "@/lib/content";
import ServicesBannerCarousel from "@/components/services/ServicesBannerCarousel";
import ServicesQuickNav from "@/components/services/ServicesQuickNav";
import ServiceDetail from "@/components/services/ServiceDetail";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Our Services | VidenBridge",
  description:
    "Patent Intelligence, Market Research, and Monthly or Quarterly Technology Watch services tailored to your business needs.",
};

export default async function ServicesPage() {
  const content = await getSiteContent();
  const servicesPage = content.servicesPage;
  const services = content.home.services.map((service) => ({
    ...service,
    anchorId: service.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  }));

  return (
    <>
      <ServicesBannerCarousel services={services} />
      <ServicesQuickNav heading={servicesPage.heading} services={services} />
      {services.map((service, index) => (
        <ServiceDetail
          key={service.anchorId}
          service={service}
          alternate={index % 2 === 1}
          copy={servicesPage.detail}
        />
      ))}
      <FinalCta content={servicesPage.finalCta} />
    </>
  );
}
