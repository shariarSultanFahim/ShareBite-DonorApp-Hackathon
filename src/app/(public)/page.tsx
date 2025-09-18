"use client";
import Hero from "./_components/Hero/Hero";
import SDGs from "./_components/SDGs/SDGs";

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-40">
      <Hero />
     <SDGs />
     
    </div>
  );
}
