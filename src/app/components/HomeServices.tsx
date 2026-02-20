"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurProcessSection from "../components/OurProcessSection";

gsap.registerPlugin(ScrollTrigger);

interface ServiceContent {
  id: string;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaUrl: string;
}

const servicesData: ServiceContent[] = [
  {
    id: "couple",
    title: "Hair Systems",
    description:
      "Natural-looking hair systems designed for comfort, durability, and seamless blending. Customized to match your hair type, lifestyle, and scalp needs.",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1516584566106-42fd88c421b9?q=80&w=1200",
  },
  {
    id: "group",
    title: "Hair Patch for Men",
    description:
      "Non-surgical hair replacement solutions for men seeking instant transformation with zero downtime and a natural finish.",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
  },
  {
    id: "career",
    title: "Bridal Studio",
    description:
      "Complete bridal beauty solutions including hairstyling, makeup, skin prep, and hair enhancements—crafted to make your special day unforgettable.",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "individual",
    title: "Haircare & Skincare",
    description:
      "Professional hair and skin treatments focused on repair, nourishment, and long-term health using advanced techniques and premium products.",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceContent>(
    servicesData[0]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = servicesData.length;
      const scrollLength = window.innerHeight * sections;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollLength}`,
        pin: true,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * sections);
          const safeIndex = Math.min(index, sections - 1);
          setActiveService(servicesData[safeIndex]);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <div id="container" ref={containerRef}>
        {/* LEFT COLUMN */}
        <div id="left-column">
          <span id="label">Our Service</span>
          <h1 id="main-heading">
            Advanced<span className="highlight-text">Hair & Scalp</span>
            Solutions Tailored for You
          </h1>

          <p id="intro-text">
            At V2 Hair Studio, we offer personalized hair replacement,
            haircare, and bridal beauty services designed to deliver natural
            results and lasting comfort.
          </p>

          <ul id="service-list">
            {servicesData.map((service) => (
              <li
                key={service.id}
                data-id={service.id}
                className={`service-item ${activeService.id === service.id
                    ? "active-item"
                    : "inactive-item"
                  }`}
                onClick={() => setActiveService(service)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN (PINNED) */}
        <div id="right-column">
          <div id="media-container">
            {activeService.mediaType === "image" ? (
              <img
                src={activeService.mediaUrl}
                alt={activeService.title}
              />
            ) : (
              <video
                src={activeService.mediaUrl}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>

          <div id="content-details">
            <h2>{activeService.title}</h2>
            <p>{activeService.description}</p>

            <div id="button-group">
              <button id="btn-details">Explore</button>
              <button id="btn-appointment">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>

      <OurProcessSection />
    </>
  );
}
