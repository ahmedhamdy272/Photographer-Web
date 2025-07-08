"use client";
import React from "react";

// Utility to wrap text in spans for char animation (like About section)
function wrapCandidLowerText(text: string) {
  return text.split("").map((char, idx) => (
    <span key={idx} className="candid-lower-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

const CandidShotsLowerRow: React.FC = () => (
  <section className="section candid-lower-row-section h-[100vh] bg-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-8 w-full h-[100vh] bg-black">
      {/* Large Image */}
      <span className="candid-lower-char rounded-xl overflow-hidden shadow-lg w-full aspect-square max-w-xl mx-auto p-2 section-animate candid-lower-image">
        <video
          src="/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full rounded-2xl"
        />
      </span>
      {/* Subheading */}
      {/* Description and Button */}
      <div className="flex flex-col gap-4 items-start justify-center px-2">
        <span className="flex flex-col items-start justify-center gap-2 text-left candid-lower-title">
          <span className="text-2xl md:text-base text-white font-semibold">
            {wrapCandidLowerText("CHERISH YOUR SPECIAL DAY")}
            <br />
            {wrapCandidLowerText("WITH STUNNING,")}
          </span>
        </span>
        <span className="text-second text-lg md:text-4xl font-medium">
          {wrapCandidLowerText(
            "Explore my gallery to see a collection of my favorite works."
          )}
          <br />
          {wrapCandidLowerText(
            "From weddings and engagements to portraits and events, each photo tells a unique story."
          )}
          <br />
          <br />
          {wrapCandidLowerText(
            "Let my lens capture the beauty of your moments."
          )}
        </span>
      </div>
      <span className="candid-lower-char flex items-end justify-end w-full mb-2 pr-2">
        <button className="section-animate w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200">
          <a href="https://www.pexels.com/search/photographer/">&rarr;</a>
        </button>
      </span>
    </div>
  </section>
);

export default CandidShotsLowerRow;
