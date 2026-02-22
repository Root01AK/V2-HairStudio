"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
    { id: 1, src: "/1.png", type: "image", category: "Hair Replacement" },
    { id: 2, src: "/2.jpeg", type: "image", category: "Bridal Studio" },
    { id: 3, src: "/3.mp4", type: "video", category: "Hair Patch for Men" },
    { id: 4, src: "/4.mp4", type: "video", category: "Haircare & Skin Care" },
    { id: 5, src: "/5.png", type: "image", category: "Studio & Interiors" },
    { id: 6, src: "/6.jpeg", type: "image", category: "Hair Replacement" },
    { id: 7, src: "/7.mp4", type: "video", category: "Bridal Studio" },
    { id: 8, src: "/8.jpeg", type: "image", category: "Studio & Interiors" },
    { id: 9, src: "/9.png", type: "image", category: "Hair Replacement" },
];

const categories = [
    "All",
    "Hair Replacement",
    "Hair Patch for Men",
    "Bridal Studio",
    "Haircare & Skin Care",
    "Studio & Interiors",
];

const sizePattern = ["large", "medium", "small", "medium", "large"];

export default function GalleryChild() {
    const [active, setActive] = useState("All");
    const [items, setItems] = useState([]);
    const [lightbox, setLightbox] = useState(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const shuffled = [...galleryData]
            .sort(() => Math.random() - 0.5)
            .map((item, i) => ({
                ...item,
                size: sizePattern[i % sizePattern.length],
            }));
        setItems(shuffled);
    }, []);

    const filtered =
        active === "All"
            ? items
            : items.filter((i) => i.category === active);

    // Scroll reveal
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 60,
                stagger: 0.12,
                duration: 1.1,
                ease: "power3.out",
            });
        }, gridRef);
        return () => ctx.revert();
    }, [filtered]);

    return (
        <>
            <section className="gallery-child dark">
                {/* CATEGORIES */}
                <div className="gallery-categories">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`category-pill ${active === cat ? "active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div ref={gridRef} className="gallery-grid">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className={`gallery-item ${item.size}`}
                            onClick={() => setLightbox(item)}
                        >
                            {item.type === "image" ? (
                                <img src={item.src} alt="" />
                            ) : (
                                <video src={item.src} muted autoPlay loop playsInline />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <div className="lightbox-content">
                        {lightbox.type === "image" ? (
                            <img src={lightbox.src} alt="" />
                        ) : (
                            <video src={lightbox.src} controls autoPlay />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
