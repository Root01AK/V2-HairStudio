import React from 'react';
import Script from 'next/script';
import { useEffect } from "react";
import HomeBridal from "../components/HomeBridal"

export default function TrustSection() {
    useEffect(() => {
        import("gsap").then(({ gsap }) => {
            gsap.from("#trust-content-left > *", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.9,
                ease: "power3.out",
            });
        });
    }, []);

    return (
        <>
        <section id="trust-wrapper">
            <div id="trust-container">

                {/* LEFT SIDE: Custom Trust Messaging */}
                <div id="trust-content-left">
                    <div id="trust-badge-pill">
                        <div className="avatar-group">
                            <img src="https://i.pravatar.cc/100?u=1" alt="User" />
                            <img src="https://i.pravatar.cc/100?u=2" alt="User" />
                            <img src="https://i.pravatar.cc/100?u=3" alt="User" />
                        </div>
                        <span>Trusted by 100,000+ professionals globally.</span>
                    </div>

                    <h1 id="trust-title">Trusted by Thousands. <br /> Chosen for Results.</h1>

                    {/* Static Google Badge for faster Loading Perception */}
                    <div id="google-rating-card">
                        <div id="g-icon-box">
                            <img src="/g-logo.png" alt="Google" />
                            <small>Google reviews</small>
                        </div>
                        <div id="rating-stars-val">
                            <div id="star-row">★★★★★</div>
                            <div id="score-text">
                                <strong>4.8</strong>
                                <span>from 300+ reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Live Automatic Scrolling Reviews */}
                <div id="trust-reviews-right">
                    <div className="reviews-scroll-wrapper">
                        <div className="elfsight-app-24759766-707a-4aa6-97fc-fa8084ed24f4" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </div>
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="afterInteractive"
            />
        </section>
        <HomeBridal />
        </>

    );
}