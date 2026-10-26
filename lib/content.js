import { siteContent } from "@/data/site-content";

// Content adapter boundary:
// - local mode returns the JavaScript content object.
// - strapi mode can be enabled later without rewriting page components.
// Keep the Strapi response mapped to the same shape as siteContent.

const source = process.env.CONTENT_SOURCE || "local";
const strapiUrl = process.env.STRAPI_URL;

export async function getSiteContent() {
  if (source !== "strapi" || !strapiUrl) {
    return siteContent;
  }

  try {
    const response = await fetch(
      `${strapiUrl.replace(/\/$/, "")}/api/site-content?populate=deep`,
      {
        headers: process.env.STRAPI_API_TOKEN
          ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
          : {},
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Strapi returned ${response.status}`);
    }

    const payload = await response.json();

    // Adjust this mapping to your Strapi content type's actual schema.
    // The expected shape is { data: { ...siteContent } } or { ...siteContent }.
    const cmsContent = payload?.data?.attributes || payload?.data || payload;
    return {
      ...siteContent,
      ...cmsContent,
      brand: { ...siteContent.brand, ...(cmsContent.brand || {}) },
      navigation: cmsContent.navigation || siteContent.navigation,
      contact: { ...siteContent.contact, ...(cmsContent.contact || {}) },
      home: { ...siteContent.home, ...(cmsContent.home || {}) },
      servicesPage: { ...siteContent.servicesPage, ...(cmsContent.servicesPage || {}) },
      digitalSolutionsPage: { ...siteContent.digitalSolutionsPage, ...(cmsContent.digitalSolutionsPage || {}) },
      about: { ...siteContent.about, ...(cmsContent.about || {}) },
    };
  } catch (error) {
    console.error("Content API unavailable; using local content.", error);
    return siteContent;
  }
}
