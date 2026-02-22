"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import StatsSection from "../components/StatsSection";
import "swiper/css";
import "swiper/css/effect-fade";

function useReveal(animFrom = { opacity: 0, transform: "translateY(60px)" }, delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const el = ref.current;
    if (!el) return;

    // Set hidden state immediately
    Object.assign(el.style, {
      ...animFrom,
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0) translateY(0) scale(1)";
        } else {
          Object.assign(el.style, animFrom);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function InteriorHero() {
  const headingRef   = useReveal({ opacity: 0, transform: "translateY(60px)" }, 0);
  const sinceRef     = useReveal({ opacity: 0, transform: "translateX(-50px)" }, 0.2);
  const yearRef      = useReveal({ opacity: 0, transform: "translateX(-70px)" }, 0.3);
  const descRef      = useReveal({ opacity: 0, transform: "translateY(30px)" }, 0.4);
  const imageWrapRef = useReveal({ opacity: 0, transform: "scale(0.92) translateY(40px)" }, 0.1);

  return (
    <section className="interior-hero">

      <div className="hero-top">
        <h1 ref={headingRef} className="hero-heading">
          <span>CONFIDENCE,REDEFINED</span><br />
          CHENNAI'S TRUSTED HAIR STUDIO
        </h1>

        <div className="hero-bottom-row">
          <div ref={sinceRef} className="since">SINCE</div>
          <div ref={yearRef} className="year">2009 EST.</div>

          <p ref={descRef} className="hero-desc">
            At V2 Hair Studio, transformation is more than appearance — it's about restoring self-assurance and
            celebrating your individuality.
          </p>
        </div>
      </div>

      <div ref={imageWrapRef} className="hero-image-wrapper">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1200}
        >
          <SwiperSlide>
            <img src="/2.jpeg" alt="Interior 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/1.png" alt="Interior 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.jpeg" alt="Interior 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <StatsSection />
    </section>
  );
}