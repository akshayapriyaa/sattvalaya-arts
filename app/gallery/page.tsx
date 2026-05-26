"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "yoga" | "veena" | "performance" | "students";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "all">;
  title: string;
  subtitle: string;
  src: string;
  size: "tall" | "wide" | "square" | "feature";
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  // ── YOGA ──
  { id: 1, category: "yoga", title: "Morning Asana", subtitle: "Sunrise practice", src: "/yoga-1.jpg", size: "feature", aspect: "3/4" },
  { id: 2, category: "yoga", title: "Warrior Flow", subtitle: "Vinyasa sequence", src: "/yoga-2.jpg", size: "square", aspect: "1/1" },
  { id: 3, category: "yoga", title: "Breath & Balance", subtitle: "Pranayama session", src: "/yoga-3.jpg", size: "tall", aspect: "2/3" },
  { id: 4, category: "yoga", title: "Hatha Harmony", subtitle: "Foundation class", src: "/yoga-4.jpg", size: "wide", aspect: "16/9" },
  { id: 5, category: "yoga", title: "Yin Stillness", subtitle: "Deep restoration", src: "/yoga-5.jpg", size: "square", aspect: "1/1" },
  { id: 6, category: "yoga", title: "Sacred Space", subtitle: "Studio atmosphere", src: "/yoga-6.jpg", size: "tall", aspect: "3/4" },
  { id: 7, category: "yoga", title: "Aerial Grace", subtitle: "Advanced posture", src: "/yoga-7.jpg", size: "wide", aspect: "4/3" },

  // ── VEENA ──
  { id: 8, category: "veena", title: "String & Soul", subtitle: "Classical performance", src: "/veena-1.jpg", size: "feature", aspect: "3/4" },
  { id: 9, category: "veena", title: "Resonance", subtitle: "Instrument close-up", src: "/veena-2.jpg", size: "square", aspect: "1/1" },
  { id: 10, category: "veena", title: "Raga at Dawn", subtitle: "Morning ragas", src: "/veena-3.jpg", size: "tall", aspect: "2/3" },
  { id: 11, category: "veena", title: "Fingertip Poetry", subtitle: "Technique detail", src: "/veena-4.jpg", size: "wide", aspect: "16/9" },
  { id: 12, category: "veena", title: "Stage Presence", subtitle: "Live recital", src: "/veena-5.jpg", size: "square", aspect: "4/3" },
  { id: 13, category: "veena", title: "Guru & Shishya", subtitle: "Teacher–student bond", src: "/veena-6.jpg", size: "tall", aspect: "3/4" },

  // ── PERFORMANCE ──
  { id: 14, category: "performance", title: "Inner Silence", subtitle: "Guided meditation", src: "/meditation-1.jpg", size: "feature", aspect: "3/4" },
  { id: 15, category: "performance", title: "Candlelit Sit", subtitle: "Evening practice", src: "/meditation-2.jpg", size: "wide", aspect: "16/9" },
  { id: 16, category: "performance", title: "Lotus Breath", subtitle: "Mindful awareness", src: "/meditation-3.jpg", size: "square", aspect: "1/1" },
  { id: 17, category: "performance", title: "Forest Ritual", subtitle: "Nature meditation", src: "/meditation-4.jpg", size: "tall", aspect: "2/3" },
  { id: 18, category: "performance", title: "Sacred Smoke", subtitle: "Incense ceremony", src: "/meditation-5.jpg", size: "square", aspect: "1/1" },

  // ── STUDENTS ──
  { id: 19, category: "students", title: "Annual Recital", subtitle: "Winter showcase", src: "/events-1.jpg", size: "feature", aspect: "16/9" },
  { id: 20, category: "students", title: "Retreat Gathering", subtitle: "Weekend immersion", src: "/events-2.jpg", size: "wide", aspect: "4/3" },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Yoga", value: "yoga" },
  { label: "Veena", value: "veena" },
  { label: "Performance", value: "performance" },
  { label: "Students", value: "students" },
];

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl w-full bg-[#FCFBFA] rounded-[2rem] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <img src={item.src} alt={item.title} className="w-full max-h-[75vh] object-cover" />

        <div className="px-8 py-6">
          <p className="text-[11px] tracking-[0.25em] uppercase text-slate-400 mb-1">{item.subtitle}</p>
          <h3 className="font-serif text-3xl font-medium text-slate-900">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GalleryCard({ item, index, onClick }: { item: GalleryItem; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] bg-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#B4C4D9]/20 transition-shadow duration-500"
      style={{ aspectRatio: item.aspect, breakInside: "avoid", marginBottom: "16px" }}
    >
      <img src={item.src} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
        <p className="text-[10px] tracking-[0.28em] uppercase text-slate-300 mb-1">{item.subtitle}</p>
        <h3 className="font-serif text-2xl text-white">{item.title}</h3>
      </div>

      <div className="absolute top-4 right-4">
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-700 shadow-sm">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <style>{`
        .masonry-grid { columns: 1; column-gap: 16px; }
        @media (min-width: 640px)  { .masonry-grid { columns: 2; } }
        @media (min-width: 1024px) { .masonry-grid { columns: 3; } }
        @media (min-width: 1400px) { .masonry-grid { columns: 4; } }
        .masonry-item { break-inside: avoid; margin-bottom: 16px; }
      `}</style>

      <main className="min-h-screen bg-[#FCFBFA] px-6 py-24 md:px-12 md:py-32 selection:bg-[#B4C4D9]/30">
        
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full opacity-60 bg-[radial-gradient(circle,rgba(230,235,245,0.6)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-32 -left-28 h-[500px] w-[500px] rounded-full opacity-60 bg-[radial-gradient(circle,rgba(250,240,235,0.6)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
              <span className="h-px w-12 bg-slate-200" /> Sound · Stillness · Story <span className="h-px w-12 bg-slate-200" />
            </div>
            <h1 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-6xl">
              Our <span className="font-serif italic text-slate-500 font-light">Gallery</span>
            </h1>
            <p className="mx-auto max-w-lg text-lg leading-relaxed text-slate-600">
              A curated collection of moments from the atelier — where breath, strings, and silence converge into art.
            </p>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`relative px-6 py-3 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ease-out border ${
                    isActive
                      ? "bg-[#B4C4D9] text-white border-[#B4C4D9] shadow-lg shadow-[#B4C4D9]/20"
                      : "bg-white/70 text-slate-500 border-slate-200 hover:border-[#B4C4D9] hover:text-slate-900 backdrop-blur-sm"
                  }`}
                >
                  {f.label}
                  {f.value !== "all" && (
                    <span className={`ml-2 text-[10px] opacity-80 ${isActive ? "text-white" : "text-slate-400"}`}>
                      {galleryItems.filter((i) => i.category === f.value).length}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="popLayout">
            <div className="masonry-grid">
              {filtered.map((item, index) => (
                <div key={item.id} className="masonry-item">
                  <GalleryCard item={item} index={index} onClick={() => setLightboxItem(item)} />
                </div>
              ))}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-32 text-center text-slate-400">
              <p className="text-3xl font-medium text-slate-500">Nothing here yet.</p>
              <p className="mt-4 text-sm">Check back soon for new moments.</p>
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      </AnimatePresence>
    </>
  );
}