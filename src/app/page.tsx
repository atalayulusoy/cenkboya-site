import { HomePage } from "@/components/site/home-page";
import { companyInfo } from "@/components/site/site-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo.name,
  telephone: companyInfo.phoneDisplay,
  sameAs: [companyInfo.instagramHref, companyInfo.facebookHref].filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: companyInfo.phoneDisplay,
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["tr"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <HomePage />
    </>
  );
}
