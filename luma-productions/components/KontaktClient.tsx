"use client";

import { motion, useReducedMotion } from "framer-motion";

const INFO = [
  {
    label: "Email",
    value: "info@luma-productions.net",
    href: "mailto:info@luma-productions.net",
  },
  {
    label: "Telefon",
    value: "+385 97 6172 191",
    href: "tel:+385976172191",
  },
  {
    label: "Lokacija",
    value: "Zagreb, Hrvatska",
    href: null,
  },
  {
    label: "Radno vrijeme",
    value: "Pon–Pet: 9:00–18:00\nSub: Po dogovoru",
    href: null,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function KontaktClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Contact Section ── */}
      <section className="min-h-screen bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full px-6 pt-36 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Info cards */}
          <motion.div
            className="lg:col-span-1 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {INFO.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="group bg-white border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 p-6"
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#BE9E5C" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm leading-relaxed font-medium break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed font-medium whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="bg-white border-2 border-gray-100 p-8">
              <h3 className="text-2xl font-bold mb-2">Kontaktirajte nas</h3>
              <p className="text-gray-500 text-sm mb-8">Javit ćemo vam se u najkraćem mogućem roku.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField id="name" label="Ime *" type="text" placeholder="Vaše ime" />
                  <FormField id="lastname" label="Prezime *" type="text" placeholder="Vaše prezime" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField id="email" label="Email *" type="email" placeholder="vas@email.com" />
                  <FormField id="phone" label="Telefon" type="tel" placeholder="+385 XX XXX XXXX" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                    Vrsta usluge *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all text-gray-700 text-sm"
                  >
                    <option value="">Odaberite...</option>
                    <option value="vjencanje">Vjenčanje</option>
                    <option value="maturalna">Maturalna večer</option>
                    <option value="krstenje">Krštenje / Photobooth</option>
                    <option value="reklama">Reklama / Komercijalno</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Opišite svoj projekt..."
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all resize-none text-gray-700 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-900 font-semibold text-gray-900 bg-white transition-all duration-300 hover:bg-gray-900 hover:text-white text-sm tracking-wide"
                >
                  Pošalji poruku
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
      </section>
    </div>
  );
}

function FormField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={label.includes("*")}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-all text-gray-700 text-sm"
      />
    </div>
  );
}
