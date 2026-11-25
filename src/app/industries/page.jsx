import { getSiteContent } from "@/lib/content";
import IndustriesBannerCarousel from "@/components/industries/IndustriesBannerCarousel/IndustriesBannerCarousel";
import IndustriesOverview from "@/components/industries/IndustriesOverview/IndustriesOverview";
import IndustriesTabs from "@/components/industries/IndustriesTabs/IndustriesTabs";
import IndustriesCapabilities from "@/components/industries/IndustriesCapabilities/IndustriesCapabilities";
import IndustriesWhy from "@/components/industries/IndustriesWhy/IndustriesWhy";
import FinalCta from "@/components/home/FinalCta/FinalCta";

export const metadata = {
  title: "Industries We Serve | VidenBridge",
  description:
    "Explore the industries VidenBridge supports through Patent Intelligence, Market Intelligence, Technology Watch and Digital Solutions.",
};

export default async function IndustriesPage() {
  const content = await getSiteContent();
  const industriesPage = content.industriesPage;

  return (
    <>
      <IndustriesBannerCarousel slides={industriesPage.slides} />
      <IndustriesOverview overview={industriesPage.overview} />
      <IndustriesTabs
        heading={industriesPage.detailHeading}
        industries={industriesPage.industries}
      />
      <IndustriesCapabilities
        heading={industriesPage.capabilitiesHeading}
        capabilities={industriesPage.capabilities}
      />
      <IndustriesWhy why={industriesPage.why} />
      <FinalCta content={industriesPage.finalCta} />
    </>
  );
}
