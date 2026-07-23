"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS, type FaqItem } from "./faqData";

const GOLD = "#BE9E5C";

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 }}
      className="border-b border-gray-200"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left py-6"
      >
        <span className="text-lg md:text-xl font-medium tracking-tight text-gray-900">
          {item.question}
        </span>
        <span
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300"
          style={{
            border: `1px solid ${GOLD}`,
            color: GOLD,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-base text-gray-600 leading-[1.8] font-light">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqClient() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
            Česta <span className="text-[#BE9E5C]">pitanja</span>
          </h1>
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FaqRow key={item.question} item={item} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-light mb-6">
            Niste pronašli odgovor? Rado ćemo pomoći.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center min-h-[56px] px-10 rounded-full text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#111] transition-colors"
            style={{ background: GOLD }}
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </div>
  );
}
