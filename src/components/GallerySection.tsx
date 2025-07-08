"use client";
import React from "react";
import Image from "next/image";

// Utility to wrap text in spans for char animation (like Candid Shots Lower Row)
function wrapGalleryText(text: string) {
  return text.split("").map((char, idx) => (
    <span key={idx} className="gallery-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

const GallerySection: React.FC = () => {
  return (
    <div className="section gallery-section min-h-screen">
      <section
        id="product"
        className="w-full min-h-screen gallery-item bg-[#f2efeb] px-4 md:px-12 py-10 flex flex-col gap-6"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <span className="gallery-title section-animate gallery-char text-lg md:text-4xl font-light text-black">
            {wrapGalleryText("03")}
          </span>
          <span className="section-animate gallery-char text-base md:text-2xl text-black/60 font-semibold">
            {wrapGalleryText("1/15")}
          </span>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {/* Card 1: Image */}
          <div className="gallery-item rounded-xl overflow-hidden shadow-sm bg-white aspect-square group transition-transform duration-300 hover:scale-105 gallery-char">
            <Image
              src="/image9.jpg"
              alt="Gallery 1"
              className="gallery-image object-cover w-full h-full gallery-char"
              width={400}
              height={400}
            />
          </div>
          {/* Card 2: Text Card */}
          <div className="gallery-item rounded-xl border border-gray-300 bg-white flex flex-col items-center justify-center aspect-square p-6 text-center transition-transform duration-300 hover:scale-105 gallery-char">
            <div className="text-2xl md:text-3xl font-semibold text-black mb-2 gallery-char">
              {wrapGalleryText("Let My Lens")}
              <br />
              {wrapGalleryText("Capture")}
            </div>
            <div className="text-xs md:text-base text-gray-500 gallery-char">
              {wrapGalleryText("CHERISH YOUR SPECIAL DAY")}
              <br />
              {wrapGalleryText("WITH STUNNING,")}
            </div>
          </div>
          {/* Card 3: Static Image (reset from CardRotate) */}
          <div className="gallery-item rounded-xl overflow-hidden shadow-sm bg-white aspect-square group transition-transform hover:scale-105 relative gallery-char flex items-center justify-center">
            <Image
              src="/image15.jpg"
              alt="Gallery 15"
              className="gallery-image object-cover w-full h-full gallery-char"
              width={400}
              height={400}
            />
          </div>
          {/* Card 4: Image with Arrow */}
          <div className="gallery-item rounded-xl overflow-hidden shadow-sm bg-white aspect-square group transition-transform duration-300 hover:scale-105 relative gallery-char">
            <Image
              src="/image11.jpg"
              alt="Gallery 11"
              className="gallery-image object-cover w-full h-full gallery-char"
              width={400}
              height={400}
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition z-10 gallery-char">
              <span className="text-xl gallery-char">↗</span>
            </button>
          </div>
          {/* Card 5: Image */}
          <div className="gallery-item rounded-xl overflow-hidden shadow-sm bg-white aspect-square group transition-transform duration-300 hover:scale-105 gallery-char">
            <Image
              src="/image14.jpg"
              alt="Gallery 4"
              className="gallery-image object-cover w-full h-full gallery-char"
              width={400}
              height={400}
            />
          </div>
          {/* Card 6: Text Card */}
          <div className="gallery-item rounded-xl border border-gray-300 bg-white flex flex-col items-center justify-center aspect-square p-6 text-center transition-transform duration-300 hover:scale-105 gallery-char">
            <div className="text-2xl md:text-3xl font-semibold text-black mb-2 gallery-char">
              {wrapGalleryText("Let My Lens")}
              <br />
              {wrapGalleryText("Capture")}
            </div>
            <div className="text-xs md:text-base text-gray-500 gallery-char">
              {wrapGalleryText("CHERISH YOUR SPECIAL DAY")}
              <br />
              {wrapGalleryText("WITH STUNNING,")}
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-base md:text-xl font-semibold text-black gallery-char">
            {wrapGalleryText("Bringing The")}
          </span>
          <a
            href="https://www.pexels.com/search/wedding/"
            target="_blank"
            className="text-base md:text-xl font-semibold text-black/70 cursor-pointer hover:underline gallery-char"
          >
            {wrapGalleryText("See All")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
