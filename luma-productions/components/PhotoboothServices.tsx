"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const GOLD = "#BE9E5C";

type Service = {
  label: string;
  description: string;
  badge?: string;
};

const SERVICES: Service[] = [
  {
    label: "Print fotografija",
    description:
      "Ispišite svoje fotografije u manje od 10 sekundi. Uživajte u trenutku dok vaša uspomena postaje stvarna. Svaka fotografija ispisana je na premium foto papiru vrhunske kvalitete. Brza, jednostavna i savršena uspomena koju možete ponijeti sa sobom.",
  },
  {
    label: "Rekviziti",
    description:
      "Veliki izbor zabavnih rekvizita za sve prigode. Vjenčanja, korporativna događanja i više. Dodajte smijeh i kreativnost svakoj fotografiji. Svaka slika postaje nezaboravan trenutak!",
  },
  {
    label: "Pozadine",
    description:
      "Birajte između nekoliko različitih pozadina, prilagođenih svakoj prilici. Stvaraju savršenu scenu i dodaju karakter fotografijama.",
  },
  {
    label: "Dizajn fotografija",
    description:
      "Personaliziramo okvir fotografija prema vašim željama, uključujući imena, datume i posebne grafike.",
  },
  {
    label: "Online galerija",
    description:
      "Sve fotografije zabilježene tijekom večeri dostupne su u online galeriji. Gosti ih mogu pregledavati i dijeliti u bilo kojem trenutku. Uživajte u uspomenama dugo nakon događaja!",
  },
];

export default function PhotoboothServices() {
  const [active, setActive] = useState(0);
  const item = SERVICES[active];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 mb-16">
          <div className="lg:max-w-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
              Usluge
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Photobooth <span className="text-[#BE9E5C]">usluge</span>
            </h2>
            <div className="w-12 h-px bg-[#BE9E5C] mt-6" />
          </div>
          <div className="max-w-2xl lg:pt-2">
            <p className="text-lg text-gray-600 leading-[1.8] font-light">
              LumaProductions photobooth uključuje sve što vam treba za zabavan
              trenutak fotkanja — od instant ispisa do online galerije.
            </p>
          </div>
        </div>

        {/* Tabs + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          {/* Left: tab list */}
          <div className="flex flex-col gap-3">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex items-center w-full text-left px-6 py-4 rounded-xl border transition-colors duration-200 ${
                    isActive
                      ? "border-[#BE9E5C] bg-[#BE9E5C]/[0.06] text-gray-900"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`text-sm tracking-tight ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: content */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_16px_44px_-30px_rgba(0,0,0,0.35)] p-8 md:p-10 min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 flex-wrap mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                    {item.label}
                  </h3>
                  {item.badge && (
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
                      style={{
                        color: GOLD,
                        background: "rgba(190,158,92,0.08)",
                        border: `1px solid rgba(190,158,92,0.4)`,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="w-10 h-px bg-[#BE9E5C] mb-6" />
                <p className="text-lg text-gray-600 leading-[1.8] font-light">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
