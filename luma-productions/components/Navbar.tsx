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
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24 relative">

          {/* Hamburger — 44×44 touch target */}
          <div className={`z-50 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-11 h-11 -ml-2 focus:outline-none"
            >
              <span className="flex flex-col justify-between w-[26px] h-[18px]">
                <span className="h-[1.5px] w-full bg-[#be9d5a]" />
                <span className="h-[1.5px] w-full bg-[#be9d5a]" />
                <span className="h-[1.5px] w-full bg-[#be9d5a]" />
              </span>
            </button>
          </div>

          {/* Logo centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/luma-productions-logo-225x300.webp"
                width={128}
                height={160}
                className="w-20 h-24 md:w-28 md:h-36 object-contain"
                alt="Luma Productions Logo"
                priority
              />
            </Link>
          </div>

          <div className="w-11" />
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
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Close button — 44×44 touch target */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute flex items-center justify-center w-11 h-11 text-[#be9d5a]/60 hover:text-[#be9d5a] transition-colors duration-300"
          style={{
            top: 'max(1.5rem, calc(env(safe-area-inset-top, 0px) + 0.75rem))',
            left: '1.5rem',
          }}
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18 6L10 14L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Decorative top line */}
        <div className={`absolute left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#be9d5a] to-transparent transition-all duration-700 ${isOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
          style={{ top: 'max(7rem, calc(env(safe-area-inset-top, 0px) + 5rem))' }}
        />

        <div className="flex flex-col items-center gap-0 w-full px-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
              className={`relative group flex items-center justify-center w-full py-4 tracking-[0.25em] text-xl font-light transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isActive(item.href) ? 'text-[#be9d5a]' : 'text-black/70 hover:text-black'}`}
            >
              {isActive(item.href) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#be9d5a]" />
              )}
              {item.name}
              {!isActive(item.href) && (
                <span className="absolute bottom-2.5 left-0 h-px bg-[#be9d5a]/60 w-0 group-hover:w-full transition-all duration-500 ease-out" />
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
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 flex items-center justify-center w-11 h-11 text-[#be9d5a]/60 hover:text-[#be9d5a] transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
