import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  organizationSchema,
  webSiteSchema,
  professionalServiceSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";
import { SITE } from "@/config/seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        rawTitle
        structuredData={[
          organizationSchema(),
          webSiteSchema(),
          professionalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
