"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GOLD = "#BE9E5C";

type MaturalneCTAProps = {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
};

export default function MaturalneCTA({
  eyebrow = "Vaša večer, naš zadatak",
  heading = "Rezervirajte vaš datum",
  subtitle = "Slobodnih termina je sve manje, osigurajte termin za svoj razred na vrijeme.",
}: MaturalneCTAProps = {}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "#ffffff",
        textAlign: "center",
        padding: "clamp(5rem, 12vw, 8rem) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "44rem", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: GOLD,
            margin: "0 0 1.75rem",
          }}
        >
          {eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.75rem, 7vw, 4.75rem)",
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "#111",
            margin: 0,
          }}
        >
          {heading}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            lineHeight: 1.7,
            fontWeight: 300,
            color: "rgba(0,0,0,0.55)",
            margin: "1.75rem auto 0",
            maxWidth: "34rem",
          }}
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          <Link
            href="/kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "min(100%, 20rem)",
              minHeight: "60px",
              background: GOLD,
              color: "#111",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 8px 24px -6px rgba(190,158,92,0.55)",
              transition: "background 0.25s, transform 0.2s, box-shadow 0.25s",
              WebkitTapHighlightColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#a9884a";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 30px -6px rgba(190,158,92,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = GOLD;
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px -6px rgba(190,158,92,0.55)";
            }}
          >
            Pošalji upit
          </Link>

          <a
            href="tel:+385976172191"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "min(100%, 20rem)",
              minHeight: "60px",
              background: "transparent",
              color: "#111",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.25s, border-color 0.25s",
              WebkitTapHighlightColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.2)";
            }}
          >
            Nazovite nas
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
