"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

function normalizeHref(href: string) {
  return href.split('#')[0] || '/';
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100/50 bg-[#FCFBFA]/90 backdrop-blur-md px-6 py-4 md:px-10 md:py-5 shadow-sm shadow-slate-100/50">
      <Link href="/" className="flex items-center gap-5 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4C4D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFBFA]">
        <img src="/logo.png" alt="Sattvalaya Arts Logo" className="h-14 w-auto object-contain" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sattvalaya Arts</h1>
          {/* Editorial Font Pairing for the subtitle */}
          <p className="text-sm font-serif italic tracking-wide text-slate-500">Harmony of sound and soul</p>
        </div>
      </Link>
      
      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map(({ href, label }) => {
          const isActive = normalizeHref(href) === pathname && !href.includes('#');
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`relative py-1 transition-all duration-300 ${
                isActive
                  ? 'font-medium text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#B4C4D9]'
                  : 'font-medium text-slate-400 hover:text-slate-900'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4C4D9] focus-visible:ring-offset-4`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}