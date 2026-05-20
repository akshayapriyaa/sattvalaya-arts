import React from 'react';
import { 
  Music, 
  Activity, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Send 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] font-sans text-gray-800">
      
      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-orange-100 bg-[#fdf8f0] px-10 py-6 shadow-sm">
        
        {/* Left Side: Logo, Title, and Tagline Stack */}
        <a href="#" className="flex items-center gap-5 transition hover:opacity-90">
          <img 
            src="/logo.png" 
            alt="Sattvalaya Arts Logo" 
            className="h-16 w-auto object-contain" 
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Sattvalaya Arts</h1>
            <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">Harmony of Sound and Soul</p>
          </div>
        </a>

        {/* Right Side: Navigation Links */}
        <nav className="hidden items-center gap-10 md:flex">
          <a href="#" className="relative font-bold text-slate-900 transition hover:text-orange-600 after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-orange-500">
            Home
          </a>
          <a href="#about" className="font-semibold text-slate-600 transition hover:text-orange-600">About</a>
          <a href="#classes" className="font-semibold text-slate-600 transition hover:text-orange-600">Classes</a>
          <a href="#gallery" className="font-semibold text-slate-600 transition hover:text-orange-600">Gallery</a>
          <a href="#events" className="font-semibold text-slate-600 transition hover:text-orange-600">Events</a>
          <a href="#contact" className="font-semibold text-slate-600 transition hover:text-orange-600">Contact</a>
        </nav>
      </header>

      {/* FULL-SCREEN SINGLE IMAGE HERO SECTION */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        
        {/* The Single Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-1.jpg')" }}
        />

        {/* The Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* The Text Content */}
        <div className="relative z-20 px-4 text-center text-white">
          <h2 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Find Your Inner <span className="text-orange-400">Balance</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl">
            Join our Veena & Meditation classes for holistic wellness. Discover the perfect harmony of sound and soul.
          </p>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="px-6 py-24 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:gap-20 md:flex-row">
          
          {/* TEACHER IMAGE */}
          <div className="w-full md:w-1/2">
            <img 
              src="/meet_ragi.png" 
              alt="Rajalakshmi Roshan - Sattvalaya Teacher" 
              className="w-full h-auto max-h-[650px] rounded-2xl object-cover shadow-2xl border-4 border-white"
            />
          </div>

          {/* TEACHER BIO */}
          <div className="w-full space-y-5 md:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-orange-600 md:text-5xl">Meet the Teacher</h2>
            <p className="leading-relaxed text-gray-700 md:text-lg">
              Founded in 2022 by Rajalakshmi Roshan, Sattvalaya Arts began as an initiative to nurture and educate aspiring students in the Veena.
            </p>
            <p className="leading-relaxed text-gray-700 md:text-lg">
              Rooted in tradition, the teaching approach guides students through both discipline and discovery. Classes focus on music theory, technique, and the nuanced art of playing the Veena, while fostering creativity and a deep love for the instrument. Each lesson is thoughtfully structured to balance technical precision with expressive growth.
            </p>
            <p className="leading-relaxed text-gray-700 md:text-lg">
              In addition to Veena training, Sattvalaya Arts offers yoga and meditation classes that support overall well-being, helping students cultivate balance in body, mind, and spirit. To ensure meaningful learning, class sizes are kept small so every student receives individual attention and personalized guidance throughout their journey.
            </p>
            <p className="leading-relaxed text-gray-700 md:text-lg">
              Classes are offered in San Jose, California, as well as through online and hybrid formats, welcoming students from around the world.
            </p>
          </div>

        </div>
      </section>

      {/* THE SATTVALAYA APPROACH SECTION */}
      <section id="approach" className="bg-[#f4eee1] px-6 py-20 text-center md:px-12">
        <h2 className="mb-12 font-serif text-4xl font-bold text-slate-800">The Sattvalaya Approach</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          
          <div className="flex flex-col items-center rounded-xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <Music className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-4 font-serif text-xl font-bold text-slate-800">A Foundation in Classical Veena</h3>
            <p className="text-gray-600">
              Learn classical veena through a strong foundation in technique, rhythm, and bhava. Training is guided with respect to tradition while making learning accessible and joyful for all levels.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <Activity className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-4 font-serif text-xl font-bold text-slate-800">Holistic Mind-Body Practice</h3>
            <p className="text-gray-600">
              Through breath, movement, and mindful awareness, our yoga sessions build strength, flexibility, and inner stillness. The practice fosters balance and clarity, supporting overall well-being.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <Globe className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-4 font-serif text-xl font-bold text-slate-800">Flexible Learning</h3>
            <p className="text-gray-600">
              In-person classes in the Bay Area, along with online and hybrid options, make it easy to stay consistent—whether you are a beginner, a returning learner, or learning alongside family.
            </p>
          </div>

        </div>
      </section>

      {/* OUR CLASSES SECTION */}
      <section id="classes" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-slate-900 md:text-5xl">Our Classes</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover your path to artistic mastery and inner peace through our thoughtfully structured programs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* VEENA CLASS CARD */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-shadow hover:shadow-2xl">
              <div className="h-72 w-full overflow-hidden sm:h-80">
                <img 
                  src="/Rajiwith.Veena.jpg" 
                  alt="Veena Classes at Sattvalaya Arts" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <Music className="h-8 w-8 text-orange-600" />
                  <h3 className="font-serif text-3xl font-bold text-slate-900">Veena Classes</h3>
                </div>
                
                <p className="mb-8 leading-relaxed text-gray-600">
                  From beginner to advanced levels, master the divine instrument through structured learning of technique, theory, and classical compositions.
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                  <div className="flex flex-col items-center rounded-xl bg-orange-50 p-3 text-center transition-colors hover:bg-orange-100">
                    <span className="mb-1 text-xl">👥</span>
                    <span className="text-xs font-bold text-slate-800">All Levels</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-orange-50 p-3 text-center transition-colors hover:bg-orange-100">
                    <span className="mb-1 text-xl">🕒</span>
                    <span className="text-xs font-bold text-slate-800">Flexible Hours</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-orange-50 p-3 text-center transition-colors hover:bg-orange-100">
                    <span className="mb-1 text-xl">📜</span>
                    <span className="text-xs font-bold text-slate-800">Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* YOGA CLASS CARD */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-shadow hover:shadow-2xl">
              <div className="h-72 w-full overflow-hidden sm:h-80">
                <img 
                  src="/TrianglePosee.jpg" 
                  alt="Yoga and Wellness at Sattvalaya Arts" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="mb-4 flex items-center gap-3">
                  {/* FIXED SVG NAMESPACE */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  <h3 className="font-serif text-3xl font-bold text-slate-900">Yoga & Wellness</h3>
                </div>
                
                <p className="mb-8 leading-relaxed text-gray-600">
                  60-minute sessions combining Ashtanga strength building with Vinyasa flow, plus pranayama for complete mind-body harmony.
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                  <div className="flex flex-col items-center rounded-xl bg-green-50 p-3 text-center transition-colors hover:bg-green-100">
                    <span className="mb-1 text-xl">❤️</span>
                    <span className="text-xs font-bold text-slate-800">All Ages</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-green-50 p-3 text-center transition-colors hover:bg-green-100">
                    <span className="mb-1 text-xl">💻</span>
                    <span className="text-xs font-bold text-slate-800">Virtual/Live</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-green-50 p-3 text-center transition-colors hover:bg-green-100">
                    <span className="mb-1 text-xl">🎖️</span>
                    <span className="text-xs font-bold text-slate-800">Expert Led</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="bg-[#fdfbf7] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-slate-900 md:text-5xl">
              Moments of Harmony
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A glimpse into our vibrant community, dedicated practice, and the beautiful journey of learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-1.jpg" alt="Yoga Practice" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-2.jpg" alt="Meditation outdoors" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-3.jpg" alt="Playing the Veena" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-4.jpg" alt="Teacher posing with Veena" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-sm md:col-span-2">
              <img src="/gallery-5.jpg" alt="Teacher and student playing Veena" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-6.jpg" alt="Sheet music" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img src="/gallery-7.jpg" alt="Yoga pose in the mountains" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#0f172a] pt-16 pb-8 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          <div className="grid grid-cols-1 gap-12 border-b border-slate-700/50 pb-12 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2">
                  <img src="/logo.png" alt="Sattvalaya Arts Logo" className="h-10 w-auto object-contain" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white">Sattvalaya Arts</h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Nurturing the divine arts of Veena and holistic wellness since 2022
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-500">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-500">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-500">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.3 8.3 2.1 10.1 2.1 12s.2 3.7.4 4.9c.3 1.9 2 3.3 3.9 3.5 2.6.3 8.1.3 10.8 0 1.9-.2 3.6-1.6 3.9-3.5.2-1.2.4-3 .4-4.9s-.2-3.7-.4-4.9c-.3-1.9-2-3.3-3.9-3.5-2.6-.3-8.1-.3-10.8 0-1.9.2-3.6 1.6-3.9 3.5Z"/><path d="m9.6 15.5 6.4-3.5-6.4-3.5v7Z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-500">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-serif text-xl font-bold text-orange-500">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="group flex items-center text-sm transition hover:text-orange-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#classes" className="group flex items-center text-sm transition hover:text-orange-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="group flex items-center text-sm transition hover:text-orange-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#events" className="group flex items-center text-sm transition hover:text-orange-400">
                    <ChevronRight className="mr-2 h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-serif text-xl font-bold text-orange-500">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span>San Jose, California</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                  <a href="mailto:info@sattvalayaarts.com" className="transition hover:text-orange-400">info@sattvalayaarts.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                  <a href="tel:+12133044799" className="transition hover:text-orange-400">+1 (213) 304-4799</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-serif text-xl font-bold text-orange-500">Newsletter</h3>
              <p className="mb-4 text-sm text-slate-400">Subscribe for updates and events</p>
              {/* FIXED FORM COMPONENT */}
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full rounded-l-md border-none bg-white px-4 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="button" 
                  className="flex items-center justify-center rounded-r-md bg-orange-600 px-4 transition hover:bg-orange-500"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-slate-500">
            <p>
              © 2026 Copyright Sattvalaya Arts. All Rights Reserved. 
              <span className="mt-2 block sm:mt-0 sm:inline sm:ml-2">
                Crafted with <span className="text-orange-500">❤️</span> for preserving divine traditions
              </span>
            </p>
          </div>

        </div>

        {/* FLOATING WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/12133044799" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </footer>
    </div>
  );
}