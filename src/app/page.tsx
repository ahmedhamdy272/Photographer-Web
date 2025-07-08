"use client";
import Hero from "../components/Hero";

import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import CandidShotsSection from "../components/CandidShotsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import useSectionAnimations from "../hooks/useSectionAnimations";
import CandidShotsLowerRow from "../components/CandidShotsLowerRow";


export default function Home() {
  useSectionAnimations();
  return (
    <main className="bg-black min-h-screen w-full">
      <Hero />
      <AboutSection />
      <GallerySection />
      <CandidShotsSection />
      <CandidShotsLowerRow />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
