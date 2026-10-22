import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteContent } from "@/lib/content";

export const metadata = {
  title: "VidenBridge | Patent, Market & Technology Intelligence",
  description:
    "Transform patent, market and technology insights into strategic business decisions with VidenBridge.",
};

export default async function RootLayout({ children }) {
  const content = await getSiteContent();

  return (
    <html lang="en">
      <body>
        <Header brand={content.brand} navigation={content.navigation} />
        <main>{children}</main>
        <Footer brand={content.brand} navigation={content.navigation} contact={content.contact} />
      </body>
    </html>
  );
}
