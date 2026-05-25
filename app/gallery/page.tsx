"use client";

import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
type Category = "all" | "yoga" | "veena" | "meditation" | "events";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "all">;
  title: string;
  subtitle: string;
  // Unsplash images — free to use, relevant to each theme
  src: string;
  // Controls masonry visual weight: "tall" | "wide" | "square" | "feature"
  size: "tall" | "wide" | "square" | "feature";
  // Used as a CSS aspect-ratio value
  aspect: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY DATA
// Each image uses a real Unsplash photo URL.
// Replace any src with your own hosted images when deploying.
// ─────────────────────────────────────────────────────────────────────────────
const galleryItems: GalleryItem[] = [
  // ── YOGA ──
  {
    id: 1,
    category: "yoga",
    title: "Morning Asana",
    subtitle: "Sunrise practice",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    size: "feature",
    aspect: "3/4",
  },
  {
    id: 2,
    category: "yoga",
    title: "Warrior Flow",
    subtitle: "Vinyasa sequence",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },
  {
    id: 3,
    category: "yoga",
    title: "Breath & Balance",
    subtitle: "Pranayama session",
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    size: "tall",
    aspect: "2/3",
  },
  {
    id: 4,
    category: "yoga",
    title: "Hatha Harmony",
    subtitle: "Foundation class",
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    size: "wide",
    aspect: "16/9",
  },
  {
    id: 5,
    category: "yoga",
    title: "Yin Stillness",
    subtitle: "Deep restoration",
    src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },
  {
    id: 6,
    category: "yoga",
    title: "Sacred Space",
    subtitle: "Studio atmosphere",
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    size: "tall",
    aspect: "3/4",
  },
  {
    id: 7,
    category: "yoga",
    title: "Aerial Grace",
    subtitle: "Advanced posture",
    src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
    size: "wide",
    aspect: "4/3",
  },

  // ── VEENA ──
  {
    id: 8,
    category: "veena",
    title: "String & Soul",
    subtitle: "Classical performance",
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    size: "feature",
    aspect: "3/4",
  },
  {
    id: 9,
    category: "veena",
    title: "Resonance",
    subtitle: "Instrument close-up",
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },
  {
    id: 10,
    category: "veena",
    title: "Raga at Dawn",
    subtitle: "Morning ragas",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    size: "tall",
    aspect: "2/3",
  },
  {
    id: 11,
    category: "veena",
    title: "Fingertip Poetry",
    subtitle: "Technique detail",
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    size: "wide",
    aspect: "16/9",
  },
  {
    id: 12,
    category: "veena",
    title: "Stage Presence",
    subtitle: "Live recital",
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80",
    size: "square",
    aspect: "4/3",
  },
  {
    id: 13,
    category: "veena",
    title: "Guru & Shishya",
    subtitle: "Teacher–student bond",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    size: "tall",
    aspect: "3/4",
  },

  // ── MEDITATION ──
  {
    id: 14,
    category: "meditation",
    title: "Inner Silence",
    subtitle: "Guided meditation",
    src: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80",
    size: "feature",
    aspect: "3/4",
  },
  {
    id: 15,
    category: "meditation",
    title: "Candlelit Sit",
    subtitle: "Evening practice",
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80",
    size: "wide",
    aspect: "16/9",
  },
  {
    id: 16,
    category: "meditation",
    title: "Lotus Breath",
    subtitle: "Mindful awareness",
    src: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },
  {
    id: 17,
    category: "meditation",
    title: "Forest Ritual",
    subtitle: "Nature meditation",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    size: "tall",
    aspect: "2/3",
  },
  {
    id: 18,
    category: "meditation",
    title: "Sacred Smoke",
    subtitle: "Incense ceremony",
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },

  // ── EVENTS ──
  {
    id: 19,
    category: "events",
    title: "Annual Recital",
    subtitle: "Winter showcase",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    size: "feature",
    aspect: "16/9",
  },
  {
    id: 20,
    category: "events",
    title: "Retreat Gathering",
    subtitle: "Weekend immersion",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    size: "wide",
    aspect: "4/3",
  },
  {
    id: 21,
    category: "events",
    title: "Community Circle",
    subtitle: "Group session",
    src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&q=80",
    size: "square",
    aspect: "1/1",
  },
  {
    id: 22,
    category: "events",
    title: "Open House",
    subtitle: "Studio showcase",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    size: "tall",
    aspect: "3/4",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FILTER BUTTON DATA
// ─────────────────────────────────────────────────────────────────────────────
const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Yoga", value: "yoga" },
  { label: "Veena", value: "veena" },
  { label: "Meditation", value: "meditation" },
  { label: "Events", value: "events" },
];

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX COMPONENT
// Full-screen overlay shown when a gallery card is clicked.
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl w-full bg-[#FAF8F4] rounded-[32px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm
                     flex items-center justify-center text-[#2E2218] hover:bg-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Image */}
        <img
          src={item.src}
          alt={item.title}
          className="w-full max-h-[70vh] object-cover"
        />

        {/* Caption */}
        <div className="px-7 py-5">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#9B8EA6] mb-1">{item.subtitle}</p>
          <h3
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-[26px] font-light text-[#2E2218]"
          >
            {item.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY CARD COMPONENT
// Individual masonry card with hover zoom, overlay, and click-to-lightbox.
// ─────────────────────────────────────────────────────────────────────────────
function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay: (index % 8) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-[#EDE6DA]
                 shadow-[0_4px_20px_rgba(100,80,60,0.08)]
                 hover:shadow-[0_16px_48px_rgba(100,80,60,0.16)]
                 transition-shadow duration-500"
      style={{ aspectRatio: item.aspect, breakInside: "avoid", marginBottom: "16px" }}
    >
      {/* Photo */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out
                   group-hover:scale-[1.06]"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgba(30,20,12,0.72)] via-transparent to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"
      />

      {/* Card caption — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-400 ease-out">
        <p className="text-[10px] tracking-[0.28em] uppercase text-white/70 mb-1">{item.subtitle}</p>
        <h3
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className="text-[20px] font-light leading-tight text-white"
        >
          {item.title}
        </h3>
      </div>

      {/* Category pill — always visible, top-right */}
      <div className="absolute top-3.5 right-3.5">
        <span className="text-[9px] font-medium tracking-[0.22em] uppercase
                         px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[#6B5344]">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE: GalleryPage
// Pinterest-style masonry layout using CSS columns.
// Filter bar + animated card grid + lightbox overlay.
// ─────────────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filter items based on active category
  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* ── Google Fonts injection (add to _document or layout in prod) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .masonry-grid {
          columns: 1;
          column-gap: 16px;
        }
        @media (min-width: 640px)  { .masonry-grid { columns: 2; } }
        @media (min-width: 1024px) { .masonry-grid { columns: 3; } }
        @media (min-width: 1400px) { .masonry-grid { columns: 4; } }

        .masonry-item { break-inside: avoid; margin-bottom: 16px; }
      `}</style>

      <main
        className="min-h-screen bg-[#FAF8F4] px-5 py-16 md:px-10 md:py-24"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {/* ── Ambient decorative orbs ── */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, #EAE6F0 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-32 -left-28 h-[440px] w-[440px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, #F2E8E4 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px]">

          {/* ─────────────────────────────────────────────────────────────────
              PAGE HEADER — eyebrow, title, subtitle
          ───────────────────────────────────────────────────────────────── */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-3 text-[11px] tracking-[0.32em] uppercase text-[#9B8EA6]">
              <span className="h-px w-10 bg-[#D4A5A0]" />
              Sound · Stillness · Story
              <span className="h-px w-10 bg-[#D4A5A0]" />
            </div>

            {/* Main heading */}
            <h1
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="mb-4 text-[52px] font-light leading-[1.1] tracking-[-0.015em] text-[#2E2218]
                         sm:text-[68px] md:text-[84px]"
            >
              Our <em className="not-italic text-[#D4A5A0]">Gallery</em>
            </h1>

            <p className="mx-auto max-w-[480px] text-[15px] font-light leading-[1.8] text-[#6B5B4E]">
              A curated collection of moments from the atelier — where breath, strings, and silence converge into art.
            </p>
          </motion.header>

          {/* ─────────────────────────────────────────────────────────────────
              FILTER BAR — category pill buttons with animated active underline
          ───────────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`relative px-6 py-2.5 rounded-full text-[12px] font-medium tracking-[0.18em] uppercase
                               transition-all duration-300 ease-out border
                               ${
                                 isActive
                                   ? "bg-[#2E2218] text-[#FAF8F4] border-[#2E2218] shadow-[0_4px_16px_rgba(46,34,24,0.22)]"
                                   : "bg-white/70 text-[#6B5B4E] border-[rgba(180,160,148,0.3)] hover:border-[#D4A5A0] hover:text-[#2E2218] backdrop-blur-sm"
                               }`}
                >
                  {f.label}
                  {/* Animated count badge */}
                  {f.value !== "all" && (
                    <span
                      className={`ml-2 text-[10px] opacity-60 ${isActive ? "text-white/70" : "text-[#9B8EA6]"}`}
                    >
                      {galleryItems.filter((i) => i.category === f.value).length}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────────
              MASONRY GRID — CSS columns-based Pinterest layout.
              AnimatePresence handles card enter/exit when filter changes.
          ───────────────────────────────────────────────────────────────── */}
          <AnimatePresence mode="popLayout">
            <div className="masonry-grid">
              {filtered.map((item, index) => (
                <div key={item.id} className="masonry-item">
                  <GalleryCard
                    item={item}
                    index={index}
                    onClick={() => setLightboxItem(item)}
                  />
                </div>
              ))}
            </div>
          </AnimatePresence>

          {/* ─────────────────────────────────────────────────────────────────
              EMPTY STATE — shown if filter returns no results
          ───────────────────────────────────────────────────────────────── */}
          {filtered.length === 0 && (
            <div className="py-32 text-center text-[#9B8EA6]">
              <p
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-[32px] font-light"
              >
                Nothing here yet.
              </p>
              <p className="mt-2 text-[14px]">Check back soon for new moments.</p>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────
              FOOTER TAGLINE
          ───────────────────────────────────────────────────────────────── */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-24 flex flex-col items-center gap-3 text-center"
          >
            {/* Mandala motif */}
            <svg className="h-12 w-12 opacity-20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="32" cy="32" r="30" stroke="#9B8EA6" strokeWidth="0.8" />
              <circle cx="32" cy="32" r="20" stroke="#9B8EA6" strokeWidth="0.8" />
              <circle cx="32" cy="32" r="10" stroke="#9B8EA6" strokeWidth="0.8" />
              <line x1="32" y1="2" x2="32" y2="62" stroke="#9B8EA6" strokeWidth="0.6" />
              <line x1="2" y1="32" x2="62" y2="32" stroke="#9B8EA6" strokeWidth="0.6" />
              <line x1="8" y1="8" x2="56" y2="56" stroke="#9B8EA6" strokeWidth="0.6" />
              <line x1="56" y1="8" x2="8" y2="56" stroke="#9B8EA6" strokeWidth="0.6" />
            </svg>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9B8EA6]">
              Srishti Yoga &amp; Veena Atelier
            </p>
            <p
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-[22px] font-light italic text-[#C9A898]"
            >
              "In every posture, a prayer. In every string, a story."
            </p>
          </motion.footer>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────────────
          LIGHTBOX OVERLAY — rendered outside the scroll container
      ───────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}