import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import SatisfactionSection from "@/components/SatisfactionSection";
import ChangeOutlookSection from "@/components/ChangeOutlookSection";
import ServiceMenuSection from "@/components/ServiceMenuSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="overflow-x-hidden">
    <StickyHeader />
    <HeroSection />
    <SatisfactionSection />
    <ChangeOutlookSection />
    <ServiceMenuSection />
    <AmenitiesSection />
    <TeamSection />
    <TestimonialSection />
    <PricingSection />
    <ContactSection />
    <NewsSection />
    <FooterSection />
  </main>
);

export default Index;
