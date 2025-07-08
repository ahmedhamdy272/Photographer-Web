"use client";
import React from "react";
import Image from "next/image";

// Utility to split text into spans for char animation
function splitTextToSpans(text: string) {
  return text.split("").map((char, idx) => (
    <span key={idx} className="candid-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

const CandidShotsSection: React.FC = () => {
  return (
    <div className="section candid-shots-section hidden md:block h-0 md:h-[100vh]">
      <section className="w-full h-[100vh] bg-[#f2efeb] px-4 md:px-12 py-16 hidden md:flex flex-col gap-8 relative overflow-hidden">
        <div className="w-full flex flex-col gap-8">
          {/* Top Row: Side Text and Heading with Images */}
          <div className="flex flex-row justify-between items-start w-full relative">
            {/* Left Side Text */}
            <div className="hidden md:flex flex-col gap-64 min-w-[120px]">
              <span className="text-gray-500 text-base md:text-lg">(Prad)</span>
              <span className="text-black text-sm md:text-xl font-medium mt-24">
                Have Something
                <br />
                Unique In Mind?
              </span>
            </div>
            {/* Center Heading with Images */}
            <div className="flex-1 flex flex-col items-center gap-2 mb-4">
              {/* Each line of heading with image, alternating left/right */}
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <h1 className="candid-title section-animate text-4xl md:text-9xl font-light text-black text-center leading-tight">
                  {splitTextToSpans("Candid Shots")}
                </h1>
                <span className="candid-item w-24 h-24 md:w-60 md:h-35 rounded-lg overflow-hidden bg-gray-200 shadow-md section-animate candid-image">
                  <Image
                    src="/image18.jpg"
                    alt="h1img1"
                    className="object-cover w-full h-full scale-hover-wrapper"
                    width={96}
                    height={96}
                  />
                </span>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <span className="candid-item w-24 h-24 md:w-45 md:h-35 rounded-lg overflow-hidden bg-gray-200 shadow-md section-animate candid-image">
                  <Image
                    src="/image16.jpg"
                    alt="h1img2"
                    className="object-cover w-full h-full scale-hover-wrapper"
                    width={96}
                    height={96}
                  />
                </span>
                <h1 className="candid-title section-animate text-4xl md:text-9xl font-semibold text-black text-center leading-tight">
                  {splitTextToSpans("That Capture")}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                <h1 className="candid-title section-animate text-4xl md:text-9xl font-light text-black text-center leading-tight">
                  {splitTextToSpans("The Best Part")}
                  <br />
                  {splitTextToSpans("And Joy")}
                </h1>
                <span className="candid-item w-24 h-24 md:w-60 md:h-70 rounded-lg overflow-hidden bg-gray-200 shadow-md section-animate candid-image">
                  <Image
                    src="/image17.jpg"
                    alt="h1img4"
                    className="object-cover w-full h-full scale-hover-wrapper"
                    width={96}
                    height={96}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidShotsSection;
