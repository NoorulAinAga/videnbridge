import { getSiteContent } from "@/lib/content";
import AboutHero from "@/components/about/AboutHero";
import AboutOverview from "@/components/about/AboutOverview";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import ApproachSection from "@/components/home/ApproachSection";
import FinalCta from "@/components/home/FinalCta";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "About Us | VidenBridge",
  description:
    "Learn how VidenBridge connects patent intelligence, market research and technology monitoring to business decisions.",
};

export default async function AboutPage() {
  const content = await getSiteContent();
  const about = content.about;

  return (
    <>
      <AboutHero hero={about.hero} />
      <AboutOverview overview={about.overview} />
      <AboutPrinciples items={about.principles} />
      <ApproachSection items={content.home.approach} />
      <FinalCta
        content={{
          eyebrow: "LET'S WORK TOGETHER",
          title: about.closingTitle,
          body: about.closingBody,
          buttonLabel: "Contact Our Team",
        }}
      />
    
    </>
  );
}
