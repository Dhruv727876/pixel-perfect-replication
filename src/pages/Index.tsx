import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCarousel from "@/components/ui/feature-carousel";
import TopPicksSection from "@/components/TopPicksSection";
import FeaturedSection from "@/components/FeaturedSection";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/TestimonialsDemo";
import FooterTapedDesign from "@/components/ui/footer-taped-design";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const sex = searchParams.get("sex") as "Men" | "Women" | null;
  const type = searchParams.get("type") as "trending" | "seasonal" | "accessories" | "summer" | "all-season" | null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        {/* Main container card */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-sm">
          <Navbar />
          <div className="mx-6 border-t border-border/60" />
          <div className="px-4 pt-2">
            <HeroSection />
          </div>
          <FeatureCarousel />
          <Testimonials />
        </div>
        <FooterTapedDesign />
      </div>
    </div>
  );
};

export default Index;
