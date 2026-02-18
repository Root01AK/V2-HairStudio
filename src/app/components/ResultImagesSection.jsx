"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeServices from "../components/HomeServices"
gsap.registerPlugin(ScrollTrigger);

const rowOne = [
  { type: "image", src: "/results/1.jpg" },
  { type: "video", src: "/results/2.mp4" },
  { type: "image", src: "/results/3.jpg" },
  { type: "image", src: "/results/4.jpg" },
];

const rowTwo = [
  { type: "image", src: "/results/5.jpg" },
  { type: "video", src: "/results/6.mp4" },
  { type: "image", src: "/results/7.jpg" },
  { type: "image", src: "/results/8.jpg" },
];

export default function ResultImagesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

useEffect(() => {
  const isMobile = window.innerWidth <= 768;

  /* =========================
     MOBILE AUTO CAROUSEL
  ========================== */
  if (isMobile) {

    const tracks = document.querySelectorAll(".results-track");

    tracks.forEach((track) => {
      const cards = track.querySelectorAll(".results-card");
      if (!cards.length) return;

      const isReverse =
        track.closest(".results-row")?.classList.contains("reverse");

      const gap = 16;
      const cardWidth = cards[0].offsetWidth + gap;

      let index = isReverse ? cards.length - 1 : 0;
      let interval;

      if (isReverse) {
        track.scrollLeft = track.scrollWidth;
      }

      const startAutoSlide = () => {
        interval = setInterval(() => {
          index = isReverse ? index - 1 : index + 1;

          if (!isReverse && index >= cards.length) index = 0;
          if (isReverse && index < 0) index = cards.length - 1;

          track.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
          });
        }, 3000);
      };

      startAutoSlide();

      track.addEventListener("touchstart", () =>
        clearInterval(interval)
      );
      track.addEventListener("touchend", startAutoSlide);
    });

    return; // ✅ STOP here for mobile
  }

  /* =========================
     DESKTOP GSAP
  ========================== */

  const ctx = gsap.context(() => {

    gsap.fromTo(
      titleRef.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.to(rowOneRef.current, {
      x: "-20%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(rowTwoRef.current, {
      x: "20%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  }, sectionRef);

  return () => ctx.revert();

}, []);


return (
  <>
    <section ref={sectionRef} className="results-section">

      {/* HEADING */}
      <div className="results-header">
        <h2 ref={titleRef}>
          Real Hair Transformations.<br />
          Real Confidence Restored.
        </h2>

        <p className="results-sub">
          Discover authentic hair replacement results from clients who trusted V2 Hair Studio for natural-looking hair
          systems and expert care. Every transformation is crafted with precision, comfort, and attention to detail—designed
          not just to restore hair, but to rebuild confidence and self-assurance.
        </p>
      </div>

      {/* CAROUSEL ROW 1 */}
      <div className="results-row">
        <div className="results-track" ref={rowOneRef}>
          {rowOne.map((item, i) => (
            <div key={i} className="results-card">
              {item.type === "image" ? (
                <img src={item.src} alt="Result" />
              ) : (
                <video src={item.src} muted autoPlay loop playsInline />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL ROW 2 */}
      <div className="results-row reverse">
        <div className="results-track" ref={rowTwoRef}>
          {rowTwo.map((item, i) => (
            <div key={i} className="results-card">
              {item.type === "image" ? (
                <img src={item.src} alt="Result" />
              ) : (
                <video src={item.src} muted autoPlay loop playsInline />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL MICRO COPY */}
      <div className="results-testimonial">
        <p>
          I didn’t just regain my hair — I regained my confidence.”
        </p>
        <span>— Verified Client, Chennai</span>
      </div>

    </section>
    <HomeServices />
  </>
);
}
