import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useSectionAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Blur effect: add blur to all except the active section
    const allSections = gsap.utils.toArray<HTMLElement>(".section");
    allSections.forEach((section, i, sections) => {
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
    allSections.forEach((s, idx) => {
      if (idx !== 0) s.classList.add("blurred-section");
      else s.classList.remove("blurred-section");
    });

    // HERO SECTION: Only animate each character in MARIO from bottom-right
    const hero = document.querySelector(".hero-section");
    if (hero) {
      gsap.fromTo(
        hero.querySelectorAll(".hero-char"),
        { opacity: 0, x: 80, y: 120, rotate: 30, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 2,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: hero,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // Floating images: smooth, continuous floating effect
      gsap.to(hero.querySelectorAll(".hero-float"), {
        y: 30,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // GALLERY SECTION
    const gallery = document.querySelector(".gallery-section");
    if (gallery) {
      gsap.fromTo(
        gallery.querySelectorAll(".gallery-char"),
        { opacity: 0, x: 80, y: 120, rotate: 30, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gallery,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CANDID SHOTS SECTION
    const candid = document.querySelector(".candid-shots-section");
    if (candid) {
      // Animate each character in headings
      gsap.fromTo(
        candid.querySelectorAll(".candid-char"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: candid,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        candid.querySelectorAll(".candid-image"),
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: candid,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CANDID SHOTS LOWER ROW: Animate all .candid-lower-char elements from top-right, sequentially
    const candidLower = document.querySelector(".candid-lower-row-section");
    if (candidLower) {
      gsap.fromTo(
        candidLower.querySelectorAll(".candid-lower-char"),
        { opacity: 0, x: -80, y: 120, rotate: -40, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 2,
          stagger: 0.016,
          ease: "power3.out",
          scrollTrigger: {
            trigger: candidLower,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CONTACT SECTION
    const contact = document.querySelector(".contact-section");
    if (contact) {
      gsap.fromTo(
        contact.querySelectorAll(".contact-animate"),
        { opacity: 0, x: -80, y: 120, rotate: -40, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.6,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contact,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // FOOTER SECTION: Animate all .footer-char elements from bottom-left, sequentially
    const footer = document.querySelector(".footer-section");
    if (footer) {
      gsap.fromTo(
        footer.querySelectorAll(".footer-char"),
        { opacity: 0, x: -80, y: 120, rotate: 20, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.6,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // ABOUT SECTION: Animate all .about-char elements from top-right, sequentially
    const about = document.querySelector(".about-section");
    if (about) {
      gsap.fromTo(
        about.querySelectorAll(".about-char"),
        { opacity: 0, x: -80, y: -120, rotate: -20, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.016,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // Animate left background image from left to right
      gsap.fromTo(
        about.querySelectorAll(".about-bg-left"),
        { opacity: 0, x: -120, y: 120 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 3,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // Animate right background image from right to left
      gsap.fromTo(
        about.querySelectorAll(".about-bg-right"),
        { opacity: 0, x: 120, y: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 3,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: about,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
