import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";





export default function Home() {
  return (
    <>
    <SliderSection />
     <HeroSection />
     <CompanySection />
     <AboutComponent />
     <CatalogueSection />
     <CatalogSwiperSection />
     <ContactSection />
    </>
  );
}
