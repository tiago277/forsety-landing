/**
 * Home Page — Forsety Landing Page
 * Design: Athletic Minimalism (Apple Fitness+ inspired)
 * Sections: Hero → Products → About → CTA → Footer
 * Colors: #252A48 (navy), #5865F2 (vibrant blue)
 * Font: Plus Jakarta Sans
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252A48]">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
