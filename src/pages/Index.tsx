import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
