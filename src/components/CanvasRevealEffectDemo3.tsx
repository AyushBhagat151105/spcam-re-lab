"use client";
import React from "react";

import ColourfulText from "./ui/colourful-text";

export function CanvasRevealEffectDemo3() {
  return (
    <div className="h-min flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-[#09090b] w-full gap-4 mx-auto px-8 relative mt-4">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        The best <ColourfulText text="Project" /> <br /> From Research Lab
      </h1>
    </div>
  );
}
