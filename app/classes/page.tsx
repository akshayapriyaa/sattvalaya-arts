"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   FONT NOTE
   Add this to your root layout.tsx <head>:
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
───────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────────────────────────────────────────── */
interface ClassSession {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  duration: string;          // e.g. "60 min"
  members: number;           // enrolled count
  rating: number;            // 1–5, shown as filled dots
  // ── Image paths ──────────────────────────────────────────────────────────
  // `image`    → your production asset in /public  (swap imageSrc → image when ready)
  // `imageSrc` → live Unsplash fallback so the page works out-of-the-box
  // `imageAlt` → meaningful alt text for accessibility
  image: string;
  imageAlt: string;
  // Brand-toned gradient that bleeds from the photo into the white card body
  // Keeps yoga cards airy/pastel, veena cards warm/amber
  overlayGradient: string;
  // Accent colour for the level badge and hover CTA
  accent: string;
  accentText: string;
  accentHover: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — YOGA SESSIONS
   Palette: lavender · sage · blush — calming, airy, spiritual, pastel-toned
───────────────────────────────────────────────────────────────────────────── */
const yogaSessions: ClassSession[] = [
  {
    title: "Hatha Yoga",
    level: "Beginner",
    description:
      "Ground yourself in classical postures and conscious breath. A gentle, meditative foundation for lasting physical and mental balance.",
    duration: "60 min",
    members: 160,
    rating: 5,
    image: "/gallery-1.jpg",
    imageAlt: "Practitioner in a calm Hatha Yoga posture in a sun-lit studio",
    overlayGradient: "from-[#EAE6F0]/90 via-[#EAE6F0]/30 to-transparent",
    accent: "bg-[#EAE6F0]",
    accentText: "text-[#7A6A9A]",
    accentHover: "hover:bg-[#9B8EA6] hover:border-[#9B8EA6] hover:text-white",
  },
  {
    title: "Vinyasa Flow",
    level: "Intermediate",
    description:
      "Dynamic sequences where movement and breath interweave like music. Build strength, fluidity, and a deep sense of presence.",
    duration: "75 min",
    members: 120,
    rating: 5,
    image: "/Vinyasa yoga.jpg",
    imageAlt: "Practitioner mid-flow in a dynamic Vinyasa sequence outdoors",
    overlayGradient: "from-[#E4EDE6]/90 via-[#E4EDE6]/30 to-transparent",
    accent: "bg-[#E4EDE6]",
    accentText: "text-[#7A9A80]",
    accentHover: "hover:bg-[#7A9A80] hover:border-[#7A9A80] hover:text-white",
  },
  {
    title: "Yin Yoga",
    level: "Advanced",
    description:
      "Long-held, floor-based postures to release deep fascial tension. A quiet, introspective practice for profound restoration.",
    duration: "90 min",
    members: 100,
    rating: 5,
    image: "/Yin yoga.jpg",
    imageAlt: "Practitioner in a deep Yin Yoga seated floor posture",
    overlayGradient: "from-[#F2E8E4]/90 via-[#F2E8E4]/30 to-transparent",
    accent: "bg-[#F2E8E4]",
    accentText: "text-[#A87060]",
    accentHover: "hover:bg-[#C99080] hover:border-[#C99080] hover:text-white",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — VEENA SESSIONS
   Palette: warm sand · amber · dusky rose — artistic, classical, elegant
───────────────────────────────────────────────────────────────────────────── */
const veenaSessions: ClassSession[] = [
  {
    title: "Beginner Veena",
    level: "Beginner",
    description:
      "An intimate introduction to posture, tuning, and your first notes. Build a tender relationship with this sacred classical instrument.",
    duration: "60 min",
    members: 80,
    rating: 5,
    image: "/gallery-2.jpg",
    imageAlt: "Beginner student holding a Veena and learning foundational posture",
    overlayGradient: "from-[#EDE6DA]/90 via-[#EDE6DA]/30 to-transparent",
    accent: "bg-[#EDE6DA]",
    accentText: "text-[#8B6840]",
    accentHover: "hover:bg-[#A87848] hover:border-[#A87848] hover:text-white",
  },
  {
    title: "Classical Raagas",
    level: "Intermediate",
    description:
      "Explore the emotional universe of Indian classical music. Learn to embody each raaga's unique character, mood, and seasonal essence.",
    duration: "75 min",
    members: 65,
    rating: 5,
    image: "/gallery-3.jpg",
    imageAlt: "Intermediate Veena student performing a classical raaga",
    overlayGradient: "from-[#EAE6F0]/90 via-[#EAE6F0]/30 to-transparent",
    accent: "bg-[#EAE6F0]",
    accentText: "text-[#7A6A9A]",
    accentHover: "hover:bg-[#9B8EA6] hover:border-[#9B8EA6] hover:text-white",
  },
  {
    title: "Advanced Performance",
    level: "Advanced",
    description:
      "Refine bhava, phrasing, and stage presence. A mentor-led program for artists ready to share their voice with the world.",
    duration: "90 min",
    members: 40,
    rating: 5,
    image: "/gallery-6.jpg",
    imageAlt: "Advanced Veena performer in an expressive recital setting",
    overlayGradient: "from-[#F2E8E4]/90 via-[#F2E8E4]/30 to-transparent",
    accent: "bg-[#F2E8E4]",
    accentText: "text-[#A87060]",
    accentHover: "hover:bg-[#C99080] hover:border-[#C99080] hover:text-white",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER: RatingDots
   Five small filled/empty circles representing the session rating (1–5).
───────────────────────────────────────────────────────────────────────────── */
function RatingDots({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[5px]" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-[6px] h-[6px] rounded-full transition-colors ${
            i < rating ? "bg-[#D4A5A0]" : "bg-[rgba(180,160,148,0.25)]"
          }`}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER: LevelBadge
   Glassmorphism pill shown top-left of every image zone.
───────────────────────────────────────────────────────────────────────────── */
function LevelBadge({ level, accent, accentText }: {
  level: string;
  accent: string;
  accentText: string;
}) {
  return (
    <span
      className={`absolute top-4 left-4 z-10
                  text-[9px] font-semibold tracking-[0.24em] uppercase
                  px-3 py-1.5 rounded-full backdrop-blur-md
                  border border-white/40 shadow-sm
                  ${accent} ${accentText}`}
    >
      {level}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER: MetaRow
   Duration tag + member count shown below the image, above description.
───────────────────────────────────────────────────────────────────────────── */
function MetaRow({ duration, members }: { duration: string; members: number }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {/* Duration */}
      <span className="flex items-center gap-1.5 text-[11px] text-[#9B8EA6] font-light">
        {/* Clock icon */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {duration}
      </span>

      <span className="h-3 w-px bg-[rgba(155,142,166,0.3)]" aria-hidden="true" />

      {/* Members */}
      <span className="flex items-center gap-1.5 text-[11px] text-[#9B8EA6] font-light">
        {/* People icon */}
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" aria-hidden="true">
          <circle cx="5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M1 10c0-2 1.8-3.5 4-3.5S9 8 9 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="10" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
          <path d="M10 7c1.2.4 2 1.5 2 2.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        </svg>
        {members} members
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: SessionCard
   ┌─────────────────────────────────────────────┐
   │  IMAGE ZONE  (aspect-[4/3], overflow-hidden) │
   │  ├─ Photo with hover scale-[1.07]            │
   │  ├─ Permanent soft brand-toned gradient      │
   │  ├─ Hover dark vignette overlay              │
   │  ├─ Level badge (top-left, glassmorphism)    │
   │  └─ Duration tag (top-right, glassmorphism)  │
   ├─────────────────────────────────────────────┤
   │  CARD BODY                                   │
   │  ├─ Rating dots + meta row (duration/members)│
   │  ├─ Title  (Cormorant Garamond)             │
   │  ├─ Description  (Jost Light)               │
   │  └─ CTA button                              │
   └─────────────────────────────────────────────┘
───────────────────────────────────────────────────────────────────────────── */
function SessionCard({
  session,
  ctaColor,
  index,
}: {
  session: ClassSession;
  ctaColor: "yoga" | "veena";
  index: number;
}) {
  const { title, level, description, duration, members, rating,
          image, imageAlt, overlayGradient, accent, accentText, accentHover } = session;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white rounded-[28px] overflow-hidden
                 border border-[rgba(180,160,148,0.16)]
                 shadow-[0_2px_16px_rgba(100,80,60,0.06)]
                 hover:shadow-[0_20px_52px_rgba(100,80,60,0.13)]
                 transition-shadow duration-500 cursor-pointer"
    >

      {/* ══════════════════════════════════════════════════════════════════════
          IMAGE ZONE
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">

        {/* ── Photo ──
            Uses Next.js <Image> for automatic WebP conversion, lazy loading,
            and srcSet generation. `fill` + `sizes` replaces fixed width/height.
            PRODUCTION: change src from imageSrc → session.image once your
            assets are placed in /public/images/yoga/ and /public/images/veena/ */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out
                     group-hover:scale-[1.07]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAGElEQVQI12P4z8BQDwADhQGAWjR9awAAAABJRU5ErkJggg=="
        />

        {/* ── Permanent brand-toned gradient overlay ──
            Bleeds the card's accent colour from bottom → up so the photo
            transitions naturally into the white body below. Opacity is low
            enough to keep the image readable. */}
        <div
          className={`absolute inset-x-0 bottom-0 h-[55%]
                      bg-gradient-to-t ${overlayGradient}`}
          aria-hidden="true"
        />

        {/* ── Hover dark vignette ──
            Adds cinematic depth on hover without killing image visibility. */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* ── Level badge (top-left) ── */}
        <LevelBadge level={level} accent={accent} accentText={accentText} />

        {/* ── Duration tag (top-right) ── */}
        <span
          className="absolute top-4 right-4 z-10
                     text-[9px] font-medium tracking-[0.2em] uppercase
                     px-3 py-1.5 rounded-full
                     bg-white/75 backdrop-blur-md
                     border border-white/40 text-[#6B5344] shadow-sm"
        >
          {duration}
        </span>

        {/* ── Hover caption (slides up) ──
            Shows the title in elegant white type over the dark vignette. */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 p-5
                     translate-y-2 opacity-0
                     group-hover:translate-y-0 group-hover:opacity-100
                     transition-all duration-500 ease-out"
          aria-hidden="true"
        >
          <p
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-[20px] font-light leading-tight text-white drop-shadow"
          >
            {title}
          </p>
        </div>

      </div>
      {/* ══════════════════════════════════════════════════════════════════════
          CARD BODY
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col flex-1 p-[22px]">

        {/* Rating dots + meta row */}
        <div className="flex items-center justify-between mb-3">
          <RatingDots rating={rating} />
          <MetaRow duration={duration} members={members} />
        </div>

        {/* Title */}
        <h3
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className="text-[23px] font-normal text-[#2E2218] tracking-[-0.01em] leading-snug mb-2"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="flex-1 text-[13px] font-light text-[#6B5B4E] leading-[1.8] mb-5">
          {description}
        </p>

        {/* CTA button */}
        <div className="flex items-center justify-between">
          <button
            className={`inline-flex items-center gap-2
                        text-[11px] font-medium tracking-[0.2em] uppercase
                        px-5 py-2.5 rounded-full
                        border border-[rgba(100,80,60,0.22)] bg-transparent
                        text-[#2E2218] transition-all duration-300 ease-out
                        ${accentHover}`}
          >
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
              →
            </span>
          </button>

          {/* Subtle bookmark / save icon */}
          <button
            aria-label={`Save ${title}`}
            className="w-8 h-8 rounded-full flex items-center justify-center
                       border border-[rgba(180,160,148,0.25)]
                       text-[#9B8EA6] hover:text-[#D4A5A0] hover:border-[#D4A5A0]
                       transition-colors duration-200"
          >
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" aria-hidden="true">
              <path d="M2 1h9a1 1 0 0 1 1 1v10.5l-5-2.5L2 12.5V2a1 1 0 0 1 1-1z"
                    stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
      {/* ── END CARD BODY ───────────────────────────────────────────────────── */}

    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: CategoryRow
   Pill label + decorative gradient divider line before each grid.
───────────────────────────────────────────────────────────────────────────── */
function CategoryRow({ label, type }: { label: string; type: "yoga" | "veena" }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span
        className={`text-[10px] font-medium tracking-[0.24em] uppercase px-4 py-1.5 rounded-full ${
          type === "yoga" ? "bg-[#EAE6F0] text-[#9B8EA6]" : "bg-[#EDE6DA] text-[#6B5344]"
        }`}
      >
        {label}
      </span>
      <span className="flex-1 h-px bg-gradient-to-r from-[#D4A5A0] to-transparent opacity-50" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT: ClassesSection
   Full section with:
     • Ambient gradient orbs (decorative, aria-hidden)
     • Mandala SVG accent (top-right corner)
     • Animated section header (Framer Motion scroll reveal)
     • Yoga grid (3 cards)
     • Veena grid (3 cards)
     • Footer CTA button
───────────────────────────────────────────────────────────────────────────── */
export default function ClassesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAF8F4] px-6 py-[72px] md:px-10 md:py-24"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >

      {/* Ambient orbs ── decorative, pointer-events-none */}
      <div className="pointer-events-none absolute -top-36 -right-28 h-[520px] w-[520px] rounded-full opacity-50"
           style={{ background: "radial-gradient(circle, #EAE6F0 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 -left-24 h-[420px] w-[420px] rounded-full opacity-50"
           style={{ background: "radial-gradient(circle, #F2E8E4 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute top-[45%] left-[42%] h-[300px] w-[300px] rounded-full opacity-45"
           style={{ background: "radial-gradient(circle, #E4EDE6 0%, transparent 70%)" }} aria-hidden="true" />

      {/* Mandala motif ── top-right decorative */}
      <svg className="pointer-events-none absolute top-8 right-11 h-16 w-16 opacity-[0.15]"
           viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke="#9B8EA6" strokeWidth="0.8"/>
        <circle cx="32" cy="32" r="22" stroke="#9B8EA6" strokeWidth="0.8"/>
        <circle cx="32" cy="32" r="14" stroke="#9B8EA6" strokeWidth="0.8"/>
        <circle cx="32" cy="32" r="6"  stroke="#9B8EA6" strokeWidth="0.8"/>
        <line x1="32" y1="2"  x2="32" y2="62" stroke="#9B8EA6" strokeWidth="0.6"/>
        <line x1="2"  y1="32" x2="62" y2="32" stroke="#9B8EA6" strokeWidth="0.6"/>
        <line x1="8"  y1="8"  x2="56" y2="56" stroke="#9B8EA6" strokeWidth="0.6"/>
        <line x1="56" y1="8"  x2="8"  y2="56" stroke="#9B8EA6" strokeWidth="0.6"/>
        <circle cx="32" cy="2"  r="2" fill="#9B8EA6"/>
        <circle cx="32" cy="62" r="2" fill="#9B8EA6"/>
        <circle cx="2"  cy="32" r="2" fill="#9B8EA6"/>
        <circle cx="62" cy="32" r="2" fill="#9B8EA6"/>
      </svg>

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
        className="relative z-10 mx-auto mb-14 max-w-2xl text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-normal tracking-[0.3em] uppercase text-[#9B8EA6]">
          <span className="inline-block h-px w-8 bg-[#D4A5A0]" />
          Curated for Every Journey
          <span className="inline-block h-px w-8 bg-[#D4A5A0]" />
        </div>
        <h2
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className="mb-4 text-[48px] font-light leading-[1.13] tracking-[-0.01em] text-[#2E2218]"
        >
          Our <em className="not-italic text-[#D4A5A0]">Classes</em> &amp; Sessions
        </h2>
        <p className="mx-auto max-w-[500px] text-[15px] font-light leading-[1.8] tracking-[0.02em] text-[#6B5B4E]">
          Where ancient practice meets serene modern learning — each session a quiet ritual,
          each lesson a step toward mastery.
        </p>
      </motion.div>

      {/* ── YOGA BLOCK ── */}
      <div className="relative z-10 mx-auto mb-16 max-w-7xl">
        <CategoryRow label="Yoga Sessions" type="yoga" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {yogaSessions.map((session, i) => (
            <SessionCard key={session.title} session={session} ctaColor="yoga" index={i} />
          ))}
        </div>
      </div>

      {/* ── VEENA BLOCK ── */}
      <div className="relative z-10 mx-auto mb-16 max-w-7xl">
        <CategoryRow label="Veena Sessions" type="veena" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {veenaSessions.map((session, i) => (
            <SessionCard key={session.title} session={session} ctaColor="veena" index={i} />
          ))}
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div className="relative z-10 mt-4 flex justify-center">
        <button
          className="inline-flex items-center gap-2.5 rounded-full
                     border border-[rgba(155,142,166,0.35)]
                     bg-[rgba(234,230,240,0.4)] px-8 py-3.5
                     text-[12px] font-normal tracking-[0.22em] uppercase text-[#6B5B4E]
                     transition-all duration-300
                     hover:bg-[#9B8EA6] hover:text-white hover:border-[#9B8EA6]"
        >
          View Full Schedule &nbsp;→
        </button>
      </div>

    </section>
  );
}