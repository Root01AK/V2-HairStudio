"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HairReplacementGallery from "../components/HairReplacementGallery";
import { HiCheckCircle } from "react-icons/hi";

const infoCards = [
  {
    title: "Skin Hair Systems",
    points: [
      "Ultra-thin base",
      "Seamless scalp appearance",
      "Ideal for clean hairline styles",
      "Very natural finish"
    ]
  },
  {
    title: "Full Lace Hair Systems",
    points: [
      "Lightweight & breathable",
      "Allows full scalp airflow",
      "Can style in multiple directions",
      "Very flexible"
    ]
  },
  {
    title: "Lace Front Hair Systems",
    points: [
      "Natural front hairline",
      "Stronger base at back",
      "Balanced durability + realism",
    ]
  },
  {
    title: "Conventional Hair Systems",
    points: [
      "Durable base",
      "Cost-effective option",
      "Budget-friendly",
      "Good for moderate hair loss"
    ]
  }
];

// Reusable hook + wrapper for scroll-triggered reveal
function RevealOnScroll({ children, delay = 0, from = "bottom", className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -80px 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: from === "bottom" ? 50 : from === "top" ? -50 : 0,
      x: from === "left" ? -60 : from === "right" ? 60 : 0,
      scale: from === "scale" ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // custom cubic-bezier for luxury feel
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
function StaggerContainer({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Card with hover lift + stagger entry
function AnimatedCard({ card, i }) {
  return (
    <motion.div
      className="hairpthfm-info-card"
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <h3>{card.title}</h3>
      <ul className="card-points">
        {card.points.map((point, j) => (
          <motion.li
            key={j}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: j * 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <HiCheckCircle className="bullet-icon" />
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Split block with image reveal using clip-path wipe
function AnimatedSplitBlock({ block, reverse }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      className={`hairpthfm-split-block${reverse ? " hairpthfm-reverse" : ""}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Text side */}
      <motion.div
        className="hairpthfm-text-side"
        variants={{
          hidden: { opacity: 0, x: reverse ? 60 : -60 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
          },
        }}
      >
        <motion.h2
          className="hairpthfm-block-title"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.15, ease: "easeOut" },
            },
          }}
        >
          {block.title}
        </motion.h2>

        {block.features.map((f, i) => (
          <motion.div
            key={i}
            className="hairpthfm-feature"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" },
              },
            }}
          >
            {f}
          </motion.div>
        ))}

        <motion.button
          className="hairpthfm-book-btn"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
            },
          }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
        >
          {block.btnText}
        </motion.button>
      </motion.div>

      {/* Image side — clip-path wipe reveal */}
      <motion.div
        className="hairpthfm-image-side"
        variants={{
          hidden: {
            clipPath: reverse
              ? "inset(0 0 0 100%)"
              : "inset(0 100% 0 0)",
            opacity: 0,
          },
          visible: {
            clipPath: "inset(0 0% 0 0%)",
            opacity: 1,
            transition: { duration: 1.1, delay: 0.2, ease: [0.77, 0, 0.175, 1] },
          },
        }}
      >
        <img src="/1.png" alt="Service Detail" />
      </motion.div>
    </motion.section>
  );
}

// Block data
const blocks = [
  {
    title: "What Is a Hair Patch?",
    features: [
      <p>A hair patch is a non-surgical hair replacement solution designed to cover thinning or bald areas with natural-looking, customized hair systems.</p>,
      <div>
        <h5>Precisely measured</h5>
        <h5>Expertly color-matched</h5>
        <h5>Professionally bonded</h5>
        <h5>Styled to blend flawlessly with your existing hair</h5>
      </div>,
    ],
    btnText: "The result? A natural transformation — instantly.",
    reverse: false,
  },
  {
    title: "Who Typically Chooses a Hair Patch?",
    features: [
      <p>Men who value confidence, professionalism, and a well-groomed appearance often choose hair patch solutions.</p>,
      <div>
        <h5>Receding hairlines</h5>
        <h5>Patchy or uneven hair density</h5>
        <h5>Thinning crown areas</h5>
        <h5>Pattern baldness</h5>
      </div>,
    ],
    btnText: "Especially suited for professionals, entrepreneurs, and individuals who prefer a non-surgical, immediate transformation with natural-looking results.",
    reverse: true,
  },
];

export default function HairPatchServices() {
  return (
    <>
      <div className="hairpthfm-services-wrapper">

        {/* SECTION 1: TOP HEADER */}
        <RevealOnScroll from="bottom">
          <div className="hairpthfm-top-header">
            <h2 className="hairpthfm-section-title">
              Hair System Types We Offer in Chennai.
            </h2>
            <p className="hairpthfm-section-desc">
              Being a first-choice Hair studio within our sectors. Our process
              applies techniques from a variety of disciplines.
            </p>
          </div>
        </RevealOnScroll>

        {/* CARDS — staggered */}
        <StaggerContainer className="hairpthfm-card-grid">
          {infoCards.map((card, i) => (
            <AnimatedCard key={i} card={card} i={i} />
          ))}
        </StaggerContainer>

        {/* STATS LINE — character-by-character feel */}
        <RevealOnScroll from="bottom" delay={0.1}>
          <p className="hairpthfm-stats-line">
            8,000+ transformations. One standard — perfection.
          </p>
        </RevealOnScroll>

        {/* SECTION 2: ALTERNATING BLOCKS */}
        <div className="hairpthfm-content-blocks">
          {blocks.map((block, i) => (
            <AnimatedSplitBlock key={i} block={block} reverse={block.reverse} />
          ))}
        </div>

      </div>

      <HairReplacementGallery />
    </>
  );
}