"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight"; // Adjust the path as necessary

export const SpotlightNewDemo: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(33, 150, 243, 0.08) 0%, rgba(33, 150, 243, 0.02) 40%, rgba(244, 67, 54, 0.04) 60%, rgba(33, 150, 243, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(33, 150, 243, 0.06) 0%, rgba(33, 150, 243, 0.02) 60%, rgba(255, 193, 7, 0.02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(33, 150, 243, 0.04) 0%, rgba(33, 150, 243, 0.02) 40%, rgba(76, 175, 80, 0.06) 70%, transparent 100%)"
      />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 px-6 sm:px-12">
        <h1 className="text-3xl sm:text-8xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          SPCAM&apos;s Research Lab
        </h1>
        <p className="mt-4 font-normal text-base sm:text-lg md:text-xl text-neutral-300 max-w-lg text-center mx-auto">
          Our research team drives innovation in software development, creating
          groundbreaking solutions that shape the future of technology.
        </p>
      </div>
    </div>
  );
};
