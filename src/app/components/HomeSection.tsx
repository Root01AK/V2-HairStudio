"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ResultImagesSection from "../components/ResultImagesSection"
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  { type: "image", src: "/1.png" },
  { type: "video", src: "/3.mp4" },
  { type: "image", src: "/1.png" },
];

export default function HomeCarousel() {
  return (
    <>
    <section className="home-carousel-section">
      <div className="home-carousel-container">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1200}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type === "image" ? (
                <img src={slide.src} alt="Home slide" />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
    <ResultImagesSection />
    </>
  );
}
