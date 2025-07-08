"use client";

import React from "react";
import Image from "next/image";

// Utility to wrap text in spans for char animation (optional for headings)
function wrapAboutText(text: string) {
  return text.split("").map((char, idx) => (
    <span key={idx} className="about-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

const AboutSection: React.FC = () => {
  return (
    <div className="section about-section relative overflow-visible">
      <section
        id="about"
        className="w-full min-h-[100vh] bg-[#f2efeb] flex flex-col md:flex-row items-start justify-center px-6 md:px-24 py-24 gap-8 relative overflow-visible"
      >
        {/* Background soft square */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-white/60 rounded-2xl shadow-2xl blur-xl z-0"
          style={{ filter: "blur(16px)", opacity: 0.7 }}
        />

        {/* Left background image */}
        <div className="about-bg-left absolute left-40 top-12 z-0 rotate-[-8deg]">
          <Image
            src="/image6.jpg"
            alt="Background Left"
            width={180}
            height={220}
            className="rounded-xl shadow-lg opacity-80 blur-sm"
            style={{ filter: "blur(6px)" }}
          />
        </div>

        {/* Right background image */}
        <div className="about-bg-right absolute right-30 bottom-8 z-0 rotate-[7deg]">
          <Image
            src="/image12.jpg"
            alt="Background Right"
            width={220}
            height={160}
            className="rounded-xl shadow-lg opacity-80 blur-sm"
            style={{ filter: "blur(4px)" }}
          />
        </div>

        {/* Main content (z-10 or higher) */}
        <div className="relative z-10 w-full">
          {/* Left Number */}
          <span className="about-char absolute left-8 top-16 text-black/80 text-xs md:text-4xl font-light select-none tracking-widest">
            02
          </span>
          {/* Bottom Left Large Image */}
          <span className="about-char absolute left-0 bottom-16 z-10">
            <Image
              src="/image3.jpg"
              alt="About Preview"
              className="rounded-xl shadow-lg w-60 h-56 object-cover hero-float hidden md:block"
              width={160}
              height={224}
              priority
            />
          </span>
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-8 max-w-4xl mx-auto">
            {/* Heading */}
            <div className="mb-2 flex flex-row items-start flex-wrap">
              <span className="about-char text-lg md:text-[18px] text-orange-900 md:text-second font-bold mt-2 md:mt-3 min-w-[160px] mr-3">
                {wrapAboutText("CHERISH YOUR SPECIAL DAY WITH STUNNING,")}
              </span>
              <span className="about-char flex-1 min-w-[220px]">
                <h2 className="text-3xl md:text-5xl font-semi-light text-black leading-tight">
                  {wrapAboutText("I Specialize In Transforming Fleeting ")}
                </h2>
              </span>
              <span className="about-char">
                <h2 className="text-3xl md:text-[50px] font-semi-light text-orange-950 md:text-second leading-tight">
                  {wrapAboutText("Moments Into Timeless Memories.")}
                </h2>
              </span>
              <span className="about-char text-2xl md:text-[54px] font-medium text-black md:text-second leading-tight">
                {wrapAboutText(
                  "Whether It's A Wedding, Family Portrait,Or A Personal Milestone"
                )}
              </span>
            </div>
            {/* Content Blocks */}
            <div className="flex flex-col gap-14">
              <span className="about-char">
                <div>
                  <div className="absolute right-16 text-xl hidden md:block text-second text-right mt-1">
                    (First)
                  </div>
                  <div className="text-lg md:text-2xl font-semibold text-orange-950  md:text-black mb-4">
                    {wrapAboutText(
                      "My Goal Is To Make Every Session Enjoyable"
                    )}
                  </div>
                  <div className="text-black md:text-second text-sm md:text-base">
                    {wrapAboutText(
                      "a passionate photographer with 10 years of experience in capturing life's most precious moments. My journey began [brief personal story or inspiration]."
                    )}
                  </div>
                </div>
              </span>
              <span className="about-char">
                <div className="">
                  <div className="absolute right-16 text-xl hidden md:block text-second text-right mt-1">
                    (Prad)
                  </div>
                  <div className="text-lg md:text-2xl font-semibold text-orange-950  md:text-black mb-4">
                    {wrapAboutText(
                      "Let My Lens Capture The Beauty Of Your Moments."
                    )}
                  </div>
                  <div className="text-black md:text-second text-sm md:text-base">
                    {wrapAboutText(
                      "Explore my gallery to see a collection of my favorite works. From weddings and engagements to portraits and events, each photo tells a unique story."
                    )}
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
