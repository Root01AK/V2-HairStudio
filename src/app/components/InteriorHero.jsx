"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import StatsSection from "../components/StatsSection"
import "swiper/css";
import "swiper/css/effect-fade";

export default function InteriorHero() {
  return (
    <section className="interior-hero">

      <div className="hero-top">
        <h1 className="hero-heading">
          CONFIDENCE, REDEFINED  <br />
          CHENNAI’S TRUSTED HAIR STUDIO
        </h1>

        <div className="hero-bottom-row">
          <div className="since">SINCE</div>
          <div className="year">2009</div>

          <p className="hero-desc">
            At V2 Studio, transformation is more than appearance — it’s about restoring self-assurance and 
            celebrating your individuality.
          </p>
        </div>
      </div>

      <div className="hero-image-wrapper">
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
