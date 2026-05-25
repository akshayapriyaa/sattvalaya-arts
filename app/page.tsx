import Link from 'next/link';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#FCFBFA] text-slate-800 selection:bg-orange-100">
      
      {/* --- 1. FULL-BLEED MERGED HERO SECTION --- */}
      <section className="relative min-h-[90vh] w-full flex items-center pt-20 pb-32 lg:pt-32 lg:pb-40">
        
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-sattvalaya.jpg"
            alt="The Union of Sound and Stillness"
            className="h-full w-full object-cover object-[80%_center] md:object-right"
          />
          {/* Left-to-Right gradient to make text readable but keep the right side clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBFA] via-[#FCFBFA]/80 to-transparent w-full md:w-3/4"></div>
          
          {/* Bottom gradient to seamlessly merge the image into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FCFBFA] to-transparent"></div>
        </div>

        {/* Hero Content (Floating over the left side) */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-2xl">
            {/* The "Editorial" Headline */}
            <h1 className="text-[3.5rem] leading-[1.1] tracking-tight font-medium text-slate-900 md:text-[5rem]">
              Discover Balance, <br />
              Strength, <span className="font-serif italic text-slate-500 font-light">and</span> Peace
            </h1>
            
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600">
              Join us in a serene oasis of wellness and embark on a path of self-discovery through the transformative power of the classical Veena and mindful movement.
            </p>

            <div className="mt-10">
              <Link
                href="/classes"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#B4C4D9] px-10 text-base font-medium text-slate-900 transition-all hover:bg-[#a1b3ca] hover:shadow-lg hover:shadow-[#B4C4D9]/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SECONDARY SECTION (Uncover The Soulful Essence) --- */}
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-12">
        {/* Decorative Lotus Icon */}
        <div className="mx-auto mb-8 flex justify-center">
          <svg className="h-16 w-16 text-[#B4C4D9] opacity-80" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2C12 2 15 6 15 11C15 16 12 22 12 22C12 22 9 16 9 11C9 6 12 2 12 2Z" />
             <path d="M22 12C22 12 18 15 13 15C8 15 2 12 2 12C2 12 8 9 13 9C18 9 22 12 22 12Z" />
             <path d="M19.071 4.929C19.071 4.929 16.243 8.464 12.707 11.293C9.172 14.121 4.929 19.071 4.929 19.071C4.929 19.071 8.464 16.243 11.293 12.707C14.121 9.172 19.071 4.929 19.071 4.929Z" />
             <path d="M19.071 19.071C19.071 19.071 16.243 15.536 12.707 12.707C9.172 9.879 4.929 4.929 4.929 4.929C4.929 4.929 8.464 7.757 11.293 11.293C14.121 14.828 19.071 19.071 19.071 19.071Z" />
          </svg>
        </div>

        <h2 className="text-4xl font-medium leading-tight text-slate-900 md:text-5xl">
          Uncover The Soulful <br />
          <span className="font-serif italic text-slate-500 font-light">Essence of Tradition</span> with Sattvalaya
        </h2>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
          A sanctuary where mind, body, and spirit converge in harmony. Our passion for classical arts comes from our commitment to fostering a supportive community for empowerment and growth.
        </p>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-block border-b-2 border-slate-900 pb-1 text-sm font-bold text-slate-900 transition-colors hover:border-[#B4C4D9] hover:text-[#B4C4D9]"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* --- 3. CLASS HIGHLIGHTS (Carousel/Grid) --- */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 md:px-12">
        
        {/* Section Header with Arrows */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-medium leading-tight text-slate-900 md:text-5xl">
            Our Variety of <br />
            <span className="font-serif italic text-slate-500 font-light">Offerings</span> for You
          </h2>
          
          {/* <div className="flex gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-[#B4C4D9] hover:text-[#B4C4D9]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors hover:border-[#B4C4D9] hover:bg-[#B4C4D9] hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div> */}
        </div>

        {/* The 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1: Integrated Yoga */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-[#E8EDF5]">
              <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm">
                <User className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs font-bold text-slate-700">All Levels</span>
              </div>
              <img 
                src="/gallery-8.jpg" 
                alt="Yoga Practice" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#B4C4D9]">Integrated Yoga</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Perfect for bringing balance to the body. Focuses on breathwork and alignment to support your musical posture.
            </p>
          </div>

          {/* Card 2: Beginner Veena */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-[#F5F2E8]">
              <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm">
                <User className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs font-bold text-slate-700">Beginner</span>
              </div>
              <img 
                src="/gallery-2.jpg" 
                alt="Veena Fundamentals" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#B4C4D9]">Veena Fundamentals</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Step-by-step guidance into the classical arts. Master the holding posture, basic string techniques, and early theory.
            </p>
          </div>

          {/* Card 3: Advanced Veena */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-[#F5E8E8]">
              <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm">
                <User className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs font-bold text-slate-700">Advanced</span>
              </div>
              <img 
                src="/gallery-1.jpg" 
                alt="Advanced Veena" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#B4C4D9]">Advanced & Bhava</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Deep stretches into complex ragas. Focus entirely on emotional expression and preparation for stage performance.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}