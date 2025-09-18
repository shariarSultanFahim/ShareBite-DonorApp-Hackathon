"use client";
import BringJoy from "./_components/BringJoy/BringJoy";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import MoreThanFood from "./_components/MoreThanFood/MoreThanFood";
import SDGs from "./_components/SDGs/SDGs";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Header />
      <div className="space-y-20 md:space-y-64">
        <Hero />
        <SDGs />
        <BringJoy />
        <MoreThanFood />
        <Footer />
      </div>
    </div>
  );
}
