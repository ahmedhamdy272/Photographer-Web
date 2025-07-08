"use client";
import React, { useEffect, useRef } from "react";
import ChromaGrid from "./ChromaGric";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section contact-section min-h-screen  relative overflow-hidden fade-slide-contact"
    >
      {/* Animated blurred background shapes */}
      <span className="absolute top-10 left-10 w-40 h-40 bg-pink-200 opacity-40 rounded-3xl blur-2xl animate-float-slow z-0" />
      <span className="absolute bottom-16 right-24 w-32 h-32 bg-blue-200 opacity-30 rounded-full blur-2xl animate-float-medium z-0" />
      <span className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-100 opacity-30 rounded-2xl blur-2xl animate-float-fast z-0" />
      <section
        id="product"
        className="w-full h-[100vh] bg-gradient-to-br from-[#f2efeb] via-[#e0e7ff] to-[#fce7f3] px-0 md:px-0 py-0 flex flex-col gap-0 relative z-10"
      >
        {/* Header */}
        <div className="w-full flex-none py-8 px-8">
          <h2 className="contact-animate text-4xl md:text-5xl font-bold text-black mb-2">
            Contact Us
          </h2>
          <p className="contact-animate text-lg md:text-xl text-black/60">
            We&apos;d love to hear from you. Let&apos;s make something amazing
            together!
          </p>
        </div>
        {/* Two boxes under header */}
        <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-4 items-stretch gap-0 h-0 relative">
          {/* Left: Contact Form Box (25%) */}
          <div className="contact-animate col-span-1 flex flex-col bg-white/90 rounded-2xl p-8 shadow-2xl border border-gray-200 h-full justify-center transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 z-10">
            <form className="contact-animate flex flex-col gap-4 w-full">
              <label htmlFor="contact-name" className="text-base text-black">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="bg-transparent outline-none border-b border-black/60 text-lg text-black placeholder:text-gray-400 py-2 mb-2 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
              />
              <label htmlFor="contact-email" className="text-base text-black">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none border-b border-black/60 text-lg text-black placeholder:text-gray-400 py-2 mb-2 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
              />
              <label htmlFor="contact-message" className="text-base text-black">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Type your message..."
                rows={4}
                className="bg-transparent outline-none border-b border-black/60 text-lg text-black placeholder:text-gray-400 py-2 mb-2 transition-all duration-300 focus:border-blue-400 focus:shadow-lg resize-none"
              />
              <button
                type="submit"
                className="mt-4 text-lg text-white rounded-full px-6 py-2 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(120deg, #000 0%, #fff 30%, #a1c4fd 55%, #fbc2eb 80%, #000 100%)",
                  color: "#181824",
                  border: "none",
                }}
              >
                Get in Touch
              </button>
            </form>
          </div>
          
          {/* Right: ChromeGrid Box (75%) */}
          <div className="contact-animate col-span-3 hidden md:flex flex-col bg-white/90 rounded-2xl p-8 shadow-2xl border border-gray-200 h-full justify-center items-center z-10">
            <ChromaGrid className="w-full h-full grid grid-rows-2 contact-animate" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
