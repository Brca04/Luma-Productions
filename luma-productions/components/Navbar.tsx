'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'POČETNA', href: '/' },
    { name: 'REKLAME', href: '/reklame' },
    { name: 'MATURALNE VEČERI', href: '/maturalne-veceri' },
    { name: 'VJENČANJA', href: '/vjencanja' },
    { name: 'PHOTOBOOTH', href: '/krstenja' },
    { name: 'KONTAKT', href: '/kontakt' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="absolute w-full top-0 z-50 bg-transparent">
      <div className="px-8 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 relative">

          {/* Hamburger button - hides when menu is open */}
          <div className={`z-50 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="group relative flex h-[20px] w-[30px] flex-col justify-between focus:outline-none"
            >
              <span className="h-[1.5px] w-full bg-[#be9d5a]" />
              <span className="h-[1.5px] w-full bg-[#be9d5a]" />
              <span className="h-[2px] w-full bg-[#be9d5a]" />
            </button>
          </div>

          {/* Logo centered */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/luma-productions-logo-225x300.webp"
                width={128}
                height={160}
                className="w-32 h-40 object-contain"
                alt="Luma Productions Logo"
                priority
              />
            </Link>
          </div>

          <div className="w-[30px]" />
        </div>
      </div>

      {/* MOBILE: full-screen overlay background */}
      <div
        className={`lg:hidden fixed inset-0 z-30 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#ffffff' }}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE: full-screen menu content */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Back arrow - top left */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 left-8 flex items-center gap-2 text-[#be9d5a]/60 hover:text-[#be9d5a] transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L10 14L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Decorative top line */}
        <div className={`absolute top-28 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#be9d5a] to-transparent transition-all duration-700 ${isOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'}`} />

        <div className="flex flex-col items-center gap-1">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
              className={`relative group px-8 py-3 tracking-[0.25em] text-2xl font-light transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isActive(item.href) ? 'text-[#be9d5a]' : 'text-black/70 hover:text-black'}`}
            >
              {isActive(item.href) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#be9d5a]" />
              )}
              {item.name}
              {!isActive(item.href) && (
                <span className="absolute bottom-2 left-8 h-px bg-[#be9d5a]/60 w-0 group-hover:w-[calc(100%-4rem)] transition-all duration-500 ease-out" />
              )}
            </Link>
          ))}
        </div>

        {/* Decorative bottom line */}
        <div className={`absolute bottom-28 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#be9d5a] to-transparent transition-all duration-700 delay-300 ${isOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'}`} />
      </div>

      {/* DESKTOP: slide-in side panel */}
      <div
        className={`hidden lg:flex fixed inset-y-0 left-0 w-[340px] z-40 flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: '#ffffff', borderRight: '1px solid rgba(190,157,90,0.25)' }}
      >
        {/* Back arrow inside panel */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 flex items-center gap-2 text-[#be9d5a]/60 hover:text-[#be9d5a] transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L10 14L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex flex-col justify-center h-full px-10">
          <div className="flex flex-col gap-0">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : '0ms' }}
                className={`group relative flex items-center gap-4 py-5 border-b transition-all duration-500 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } ${
                  isActive(item.href)
                    ? 'border-[#be9d5a]/40'
                    : 'border-black/8 hover:border-[#be9d5a]/30'
                }`}
              >
                <span className="text-[#be9d5a]/40 text-xs font-light tabular-nums w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 ${
                  isActive(item.href) ? 'bg-[#be9d5a] scale-100' : 'bg-transparent scale-0 group-hover:bg-[#be9d5a]/50 group-hover:scale-100'
                }`} />

                <span className={`tracking-[0.18em] text-sm font-light transition-colors duration-300 ${
                  isActive(item.href) ? 'text-[#be9d5a]' : 'text-black/50 group-hover:text-black'
                }`}>
                  {item.name}
                </span>

                <span className="ml-auto text-[#be9d5a]/0 group-hover:text-[#be9d5a]/60 transition-all duration-300 translate-x-2 group-hover:translate-x-0 text-xs">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop overlay */}
      <div
        className={`hidden lg:block fixed inset-0 z-30 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(2px)' }}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
}