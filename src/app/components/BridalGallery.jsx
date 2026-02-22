"use client";
import { motion } from "framer-motion";
import BridalTrialConsultation from "../components/BridalTrialConsultation"

const galleryItems = [
  { id: 1, title: "Classic Monos", type: "landscape", img: "/bridal/27.jpg" },
  { id: 2, title: "Modern Corridor", type: "portrait", img: "/bridal/11.jpeg" },
  { id: 3, title: "The Gathering", type: "small", img: "/bridal/21.jpg" },
  { id: 4, title: "Hall of Frame", type: "focal", img: "/bridal/29.jpg", desc: "A place where you can see and feel true art with a warm feeling." },
  { id: 5, title: "Abstract Space", type: "portrait", img: "/bridal/17.jpg" },
];

export default function ArtGallery() {
  return (
    <>
    <section className="bridalsec-gallery-artisan">
      <div className="bridalsec-gallery-header">
        <h2 className="bridalsec-gallery-main-title">
          A visual journey of artistry, elegance, and transformation.  
          <span> Where artistry meets beauty</span> — captured in every detail.
        </h2>
      </div>

      <div className="bridalsec-gallery-grid-container">
        {galleryItems.map((item) => (
          <motion.div 
            key={item.id}
            className={`bridalsec-gallery-item bridalsec-${item.type}`}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bridalsec-gallery-img-wrapper">
              <img src={item.img} alt={item.title} />
              {item.type === "focal" && (
                <div className="bridalsec-gallery-focal-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bridalsec-gallery-footer">
        <p>Step into a curated world of beauty and expression, where our gallery reflects the refined artistry, craftsmanship, 
          and creativity behind every V2 Studio transformation. Each image captures moments shaped by precision, passion, and an eye for timeless elegance.</p>
        <button className="bridalsec-gallery-more-btn">View Works</button>
      </div>
    </section>
    <BridalTrialConsultation />
    </>
  );
}