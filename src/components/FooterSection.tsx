"use client";
import React from "react";

// Utility to split text into spans for char animation in footer
function splitFooterTextToSpans() {
  // M, A (italic), R, I, O
  return [
    <span key="M" className="footer-char inline-block">
      M
    </span>,
    <span
      key="A"
      className="footer-char inline-block italic font-serif md:text-[30vw]"
    >
      A
    </span>,
    <span key="R" className="footer-char inline-block">
      R
    </span>,
    <span key="I" className="footer-char inline-block">
      I
    </span>,
    <span key="O" className="footer-char inline-block">
      O
    </span>,
  ];
}

const FooterSection: React.FC = () => {
  return (
    <div className="section footer-section">
      <footer className="w-full h-[100vh] md:min-h-[80vh] bg-black text-white px-4 md:px-12 pt-12 pb-6 flex flex-col gap-8">
        <div className="w-full flex flex-col gap-8">
          {/* Top Row: Main Info */}
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
            {/* Left: Logo and Text */}
            <div className="flex flex-col gap-2 min-w-[120px]">
              <span className="footer-char">
                <a
                  href="#"
                  className="bg-white text-black rounded-lg w-12 h-12 flex items-center justify-center text-3xl font-bold mb-2"
                >
                  M
                </a>
              </span>
              <span className="footer-char text-xl text-white/80">
                Let&apos;s Create A Custom Photo Session Just For You :) !
              </span>
            </div>
            {/* Center: Address */}
            <div className="flex flex-col gap-4 min-w-[220px]">
              <span className="footer-char">
                <div>
                  <div className="text-xs text-white/50 mb-1">Address</div>
                  <div className="text-lg font-medium">
                    1901 Thornridge Cir. Shiloh,
                    <br />
                    Hawaii 81063
                  </div>
                </div>
              </span>
              <span className="footer-char">
                <div>
                  <div className="text-xs text-white/50 mb-1">Address</div>
                  <div className="text-lg font-medium">
                    1901 Thornridge Cir. Shiloh,
                    <br />
                    Hawaii 81063
                  </div>
                </div>
              </span>
            </div>
            {/* Right: Phone and Email */}
            <div className="flex flex-col gap-4 min-w-[180px]">
              <span className="footer-char">
                <div>
                  <div className="text-xs text-white/50 mb-1">Phone</div>
                  <div className="text-lg font-medium">(+20) 103-267-9917</div>
                </div>
              </span>
              <span className="footer-char">
                <div>
                  <div className="text-xs text-white/50 mb-1">Email</div>
                  <div className="text-lg font-medium">
                    ahmedhamdyabdlaty@gmail.com
                  </div>
                </div>
              </span>
            </div>
          </div>
          {/* Bottom Row: Links and Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full mt-8">
            {/* Left: Links */}
            <span className="footer-char hidden md:flex flex-col gap-1 text-xs md:text-sm">
              <a href="#" className="hover:underline">
                Data Privacy
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Impressum
              </a>
              <a href="#" className="hover:underline">
                Product
              </a>
            </span>
            {/* Center: Copyright */}
            <span className="footer-char text-xs md:text-sm text-white/60 text-center">
              Cherish Your Special Day With Stunning,
              <br />
              Candid Shots That Capture The Love And Joy.
              <br />@ 2025 All Rights Reserved
            </span>
            {/* Right: Social Icons */}
            <span className="footer-char flex flex-row gap-3 text-xl">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dev-ahmed-hamdi/"
                target="_blank"
                className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ah_med.ham_dy?igsh=MWE4cnZ4NzQwbnk2MQ=="
                target="_blank"
                className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Twitter (X) */}
              <a
                href="https://x.com/AhmedHa87740668?t=aCCFApMn8hnHGt7cR1gc-g&s=09"
                target="_blank"
                className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Twitter X"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.162 5.656c-.793.352-1.646.59-2.542.697a4.48 4.48 0 0 0 1.962-2.475 8.94 8.94 0 0 1-2.828 1.082 4.478 4.478 0 0 0-7.632 4.08A12.72 12.72 0 0 1 3.112 4.6a4.478 4.478 0 0 0 1.386 5.972 4.46 4.46 0 0 1-2.03-.561v.057a4.478 4.478 0 0 0 3.59 4.389 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.18 3.11A8.978 8.978 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583a9.14 9.14 0 0 0 2.24-2.333z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16TtuVmdTb/"
                target="_blank"
                className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
            </span>
          </div>
          <h1 className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[27vw] font-bold text-white/90 select-none pointer-events-none whitespace-nowrap z-0">
            {splitFooterTextToSpans()}
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
