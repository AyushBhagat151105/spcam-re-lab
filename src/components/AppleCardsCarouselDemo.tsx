"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        GALLERY
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <h3 className="text-lg mt-[120px] sm:mt-3 font-semibold text-neutral-900 dark:text-neutral-200">
        Apple Inc.
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Apple Inc. is an American multinational technology company that
        specializes in consumer electronics, computer software, and online
        services. Apple is the world&apos;s largest technology company by
        revenue and, since January 2021, the world&apos;s most valuable company.
      </p>
      <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-md">
        Read More
      </button>
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/11.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/12.jpg",
    content: <DummyContent />,
  },
];
