"use client";

import { motion } from "framer-motion";

export default function MaturalneTitleSection() {
  return (
    <section className="bg-black min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-8 py-20 md:py-0 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        <motion.h1
          initial={{ opacity: 0, y: 60, skewY: 3 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="m-0"
        >
          <span style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: 'clamp(4rem, 8vw, 10rem)',
            lineHeight: 0.88,
            color: '#fff',
            display: 'block',
            letterSpacing: '0.01em',
          }}>
            Maturalne
          </span>
          <span style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: 'clamp(4rem, 8vw, 10rem)',
            lineHeight: 0.88,
            color: '#BE9E5C',
            display: 'block',
            letterSpacing: '0.01em',
            marginTop: '0.05em',
          }}>
            Večeri
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: '0.01em',
            margin: 0,
          }}
        >
          Profesionalna fotografija i video produkcija koja čuva najljepše trenutke vaše maturalne večeri. Vrhunska kvaliteta, pristupačni paketi, nezaboravne uspomene.
        </motion.p>

      </div>
    </section>
  );
}
