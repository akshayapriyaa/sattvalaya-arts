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
            src="/hero-1.jpg"
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

      {/* --- 2. THE SATTVALAYA APPROACH (3 Pillars) --- */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            <span className="h-px w-12 bg-[#B4C4D9]" /> Our Philosophy <span className="h-px w-12 bg-[#B4C4D9]" />
          </div>
          <h2 className="text-4xl font-medium leading-tight text-slate-900 md:text-5xl">
            The Sattvalaya <span className="font-serif italic text-slate-500 font-light">Approach</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Pillar 1: Veena */}
          <div className="group flex flex-col items-start rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B4C4D9]/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EDF5] text-2xl transition-transform duration-500 group-hover:scale-110">
              🎵
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">A Foundation in Classical Veena</h3>
            <p className="text-[15px] leading-relaxed text-slate-500">
              Learn classical veena through a strong foundation in technique, rhythm, and bhava. Training is guided with respect to tradition while making learning accessible and joyful for all levels.
            </p>
          </div>

          {/* Pillar 2: Yoga */}
          <div className="group flex flex-col items-start rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B4C4D9]/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F2E8] text-2xl transition-transform duration-500 group-hover:scale-110">
              🧘‍♀️
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Holistic Mind-Body Practice</h3>
            <p className="text-[15px] leading-relaxed text-slate-500">
              Through breath, movement, and mindful awareness, our yoga sessions build strength, flexibility, and inner stillness. The practice fosters balance and clarity, supporting overall well-being in daily life.
            </p>
          </div>

          {/* Pillar 3: Flexible Learning */}
          <div className="group flex flex-col items-start rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#B4C4D9]/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5E8E8] text-2xl transition-transform duration-500 group-hover:scale-110">
              🌍
            </div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Flexible Learning for Modern Lifestyles</h3>
            <p className="text-[15px] leading-relaxed text-slate-500">
              In-person classes in the Bay Area, along with online and hybrid options, make it easy to stay consistent—whether you are a beginner, a returning learner, or learning alongside family.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. MEET THE DIRECTOR / ABOUT US --- */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* Image Side - Photo of Director or Logo */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-[#E8EDF5] shadow-xl shadow-[#B4C4D9]/15">
              <img
                src="/director.png" 
                alt="Rajalakshmi Roshan - Artistic Director"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative background accent behind the image */}
            <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-[#B4C4D9]/20 blur-3xl"></div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start text-left">
            {/* <div className="mb-6 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
              <span className="h-px w-10 bg-[#B4C4D9]" /> About Us
            </div> */}
            
            <h2 className="mb-8 text-4xl font-medium leading-tight text-slate-900 md:text-5xl">
              About  
              <span className="font-serif italic text-slate-500 font-light"> us</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-[15px] leading-[1.85] text-slate-600">
              <p>
                Founded in 2022 by Rajalakshmi Roshan, Sattvalaya Arts began as an initiative to nurture and educate aspiring students in the Veena. Rooted in tradition, the teaching approach guides students through both discipline and discovery.
              </p>
              <p>
                Classes focus on music theory, technique, and the nuanced art of playing the Veena, while fostering creativity and a deep love for the instrument. Each lesson is thoughtfully structured to balance technical precision with expressive growth.
              </p>
              <p>
                In addition to Veena training, Sattvalaya Arts offers yoga and meditation classes that support overall well-being, helping students cultivate balance in body, mind, and spirit.
              </p>
              <p>
                To ensure meaningful learning, class sizes are kept small so every student receives individual attention and personalized guidance throughout their journey. Classes are offered in San Jose, California, as well as through online and hybrid formats, welcoming students from around the world.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-transparent px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-800 transition-all hover:border-[#B4C4D9] hover:bg-[#B4C4D9] hover:text-white"
              >
                Meet the Teacher
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. CLASS HIGHLIGHTS (Carousel/Grid) --- */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 pt-12 md:px-12">
        
        {/* Section Header with Arrows */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-medium leading-tight text-slate-900 md:text-5xl">
            Our Variety of <br />
            <span className="font-serif italic text-slate-500 font-light">Offerings</span> for You
          </h2>
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
                src="/yoga-6.jpg" 
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
                src="/yoga-5.jpg" 
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