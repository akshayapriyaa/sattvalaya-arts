"use client";

import { useState } from "react";
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
───────────────────────────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
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
   SUB-COMPONENTS
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

function MandalaAccent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="8"  stroke="currentColor" strokeWidth="0.6" />
      <line x1="40" y1="2"  x2="40" y2="78" stroke="currentColor" strokeWidth="0.5" />
      <line x1="2"  y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="0.5" />
      <line x1="12" y1="12" x2="68" y2="68" stroke="currentColor" strokeWidth="0.5" />
      <line x1="68" y1="12" x2="12" y2="68" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
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

const inputCls =
  "w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-3.5 text-[14px] " +
  "text-slate-800 placeholder-slate-300 backdrop-blur-sm " +
  "transition-all duration-200 outline-none " +
  "focus:border-[#B4C4D9] focus:bg-white/80 focus:shadow-[0_0_0_3px_rgba(180,196,217,0.18)] " +
  "hover:border-[#B4C4D9]/50";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
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
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #E8EDF5 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        {sent ? (
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
              <h3 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: "Georgia, serif" }}>
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
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#61708d]">
                Get in touch
              </p>
              <h2 className="mt-2 text-[28px] font-semibold leading-tight text-slate-950" style={{ fontFamily: "Georgia, serif" }}>
                Start a{" "}
                <span className="font-serif italic text-slate-500 font-light">
                  conversation
                </span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" id="name">
                <input id="name" type="text" required placeholder="e.g. Ananya Sharma" className={inputCls} />
              </FormField>
              <FormField label="Email Address" id="email">
                <input id="email" type="email" required placeholder="you@example.com" className={inputCls} />
              </FormField>
            </div>
            
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Phone Number" id="phone">
                <input id="phone" type="tel" placeholder="+1 (408) 555-0182" className={inputCls} />
              </FormField>
              <FormField label="Interested in" id="interest">
                <select id="interest" className={inputCls + " cursor-pointer"} defaultValue="">
                  <option value="" disabled>Select an option…</option>
                  {interests.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField label="Your Message" id="message">
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell us about your interests and any questions you have…"
                className={inputCls + " resize-none"}
              />
            </FormField>

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
   SUB-COMPONENT: ContactInfo
───────────────────────────────────────────────────────────────────────────── */
function ContactInfo() {
  const details = [
    {
      icon: MapPin,
      label: "Location",
      title: "Cupertino, California",
      desc: "In-person, Virtual & Hybrid Classes Available",
      href: null,
    },
    {
      icon: Mail,
      label: "Email",
      title: "hello@sattvalaya.com",
      desc: "We typically reply within 24 hours",
      href: "mailto:hello@sattvalaya.com",
    },
    {
      icon: Phone,
      label: "Phone",
      title: "+1 (408) 555-0182",
      desc: "Mon-Sat, 9am - 6pm PST",
      href: "tel:+14085550182",
    },
    {
      icon: Clock,
      label: "Class Hours",
      title: "Monday – Saturday: 9:00 AM – 8:00 PM",
      desc: "Sunday: 10:00 AM – 6:00 PM",
      href: null,
    },
  ];

  return (
    <motion.div variants={stagger} className="flex flex-col gap-6 lg:pl-4">
      {details.map(({ icon: Icon, label, title, desc, href }) => (
        <motion.div
          key={label}
          variants={fadeUp}
          className="flex items-start gap-6 rounded-[2.5rem] border border-white/50
                     bg-white/70 p-8 shadow-sm shadow-[#B4C4D9]/8
                     backdrop-blur-xl transition-all duration-200
                     hover:shadow-md hover:shadow-[#B4C4D9]/15"
        >
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center
                          rounded-2xl bg-[#B4C4D9]/20 text-[#61708d]">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex flex-col pt-1">
            <h3 className="text-lg font-serif font-semibold text-slate-900 mb-1">{label}</h3>
            {href ? (
              <a href={href} className="text-[15px] font-medium text-slate-600 hover:text-[#61708d] transition-colors">
                {title}
              </a>
            ) : (
              <p className="text-[15px] font-medium text-slate-600">{title}</p>
            )}
            <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: StudioMap
───────────────────────────────────────────────────────────────────────────── */
function StudioMap() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=One+Apple+Park+Way,+Cupertino,+CA+95014,+USA"; 
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.3005886616447!2d-122.0116805!3d37.3346438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d83982bf23f0d!2sApple%20Park!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"; 

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col items-center"
    >
      <motion.div variants={fadeUp} className="text-center mb-12">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-slate-950" style={{ fontFamily: "Georgia, serif" }}>
          Visit <span className="font-serif italic text-slate-500 font-light">Our Studio</span>
        </h2>
        <p className="mt-4 text-[15px] text-slate-500 tracking-wide">
          Located in the serene heart of Cupertino, California
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="group relative w-full overflow-hidden rounded-[3rem] border border-white/60
                   bg-white/70 shadow-xl shadow-[#B4C4D9]/10 backdrop-blur-xl
                   transition-all duration-500 hover:shadow-2xl hover:shadow-[#B4C4D9]/20"
      >
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-[#E8EDF5]">
          <iframe 
            src={embedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[20%] contrast-[90%] opacity-90 mix-blend-multiply"
            title="Sattvalaya Arts Studio Location Map"
          />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-8 bg-white/80 backdrop-blur-xl border-t border-white/50">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E8EDF5]">
              <MapPin className="h-5 w-5 text-[#61708d]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-slate-800">Apple Park Visitor Center</p>
              <p className="text-[13px] text-slate-500 mt-1">One Apple Park Way, Cupertino, CA 95014</p>
            </div>
          </div>
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:flex items-center gap-3 text-[13px] font-semibold uppercase tracking-widest text-[#61708d] transition-colors hover:text-slate-950"
          >
            Get Directions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENT: FAQItem
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
   PAGE LAYOUT
───────────────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FCFBFA] text-slate-900">
      <BackgroundOrbs />

      {/* 1. EDITORIAL HERO - FULL BLEED BACKGROUND IMAGE */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-3.jpg" 
            alt="Sattvalaya Arts Contact"
            className="h-full w-full object-cover object-center"
          />
          {/* Soft, dark tint to let the image shine while keeping text readable */}
          <div className="absolute inset-0 bg-slate-900/30"></div>
          {/* Edge gradients to blend seamlessly into the page below */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FCFBFA] to-transparent"></div>
        </div>

        {/* Hero Content (Centered ON TOP of the image) */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center flex flex-col items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center gap-5">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-sm border border-white/30
                               px-4 py-2 text-[11px] font-semibold uppercase
                               tracking-[0.32em] text-white">
                <MandalaAccent className="h-4 w-4 opacity-80 text-white" />
                Sattvalaya Arts · Cupertino
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp} 
              className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-md"
            >
              Begin your <span className="font-serif italic text-slate-200 font-light">journey</span><br />with us.
            </motion.h1>

            <motion.p 
              variants={fadeUp} 
              className="max-w-xl text-[16px] leading-[1.85] text-slate-100 font-medium drop-shadow"
            >
              Whether you're drawn to the stillness of yoga or the resonance of the Veena — every great practice begins with a single, intentional conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFO ROW */}
      <section className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start"
        >
          <ContactForm />
          <ContactInfo />
        </motion.div>
      </section>

      {/* 3. FULL-WIDTH MAP SECTION */}
      <section className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <StudioMap />
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="relative z-10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
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
              <h2 className="mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-slate-950" style={{ fontFamily: "Georgia, serif" }}>
                Everything you <span className="font-serif italic text-slate-400 font-light">need to know</span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-7 text-slate-400 lg:text-right">
              Can't find an answer?{" "}
              <a href="mailto:hello@sattvalaya.com" className="text-[#61708d] underline-offset-2 hover:underline">
                Write to us directly
              </a>.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItem key={item.q} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING BRAND TAGLINE */}
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
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-light italic text-slate-400" style={{ fontFamily: "Georgia, serif" }}>
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