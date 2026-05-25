"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Target, Eye, Music, BookOpen, Heart, Award } from 'lucide-react';

// Custom hook for smooth scroll animations
function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}

export default function AboutPage() {
  const quoteRef = useRef<HTMLElement>(null);
  const teacherRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const purposeRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const quoteVisible = useScrollReveal(quoteRef);
  const teacherVisible = useScrollReveal(teacherRef);
  const valuesVisible = useScrollReveal(valuesRef);
  const purposeVisible = useScrollReveal(purposeRef);
  const ctaVisible = useScrollReveal(ctaRef);

  return (
    <main className="min-h-screen bg-[#FCFBFA] flex flex-col text-slate-800 selection:bg-[#B4C4D9]/30">
      
      {/* 1. CREATIVE QUOTE SECTION */}
      <section
        ref={quoteRef}
        className={`relative py-32 md:py-48 flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="pointer-events-none absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(230,235,245,0.6)_0%,transparent_70%)] rounded-full -top-20 -left-20 blur-3xl" aria-hidden="true"></div>
        <div className="pointer-events-none absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(250,240,235,0.6)_0%,transparent_70%)] rounded-full -bottom-20 -right-20 blur-3xl" aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center mb-10">
            <Music className="text-[#B4C4D9] h-10 w-10 opacity-60" strokeWidth={1.5} aria-hidden="true" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.2] tracking-tight">
            "Music is the <span className="font-serif italic text-slate-500 font-light">vibration</span> of the soul, and through the Veena, we find our way back to <span className="relative inline-block text-[#B4C4D9]">stillness.</span>"
          </h2>
          
          <p className="mt-12 font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400 font-bold">
            — The Philosophy of Sattvalaya —
          </p>
        </div>
      </section>

      {/* 2. ASYMMETRICAL TEACHER SECTION (75% Image / 25% Text) */}
      <section
        ref={teacherRef}
        className={`px-6 lg:px-12 py-20 md:py-32 flex-grow transition-all duration-1000 delay-100 ease-out ${teacherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto flex max-w-[90rem] flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Column: Image (Takes up 3/4 or 75% width on large screens) */}
          <div className={`w-full lg:w-3/4 relative transition-all duration-1000 ease-out ${teacherVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
              <img 
                src="/Rajiwith.Veena.jpg" 
                alt="Rajalakshmi Roshan playing the Veena" 
                className="w-full h-[500px] lg:h-[800px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column: Bio (Takes up 1/4 or 25% width, set to "sticky" so it floats as you scroll) */}
          <div className={`w-full lg:w-1/4 lg:sticky lg:top-32 space-y-8 transition-all duration-1000 delay-300 ease-out ${teacherVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">The Founder</h3>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
                Meet <br />
                <span className="font-serif italic text-slate-500 font-light">Rajalakshmi</span>
              </h2>
              <div className="h-1 w-12 bg-[#B4C4D9] mt-6 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="font-medium text-slate-800">
                A biotechnologist by profession and a Vainika, Bharatanatyam dancer, and yoga practitioner by passion.
              </p>
              <p>
                Founded in 2022, Sattvalaya Arts began as an initiative to nurture aspiring students in the divine art of the Veena.
              </p>
              <p>
                Rooted in deep classical tradition, her approach guides students through rigorous discipline and creative discovery, integrating yoga for a truly holistic learning experience.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/classes"
                className="inline-flex items-center text-sm font-bold text-slate-900 transition-colors hover:text-[#B4C4D9] group"
              >
                View Teaching Methods
                <span className="ml-2 block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION (Editorial Layout) */}
      <section
        ref={valuesRef}
        className={`px-6 lg:px-12 py-24 md:py-32 transition-all duration-1000 ease-out ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-medium md:text-5xl text-slate-900 tracking-tight">
              Our <span className="font-serif italic text-slate-500 font-light">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Value 1 */}
            <div className="flex flex-col space-y-6 group">
              <div className="h-16 w-16 rounded-2xl bg-[#E8EDF5] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#B4C4D9]">
                <BookOpen className="h-7 w-7 text-slate-600 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Deep Tradition</h3>
                <p className="text-slate-500 leading-relaxed">
                  We honor the authentic, classical methodologies of the Veena, ensuring the ancient knowledge is passed down with pristine accuracy and deep respect.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col space-y-6 group">
              <div className="h-16 w-16 rounded-2xl bg-[#E8EDF5] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#B4C4D9]">
                <Heart className="h-7 w-7 text-slate-600 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Mindful Practice</h3>
                <p className="text-slate-500 leading-relaxed">
                  Art cannot flourish in a tense body. We integrate breathwork and physical alignment to create sustainable, joyful, and physically healthy musicians.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col space-y-6 group">
              <div className="h-16 w-16 rounded-2xl bg-[#E8EDF5] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#B4C4D9]">
                <Award className="h-7 w-7 text-slate-600 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Artistic Bhava</h3>
                <p className="text-slate-500 leading-relaxed">
                  We push students beyond mere technical perfection, guiding them to uncover the deep emotional resonance and expressive storytelling (bhava) of the music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION (Soft & Airy Cards) */}
      <section
        ref={purposeRef}
        className={`bg-[#F8F9FA] px-6 md:px-12 py-24 md:py-32 transition-all duration-1000 ease-out ${purposeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium md:text-5xl text-slate-900 tracking-tight">
              Our <span className="font-serif italic text-slate-500 font-light">Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-100 shadow-sm transition duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B4C4D9]/10">
              <Target className="h-10 w-10 text-[#B4C4D9] mb-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                To preserve and pass down the rich heritage of classical Veena through structured, joyful, and accessible education, while nurturing the physical and mental well-being of our students.
              </p>
            </div>

            <div className="group bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-100 shadow-sm transition duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B4C4D9]/10">
              <Eye className="h-10 w-10 text-[#B4C4D9] mb-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                To create a global community of mindful artists who find harmony, balance, and creative expression through the pursuit of traditional Indian arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (Minimalist Box) */}
      <section
        ref={ctaRef}
        className={`px-6 lg:px-12 py-24 md:py-32 text-center transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto max-w-4xl bg-[#E8EDF5] p-12 md:p-20 rounded-[3rem] border border-white shadow-sm">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">
            Ready to Experience <br className="hidden md:block" /> 
            <span className="font-serif italic text-slate-500 font-light">the Harmony?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover our current schedule, class formats, and find the perfect path for your wellness journey.
          </p>
          <Link
            href="/classes"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#B4C4D9] px-10 text-base font-medium text-slate-900 transition-all duration-300 ease-out hover:bg-[#a1b3ca] hover:shadow-lg hover:shadow-[#B4C4D9]/30 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8EDF5]"
          >
            Explore Our Classes
          </Link>
        </div>
      </section>

    </main>
  );
}