"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Clean up previous triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animate each section and handle blur
    gsap.utils
      .toArray<HTMLElement>(".section")
      .forEach((section, i, sections) => {
        const direction = i % 2 === 0 ? 1 : -1;
        // Parallax fade-in
        gsap.fromTo(
          section,
          { y: direction * 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        // Blur effect: add blur to all except the active section
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            sections.forEach((s) => s.classList.add("blurred-section"));
            section.classList.remove("blurred-section");
          },
          onEnterBack: () => {
            sections.forEach((s) => s.classList.add("blurred-section"));
            section.classList.remove("blurred-section");
          },
          onLeave: () => {
            section.classList.add("blurred-section");
          },
          onLeaveBack: () => {
            section.classList.add("blurred-section");
          },
        });
      });

    // Initially blur all except the first section
    const allSections = gsap.utils.toArray<HTMLElement>(".section");
    allSections.forEach((s, idx) => {
      if (idx !== 0) s.classList.add("blurred-section");
      else s.classList.remove("blurred-section");
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
