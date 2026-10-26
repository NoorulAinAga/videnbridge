import { getSiteContent } from "@/lib/content";
import ContactSection from "@/components/contact/ContactSection";
import FinalCta from "@/components/home/FinalCta";



export default async function contactPage() {
  const content = await getSiteContent();
  const home = content.home;

  return (
    <>
     
       <ContactSection contact={content.contact} />
       {/* <FinalCta content={home.finalCta} /> */}
    </>
  );
}
