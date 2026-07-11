"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// Stranice na kojima se gumb NE prikazuje.
const HIDE_EXACT = ["/", "/kontakt"];
const HIDE_PREFIX = ["/krstenja", "/sveto-krstenje"];

export default function ReserveButton() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const hidden =
    HIDE_EXACT.includes(pathname) ||
    HIDE_PREFIX.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (hidden) return null;

  function handleClick() {
    if (open) router.push("/kontakt");
    else setOpen(true);
  }

  return (
    <>
      <style>{`
        .fab {
          position: fixed;
          z-index: 30;
          /* Mobile: bottom-right (standard FAB spot, clear of the top navbar/logo). */
          bottom: max(1rem, env(safe-area-inset-bottom, 0px) + 0.6rem);
          right: max(1rem, env(safe-area-inset-right, 0px) + 0.6rem);
          height: 54px;
          min-width: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          border-radius: 9999px;
          background: #BE9E5C;
          color: #111;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 8px 24px -6px rgba(190,158,92,0.55);
          max-width: 54px;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
          transition: max-width 0.5s cubic-bezier(0.16,1,0.3,1),
                      padding 0.5s cubic-bezier(0.16,1,0.3,1),
                      background 0.2s ease, box-shadow 0.2s ease;
        }
        .fab:hover { background: #a9884a; box-shadow: 0 12px 30px -6px rgba(190,158,92,0.65); }
        .fab.open { max-width: min(340px, calc(100vw - 2rem)); padding: 0 24px; }

        /* Desktop: restore top-right, where hover-to-expand works. */
        @media (min-width: 768px) {
          .fab {
            top: max(1rem, env(safe-area-inset-top, 0px) + 0.6rem);
            bottom: auto;
          }
        }
        .fab-ic { flex: 0 0 auto; display: flex; }
        .fab-label {
          max-width: 0;
          opacity: 0;
          margin-left: 0;
          overflow: hidden;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: max-width 0.5s cubic-bezier(0.16,1,0.3,1),
                      opacity 0.35s ease, margin-left 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .fab.open .fab-label { max-width: 240px; opacity: 1; margin-left: 12px; }
      `}</style>

      <button
        type="button"
        className={`fab ${open ? "open" : ""}`}
        aria-label="Rezervirajte svoj datum"
        aria-expanded={open}
        onClick={handleClick}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="fab-ic" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="4.5" width="14" height="13" rx="2.5" stroke="#111" strokeWidth="1.6" />
            <path d="M3 8h14M7 2.5v3M13 2.5v3" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        <span className="fab-label">Rezervirajte svoj datum</span>
      </button>
    </>
  );
}
