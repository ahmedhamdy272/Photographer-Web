"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = ["Home", "Service", "About", "Product"];

const adventureImages = [
  "/image4.jpg",
  "/image10.jpg",
  "/image12.jpg",
  "/image13.jpg",
  "/image3.jpg",
  "/image2.jpg",
];

// Utility to split text into spans for char animation
function splitHeroTextToSpans() {
  // M, A (italic), R, I, O
  return [
    <span key="M" className="hero-char inline-block">
      M
    </span>,
    <span
      key="A"
      className="hero-char inline-block italic font-serif md:text-[30vw]"
    >
      A
    </span>,
    <span key="R" className="hero-char inline-block">
      R
    </span>,
    <span key="I" className="hero-char inline-block">
      I
    </span>,
    <span key="O" className="hero-char inline-block">
      O
    </span>,
  ];
}

const Hero: React.FC = () => {
  const [currentAdventureIdx, setCurrentAdventureIdx] = useState(0);
  const [navOpen, setNavOpen] = useState(false); // mobile nav state

  // Helper to wrap negative indices
  const getWrappedIndex = (idx: number, length: number) =>
    (length + (idx % length)) % length;

  // Handle swap
  const handleSwap = () => {
    setCurrentAdventureIdx((prev) => (prev + 1) % adventureImages.length);
  };

  return (
    <section className="hero-section relative flex flex-col justify-between h-[100vh] bg-gradient-to-br from-black via-[#181824] to-[#23243a] text-white overflow-hidden px-4 md:px-12 pt-8 pb-8">
      {/* Logo at top left */}
      <span className="hero-char absolute top-8 left-8 z-30">
        <div className="bg-white rounded-lg shadow-md flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
          <span className="text-3xl md:text-4xl font-bold text-black select-none">
            M
          </span>
        </div>
      </span>

      {/* Hamburger for mobile nav */}
      <span className="hero-char md:hidden absolute top-8 right-8 z-40 w-10 h-10 flex flex-col justify-center items-center">
        <button
          className="w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Open navigation"
        >
          <span className="block w-8 h-1 bg-white mb-1 rounded transition-all" />
          <span className="block w-8 h-1 bg-white mb-1 rounded transition-all" />
          <span className="block w-8 h-1 bg-white rounded transition-all" />
        </button>
      </span>

      {/* Mobile Nav Overlay */}
      {navOpen && (
        <span className="hero-char fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-2xl font-bold tracking-wide hover:underline"
              onClick={() => setNavOpen(false)}
            >
              {item}
            </Link>
          ))}
        </span>
      )}

      {/* Desktop Navbar */}
      <span className="hero-char absolute top-8 right-[30%] z-20 flex-col gap-2 text-xs md:text-xl font-light tracking-wide text-left hidden md:flex">
        {NAV_ITEMS.map((item) => (
          <Link key={item} href="#" className="hover:underline">
            {item}
          </Link>
        ))}
      </span>

      {/* Huge MARIO text */}
      <h1 className="hero-title absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[27vw] font-bold text-white/90 select-none pointer-events-none whitespace-nowrap z-0">
        {splitHeroTextToSpans()}
      </h1>

      {/* Floating Images - Desktop */}
      <span className="hero-char hidden md:block">
        <div className="absolute left-[50%] top-50 z-20 hero-float">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-[160px] h-[240px] md:w-[240px] md:h-[340px] bg-gray-300">
            <Image
              src={
                adventureImages[
                  getWrappedIndex(
                    currentAdventureIdx - 1,
                    adventureImages.length
                  )
                ]
              }
              alt="Floating 1"
              className="object-cover w-full h-full"
              draggable={false}
              width={340}
              height={440}
              priority
            />
          </div>
        </div>
        <div className="absolute right-[18vw] top-[28vh] z-10 hero-float">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg w-[120px] h-[140px] md:w-[180px] md:h-[240px] bg-gray-400 relative">
              <Image
                src={
                  adventureImages[
                    getWrappedIndex(
                      currentAdventureIdx - 2,
                      adventureImages.length
                    )
                  ]
                }
                alt="Floating 2"
                className="object-cover w-full h-full"
                draggable={false}
                width={180}
                height={240}
              />
            </div>
          </div>
        </div>
      </span>

      {/* Floating Images Row - Mobile */}
      <span className="hero-char flex md:hidden flex-row items-end justify-center gap-2 mt-90 mb-6 z-10 relative hero-float">
        {/* Small Left */}
        <div className="rounded-xl overflow-hidden shadow-lg w-16 h-20 bg-gray-400">
          <Image
            src={
              adventureImages[
                getWrappedIndex(currentAdventureIdx - 1, adventureImages.length)
              ]
            }
            alt="Small Left"
            className="object-cover w-full h-full"
            draggable={false}
            width={64}
            height={80}
          />
        </div>
        {/* Big Center */}
        <div className="rounded-xl overflow-hidden shadow-lg w-40 h-50 bg-gray-300 mx-2 border-2 border-white">
          <Image
            src={
              adventureImages[
                getWrappedIndex(currentAdventureIdx, adventureImages.length)
              ]
            }
            alt="Big Center"
            className="object-cover w-full h-full"
            draggable={false}
            width={160}
            height={200}
          />
        </div>
        {/* Small Right */}
        <div className="rounded-xl overflow-hidden shadow-lg w-16 h-20 bg-gray-400">
          <Image
            src={
              adventureImages[
                getWrappedIndex(currentAdventureIdx + 1, adventureImages.length)
              ]
            }
            alt="Small Right"
            className="object-cover w-full h-full"
            draggable={false}
            width={64}
            height={80}
          />
        </div>
      </span>

      {/* Bottom Details as 2-Box Grid */}
      <span className="hero-char absolute bottom-8 left-0 w-full flex justify-center z-20">
        <div className="w-full max-w grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Box */}
          <div className="relative flex flex-col justify-between rounded-xl p-6 min-h-[200px]">
            {/* Number at top */}
            <span className="text-xl md:text-4xl text-gray-300 absolute top-4 left-6">
              01
            </span>
            {/* Photo centered */}
            <div className="flex flex-1 items-center justify-center">
              <div className="rounded-xl hidden md:block overflow-hidden shadow-lg w-[160px] h-[140px] md:w-[180px] md:h-[220px]">
                <Image
                  src={adventureImages[currentAdventureIdx]}
                  alt="Adventure Trip"
                  className="object-cover w-full h-full"
                  draggable={true}
                  width={180}
                  height={220}
                />
              </div>
            </div>
            {/* Arrow at bottom right */}
            <button
              className="absolute right-6 rounded-full border border-[#eeeeee8f] w-20 h-20 flex items-center justify-center hover:bg-white/10 transition"
              onClick={handleSwap}
            >
              <span className="text-2xl text-[#eeeeee8f] hover:text-white transition">
                →
              </span>
            </button>
            {/* Text at bottom left */}
            <span className="absolute bottom-4 left-6 text-xs md:text-sm text-gray-200 tracking-widest">
              ADVENTURE
              <br />
              TRIP
            </span>
          </div>
          {/* Right Box */}
          <div className="flex-row justify-between items-end rounded-xl p-6 min-h-[200px] hidden md:flex">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-xs md:text-4xl text-gray-200 block">
                mario@info.com
              </span>
              <span className="text-xs md:text-4xl text-gray-200 block">
                (343) 556 334 334
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-200 mt-2 block text-right">
              ADVENTURE
              <br />
              TRIP
            </span>
          </div>
        </div>
      </span>
    </section>
  );
};

export default Hero;
