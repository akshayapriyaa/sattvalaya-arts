"use client";
import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#F8F9FA] pt-20 pb-10 text-slate-600 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-200 pb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Sattvalaya Arts Logo" className="h-12 w-auto object-contain" />
              <h2 className="font-serif text-2xl font-medium text-slate-900">Sattvalaya Arts</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Nurturing the divine arts of Veena and holistic wellness through mindful, premium instruction.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Minimalist Social SVGs */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-[#B4C4D9] hover:text-white">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-all hover:bg-[#B4C4D9] hover:text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-medium text-slate-900">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="group flex items-center text-sm transition hover:text-slate-900"><ChevronRight className="mr-2 h-4 w-4 text-[#B4C4D9] transition-transform group-hover:translate-x-1" />About Us</Link></li>
              <li><Link href="/classes" className="group flex items-center text-sm transition hover:text-slate-900"><ChevronRight className="mr-2 h-4 w-4 text-[#B4C4D9] transition-transform group-hover:translate-x-1" />Classes</Link></li>
              <li><Link href="/gallery" className="group flex items-center text-sm transition hover:text-slate-900"><ChevronRight className="mr-2 h-4 w-4 text-[#B4C4D9] transition-transform group-hover:translate-x-1" />Gallery</Link></li>
              <li><Link href="/contact" className="group flex items-center text-sm transition hover:text-slate-900"><ChevronRight className="mr-2 h-4 w-4 text-[#B4C4D9] transition-transform group-hover:translate-x-1" />Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-medium text-slate-900">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B4C4D9]" /><span>San Jose, California</span></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-[#B4C4D9]" /><a href="mailto:info@sattvalayaarts.com" className="transition hover:text-slate-900">info@sattvalayaarts.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-[#B4C4D9]" /><a href="tel:+12133044799" className="transition hover:text-slate-900">+1 (213) 304-4799</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-medium text-slate-900">Stay Connected</h3>
            <p className="mb-4 text-sm text-slate-500">Subscribe for wellness updates and events.</p>
            <div className="flex shadow-sm rounded-md overflow-hidden">
              <input type="email" placeholder="Your email" className="w-full border-none bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#B4C4D9]" />
              <button type="button" className="flex items-center justify-center bg-slate-900 px-5 transition hover:bg-slate-800" aria-label="Subscribe"><Send className="h-4 w-4 text-white" /></button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>© 2026 Copyright Sattvalaya Arts. All Rights Reserved. The union of sound and stillness.</p>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON - Kept green for brand recognition, but softened the shadow */}
      <a href="https://wa.me/12133044799" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/20 transition-transform hover:-translate-y-1 hover:scale-105" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>
    </footer>
  );
}