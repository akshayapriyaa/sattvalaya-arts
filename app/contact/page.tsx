"use client";

import { useState } from "react";
// 1. IMPORTED 'Variants' HERE:
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ArrowUpRight,
  Send,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   Reusable Framer Motion config — keeps all reveals consistent across the page.
───────────────────────────────────────────────────────────────────────────── */
// 2. APPLIED ': Variants' TYPE HERE:
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// 3. APPLIED ': Variants' TYPE HERE:
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — FAQ ITEMS
───────────────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Do I need to own a Veena before joining?",
    a: "Not at all. The studio provides beautifully maintained instruments for all beginner and intermediate sessions. We'll guide you on selecting your own Veena when the time feels right — usually after the first three months of practice.",
  },
  {
    q: "Are classes suitable for absolute beginners?",
    a: "Entirely. Our Beginner Veena and Hatha Yoga programmes are designed from the ground up for students with zero prior experience. We believe the most beautiful journeys begin from stillness.",
  },
  {
    q: "Do you offer online or remote sessions?",
    a: "Yes — our Global Access format brings the full atelier experience into your home through a polished digital studio setup. Recorded lesson reviews, digital notation, and live mentor feedback are all included.",
  },
  {
    q: "How do I choose between the class formats?",
    a: "We recommend beginning with a private consultation — a calm 20-minute conversation where we understand your goals, schedule, and artistic sensibility, then craft a bespoke plan that feels entirely yours.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — INTEREST OPTIONS (select dropdown)
───────────────────────────────────────────────────────────────────────────── */
const interests = [
  "Hatha Yoga",
  "Vinyasa Flow",
  "Yin Yoga",
  "Integrated Yoga + Veena",
  "Beginner Veena",
  "Classical Raagas",
  "Advanced Performance",
  "Private Mentorship",
  "Online Sessions",
  "General Enquiry",
];

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: BackgroundOrbs
   Fixed decorative radial gradient blobs — purely atmospheric.
───────────────────────────────────────────────────────────────────────────── */
function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-48 -right-32 h-[600px] w-[600px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, #E8EDF5 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-[30%] -left-40 h-[500px] w-[500px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, #F0EEF8 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-[15%] h-[380px] w-[380px] rounded-full opacity-45"
        style={{ background: "radial-gradient(circle, #EAF0F8 0%, transparent 65%)" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: MandalaAccent
   Thin concentric-circle SVG used as a decorative motif.
───────────────────────────────────────────────────────────────────────────── */
function MandalaAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" stroke="#B4C4D9" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="28" stroke="#B4C4D9" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="18" stroke="#B4C4D9" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="8"  stroke="#B4C4D9" strokeWidth="0.6" />
      <line x1="40" y1="2"  x2="40" y2="78" stroke="#B4C4D9" strokeWidth="0.5" />
      <line x1="2"  y1="40" x2="78" y2="40" stroke="#B4C4D9" strokeWidth="0.5" />
      <line x1="12" y1="12" x2="68" y2="68" stroke="#B4C4D9" strokeWidth="0.5" />
      <line x1="68" y1="12" x2="12" y2="68" stroke="#B4C4D9" strokeWidth="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: FormField
   Reusable labelled input/textarea with frosted-glass focus ring.
   The label floats above a clean, borderless-but-underlined field style.
───────────────────────────────────────────────────────────────────────────── */
function FormField({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400
                   transition-colors duration-200 group-focus-within:text-[#61708d]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* shared input class string — used for both <input> and <textarea> */
const inputCls =
  "w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-3.5 text-[14px] " +
  "text-slate-800 placeholder-slate-300 backdrop-blur-sm " +
  "transition-all duration-200 outline-none " +
  "focus:border-[#B4C4D9] focus:bg-white/80 focus:shadow-[0_0_0_3px_rgba(180,196,217,0.18)] " +
  "hover:border-[#B4C4D9]/50";

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: ContactForm
   Clean, elegant enquiry form on a deep frosted-glass card.
───────────────────────────────────────────────────────────────────────────── */
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    /* Replace with your actual form submission (e.g. Resend, Formspree, etc.) */
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  }

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-[3rem] border border-white/50
                 bg-white/70 p-10 shadow-xl shadow-[#B4C4D9]/10 backdrop-blur-xl
                 md:p-12"
    >
      {/* Subtle corner accent */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #E8EDF5 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        {sent ? (
          /* ── Success state ── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 text-center gap-5"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EDF5]">
              <Sparkles className="h-7 w-7 text-[#61708d]" />
            </div>
            <div>
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Message received.
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-7">
                We'll be in touch within one working day — thoughtfully.
              </p>
            </div>
            <button
              onClick={() => setSent(false)}
              className="mt-2 rounded-full border border-[#B4C4D9]/50 px-6 py-2.5 text-xs
                         uppercase tracking-[0.2em] text-slate-500
                         transition hover:border-[#B4C4D9] hover:text-slate-700"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          /* ── Form state ── */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#61708d]">
                Get in touch
              </p>
              <h2
                className="mt-2 text-[28px] font-semibold leading-tight text-slate-950"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Start a{" "}
                <span className="font-serif italic text-slate-500 font-light">
                  conversation
                </span>
              </h2>
            </div>

            {/* Name + Email row */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Your Name" id="name">
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  className={inputCls}
                />
              </FormField>
              <FormField label="Email Address" id="email">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </FormField>
            </div>

            {/* Interest select */}
            <FormField label="I'm interested in" id="interest">
              <select id="interest" className={inputCls + " cursor-pointer"} defaultValue="">
                <option value="" disabled>
                  Select a programme…
                </option>
                {interests.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Message */}
            <FormField label="Your Message" id="message">
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell us about your experience level, schedule, and what draws you to this practice…"
                className={inputCls + " resize-none"}
              />
            </FormField>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group/btn mt-1 flex items-center justify-center gap-3 self-start
                         rounded-full bg-[#B4C4D9] px-8 py-4 text-sm font-semibold
                         text-slate-900 transition-all duration-300
                         hover:bg-[#97a8c3] hover:shadow-md hover:shadow-[#B4C4D9]/30
                         disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-700/30 border-t-slate-700" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: StudioDetails
   Right-side column: contact info rows + visual Google Maps card.
───────────────────────────────────────────────────────────────────────────── */
function StudioDetails() {
  const mapsUrl = "https://goo.gl/maps/bH3gQ2DwvQh5W18Q8"; // Valid Google Maps Link to Apple Park

  const details = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@sattvalaya.com",
      href: "mailto:hello@sattvalaya.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (408) 555-0182",
      href: "tel:+14085550182",
    },
    {
      icon: Clock,
      label: "Studio Hours",
      value: "Mon–Sat  ·  8 am – 7 pm",
      href: null,
    },
  ];

  return (
    <motion.div variants={stagger} className="flex flex-col gap-7">

      {/* ── Section label ── */}
      <motion.div variants={fadeUp}>
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#61708d]">
          Visit the atelier
        </p>
        <h2
          className="mt-2 text-[28px] font-semibold leading-tight text-slate-950"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Find us in{" "}
          <span className="font-serif italic text-slate-500 font-light">
            Cupertino
          </span>
        </h2>
        <p className="mt-3 max-w-sm text-[14px] leading-7 text-slate-500">
          Our studio is a calm refuge tucked within the serene campus of Apple Park — a space designed for focus, beauty, and inspired practice.
        </p>
      </motion.div>

      {/* ── Google Maps visual card ── */}
      <motion.a
        variants={fadeUp}
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Apple Park location in Google Maps"
        className="group relative overflow-hidden rounded-[2.5rem] border border-white/50
                   bg-white/70 shadow-xl shadow-[#B4C4D9]/10 backdrop-blur-xl
                   transition-all duration-500
                   hover:shadow-2xl hover:shadow-[#B4C4D9]/20 hover:-translate-y-1"
      >
        {/* Map placeholder — replace with a real static map image or embed */}
        <div className="relative h-52 w-full overflow-hidden bg-[#E8EDF5]">
          {/* Stylised map illustration using SVGs */}
          <svg
            viewBox="0 0 480 208"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {/* Background */}
            <rect width="480" height="208" fill="#EEF2F8" />
            {/* Road grid — muted */}
            <line x1="0" y1="104" x2="480" y2="104" stroke="#D8E0EC" strokeWidth="8" />
            <line x1="240" y1="0" x2="240" y2="208" stroke="#D8E0EC" strokeWidth="8" />
            <line x1="0" y1="60"  x2="480" y2="60"  stroke="#E2E8F2" strokeWidth="4" />
            <line x1="0" y1="148" x2="480" y2="148" stroke="#E2E8F2" strokeWidth="4" />
            <line x1="120" y1="0" x2="120" y2="208" stroke="#E2E8F2" strokeWidth="4" />
            <line x1="360" y1="0" x2="360" y2="208" stroke="#E2E8F2" strokeWidth="4" />
            {/* Campus ring — Apple Park circle */}
            <circle cx="240" cy="104" r="56" stroke="#B4C4D9" strokeWidth="2" fill="#D8E8F4" fillOpacity="0.5" />
            <circle cx="240" cy="104" r="34" fill="#C6D8EC" fillOpacity="0.6" />
            {/* Green centre */}
            <circle cx="240" cy="104" r="18" fill="#C8D9C0" fillOpacity="0.7" />
            {/* Pin */}
            <circle cx="240" cy="104" r="7" fill="#61708d" />
            <circle cx="240" cy="104" r="3.5" fill="white" />
            {/* Soft vignette overlay */}
            <radialGradient id="vig" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="#EEF2F8" />
            </radialGradient>
            <rect width="480" height="208" fill="url(#vig)" />
          </svg>

          {/* "Open in Maps" affordance — appears on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center
                       bg-[#61708d]/0 transition-all duration-400
                       group-hover:bg-[#61708d]/8"
          >
            <span
              className="flex items-center gap-2 rounded-full bg-white/0 px-5 py-2.5
                         text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-700
                         opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300
                         group-hover:bg-white/90 group-hover:opacity-100
                         group-hover:shadow-md group-hover:shadow-[#B4C4D9]/20"
            >
              Open in Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Address row below map */}
        <div className="flex items-center gap-4 p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center
                          rounded-2xl bg-[#E8EDF5]">
            <MapPin className="h-4 w-4 text-[#61708d]" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-slate-800">
              Apple Park Visitor Center
            </p>
            <p className="text-[12px] text-slate-400">
              Cupertino, CA 95014 · United States
            </p>
          </div>
          <ArrowUpRight
            className="ml-auto h-4 w-4 flex-shrink-0 text-slate-300
                       transition-all duration-300 group-hover:text-[#61708d]
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </motion.a>

      {/* ── Contact detail rows ── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3"
      >
        {details.map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-[2rem] border border-white/50
                       bg-white/70 px-6 py-4 shadow-sm shadow-[#B4C4D9]/8
                       backdrop-blur-xl transition-all duration-200
                       hover:shadow-md hover:shadow-[#B4C4D9]/15"
          >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center
                            rounded-xl bg-[#E8EDF5]">
              <Icon className="h-4 w-4 text-[#61708d]" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="truncate text-[13px] font-medium text-slate-700
                             transition-colors hover:text-[#61708d]"
                >
                  {value}
                </a>
              ) : (
                <p className="text-[13px] font-medium text-slate-700">{value}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>

    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: FAQItem
   Single accordion item — expands on click, animated with Framer Motion.
───────────────────────────────────────────────────────────────────────────── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[2rem] border border-white/50
                 bg-white/70 shadow-sm shadow-[#B4C4D9]/8 backdrop-blur-xl"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left
                   transition-colors duration-200 hover:bg-white/40"
      >
        <span className="text-[15px] font-semibold text-slate-800 leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-[#61708d] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-7 pt-0 text-[14px] leading-[1.85] text-slate-500">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE: ContactPage  (default export → app/contact/page.tsx)
   Structure:
     1. BackgroundOrbs  — fixed atmospheric blobs
     2. Hero            — editorial header, eyebrow, subtitle
     3. Split Layout    — ContactForm (left) + StudioDetails (right)
     4. FAQ Section     — accordion
     5. Footer tagline  — closing brand line
───────────────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FCFBFA] text-slate-900">

      {/* ── Fixed atmospheric orbs ── */}
      <BackgroundOrbs />

      {/* ════════════════════════════════════════════════════════════════════
         1. EDITORIAL HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-10 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            {/* Eyebrow pill */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-[#E8EDF5]
                               px-4 py-2 text-[11px] font-semibold uppercase
                               tracking-[0.32em] text-[#61708d]">
                <MandalaAccent className="h-4 w-4 opacity-60" />
                Sattvalaya Arts · Cupertino
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold
                         leading-[1.08] tracking-tight text-slate-950"
            >
              Begin your{" "}
              <span className="font-serif italic text-slate-400 font-light">
                journey
              </span>
              <br />
              with us.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-[16px] leading-[1.85] text-slate-500"
            >
              Whether you're drawn to the stillness of yoga or the resonance of
              the Veena — every great practice begins with a single, intentional
              conversation.
            </motion.p>

            {/* Decorative rule */}
            <motion.div
              variants={fadeUp}
              className="mt-2 h-px w-24 bg-gradient-to-r from-[#B4C4D9] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         2. CONTACT + LOCATION SPLIT
         Asymmetrical layout: 55% form / 45% studio details on desktop.
         Stacks to single column on mobile.
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start"
        >
          {/* LEFT — Contact form */}
          <ContactForm />

          {/* RIGHT — Studio details + map */}
          <StudioDetails />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         3. FAQ SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#61708d]">
                Common questions
              </p>
              <h2
                className="mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold
                           leading-tight text-slate-950"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Everything you{" "}
                <span className="font-serif italic text-slate-400 font-light">
                  need to know
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-7 text-slate-400 lg:text-right">
              Can't find an answer?{" "}
              <a
                href="mailto:hello@sattvalaya.com"
                className="text-[#61708d] underline-offset-2 hover:underline"
              >
                Write to us directly
              </a>
              .
            </p>
          </motion.div>

          {/* FAQ accordion list */}
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItem key={item.q} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         4. CLOSING BRAND TAGLINE
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-28 pt-4 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-5 rounded-[3rem] border border-white/50
                       bg-white/70 px-10 py-14 text-center shadow-xl
                       shadow-[#B4C4D9]/10 backdrop-blur-xl"
          >
            <MandalaAccent className="h-14 w-14 opacity-25" />
            <p
              className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-light italic text-slate-400"
              style={{ fontFamily: "Georgia, serif" }}
            >
              "In every posture, a prayer. In every string, a story."
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#61708d]">
              Sattvalaya Arts · Est. 2018
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}