import { CanvasRevealEffectDemo3 } from "@/components/CanvasRevealEffectDemo3";
import { CarouselDemo } from "@/components/CarouselDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { TabsDemo } from "@/components/TabsDemo";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";

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
      <div className="px-4 sm:px-8 md:px-16">
        <CarouselDemo />
      </div>

      {/* Tabs Section */}
      <div className="px-4 sm:px-8 md:px-16">
        <TabsDemo />
      </div>

      {/* About Us Section */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 px-6 sm:px-12 mt-[870px] sm:mt-[650px]">
        <h1 className="text-3xl sm:text-6xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About SPCAM&apos;s Research Lab
        </h1>

        <div className="mt-4 font-normal text-base sm:text-lg md:text-xl text-neutral-300 max-w-lg text-center mx-auto">
          <TextGenerateEffectDemo />
        </div>
      </div>
    </div>
  );
}
