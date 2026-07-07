"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Stranice na kojima se gumb NE prikazuje.
const HIDE_EXACT = ["/", "/kontakt"];
const HIDE_PREFIX = ["/krstenja", "/sveto-krstenje"];

export default function ReserveButton() {
  const pathname = usePathname() || "/";

  const hidden =
    HIDE_EXACT.includes(pathname) ||
    HIDE_PREFIX.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (hidden) return null;

  return (
    <Link
      href="/kontakt"
      aria-label="Rezervirajte svoj datum"
      style={{
        position: "fixed",
        top: "max(1.25rem, env(safe-area-inset-top, 0px) + 0.75rem)",
        right: "max(1.25rem, env(safe-area-inset-right, 0px) + 0.75rem)",
        zIndex: 30,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px 34px",
        background: "#BE9E5C",
        color: "#111",
        borderRadius: "9999px",
        fontSize: "0.9rem",
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        boxShadow: "0 10px 30px -6px rgba(190,158,92,0.55)",
        transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "#a9884a";
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 14px 36px -6px rgba(190,158,92,0.65)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "#BE9E5C";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 10px 30px -6px rgba(190,158,92,0.55)";
      }}
    >
      Rezervirajte svoj datum
    </Link>
  );
}
