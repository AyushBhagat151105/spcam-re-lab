"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "SPCAM-Timetable-App",
      button: "Visit Project",
      src: "2.png",
    },
    {
      title: "SPCAM College Analytics Dashboard",
      button: "Explore Component",
      src: "199.jpg",
    },
    {
      title: "IOT Projects",
      button: "Explore Component",
      src: "11.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
