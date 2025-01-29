import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { CanvasRevealEffectDemo3 } from "@/components/CanvasRevealEffectDemo3";
import { CarouselDemo } from "@/components/CarouselDemo";
import { FAQAccordion } from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { TabsDemo } from "@/components/TabsDemo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo />

      {/* Hero Section */}
      <div>
        {/* <SpotlightNewDemo /> */}
        <HeroParallaxDemo />
      </div>

      {/* Canvas Reveal Effect */}
      <div>
        <CanvasRevealEffectDemo3 />
      </div>

      {/* Carousel */}
      <div className="px-4 sm:px-8 md:px-16" id="carousel">
        <CarouselDemo />
      </div>

      {/* Tabs Section */}
      <div className="px-4 sm:px-8 md:px-16" id="tabs">
        <TabsDemo />
      </div>

      {/* About Us Section */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 px-6 sm:px-12 mt-[870px] sm:mt-[650px]" id="about">
        <AppleCardsCarouselDemo />
      </div>

      <div className="px-4 sm:px-8 md:px-16" id="faq">
        <FAQAccordion />
      </div>

      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}
