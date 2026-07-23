"use client";

import { motion, type Variants } from "framer-motion";

type Plan = {
  title: string;
  accent?: string;
  features: string[];
  price: string;
  unit: string;
  badge?: string;
  note?: string;
};

type Group = {
  label: string;
  caption: string;
  plans: Plan[];
  stacked?: boolean;
};

const GOLD = "#BE9E5C";

const GROUPS: Group[] = [
  {
    label: "Foto ponuda",
    caption: "",
    plans: [
      {
        title: "Foto",
        accent: "#1",
        price: "8",
        unit: "maturantu",
        features: [
          "1 fotograf",
          "Do 30 maturanata",
          "Do 200 digitalno obrađenih fotografija",
          "Isporuka materijala unutar 3 dana",
          "Vrijeme na terenu od ulaska do 22h",
        ],
      },
      {
        title: "Foto",
        accent: "#2",
        price: "4",
        unit: "maturantu",
        features: [
          "1 fotograf",
          "30+ maturanata",
          "Do 800 digitalno obrađenih fotografija",
          "Isporuka materijala unutar 4 dana",
          "Vrijeme na terenu, 30 minuta prije ulaska do 01:00h",
        ],
      },
    ],
  },
  {
    label: "Mix ponuda",
    caption: "",
    plans: [
      {
        title: "Mix",
        accent: "#1",
        price: "8",
        unit: "maturantu",
        features: [
          "1 fotograf | 1 snimatelj",
          "Highlight video u trajanju do 15 minuta",
          "Do 600 digitalno obrađenih fotografija",
          "Isporuka materijala unutar 7 dana",
          "Vrijeme na terenu, 30 minuta prije ulaska do 01:00h",
        ],
      },
      {
        title: "Mix",
        accent: "#2",
        price: "10",
        unit: "maturantu",
        badge: "Najpopularnije",
        features: [
          "1 fotograf | 2 snimatelja",
          "Highlight video u trajanju do 60 minuta",
          "Do 800 digitalno obrađenih fotografija",
          "Isporuka materijala unutar 7 dana",
          "Vrijeme na terenu, 30 minuta prije ulaska do 01:00h",
          "Minimalan broj maturanata je 80",
        ],
      },
    ],
  },
  {
    label: "Dodatno",
    caption: "",
    stacked: true,
    plans: [
      {
        title: "Photobooth",
        price: "4",
        unit: "maturantu",
        badge: "Maturanti preporučuju",
        note: "Uspomena koju odmah nosiš kući.",
        features: [
          "Do 5 sati na terenu",
          "Asistent za pomoć i vođenje",
          "Neograničen ispis fotografija",
          "Veliki izbor prigodnih rekvizita za zabavne i kreativne fotografije",
          "Odabir pozadine po želji",
          "Odabir formata slike između 10x15cm te 5x11cm",
          "Izrada fotografija u fizičkom obliku",
        ],
      },
      {
        title: "Poklon book za razrednika",
        price: "300",
        unit: "razredu",
        note: "Maturanti kroz školsku godinu prikupe svoje najljepše fotografije — s putovanja, izleta i razrednih druženja — te nam pošalju do 100 njih. Sve ostalo je na nama. Fotografije printamo na premium foto papiru i ručno uvezujemo u personalizirani photobook s imenom razreda i godinom generacije na koricama. Book donosimo gotov na maturalnu večer, kao poklon za razrednika. Uz svaku fotografiju predviđen je prostor za osobne poruke, posvete i dodatne fotografije s photobootha.",
        features: [
          "Do 100 fotografija koje maturanti sami odaberu i pošalju",
          "Personalizirani photobook s imenom razreda i godinom generacije na koricama",
          "Premium foto papir i ručna izrada",
          "Prostor za osobne poruke, posvete te fotografije sa maturalne večeri",
          "Isporuka gotovog booka na maturalnu večer",
        ],
      },
    ],
  },
];

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
};

function Card({ plan }: { plan: Plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.09)",
        borderLeft: `3px solid ${GOLD}`,
        borderRadius: "14px",
        boxShadow: "0 16px 44px -30px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {plan.badge && (
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "9.5px",
            fontWeight: 600,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: GOLD,
            background: "rgba(190,158,92,0.08)",
            border: `1px solid rgba(190,158,92,0.4)`,
            borderRadius: "999px",
            padding: "5px 11px",
          }}
        >
          {plan.badge}
        </span>
      )}

      <div
        style={{
          padding: "30px 30px 28px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(22px, 6vw, 30px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#111",
            lineHeight: 1.1,
            margin: 0,
            paddingRight: plan.badge ? "104px" : 0,
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {plan.title}
          {plan.accent && <span style={{ color: GOLD }}> {plan.accent}</span>}
        </h3>

        {/* Gold underline */}
        <div
          style={{
            width: "42px",
            height: "3px",
            borderRadius: "2px",
            background: GOLD,
            margin: "13px 0 24px",
          }}
        />

        {/* Features */}
        <motion.ul
          style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plan.features.map((f, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontSize: "15px",
                  lineHeight: 1.45,
                  flexShrink: 0,
                }}
              >
                •
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.62)",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {f}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Price footer */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "22px",
            borderTop: "1px solid rgba(190,158,92,0.28)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: GOLD,
            }}
          >
            {plan.price}€ / {plan.unit}
          </span>
          {plan.note && (
            <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                color: "rgba(0,0,0,0.42)",
                lineHeight: 1.55,
                margin: "12px 0 0",
              }}
            >
              {plan.note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function MaturalnePricing() {
  return (
    <section className="bg-white pt-6 pb-24 lg:pt-8 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#BE9E5C] mb-5">
            Cjenik · Šk. god. 2026./2027.
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
            Odaberite <span className="text-[#BE9E5C]">svoj paket</span>
          </h2>
          <div className="w-12 h-px bg-[#BE9E5C] mx-auto mt-7" />
        </div>

        <div className="space-y-20">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-9">
                <div className="flex items-center gap-3.5">
                  <span className="w-1.5 h-7 rounded-full bg-[#BE9E5C]" />
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                    {group.label}
                  </h3>
                </div>
                {group.caption && (
                  <p className="text-sm text-gray-400 font-light sm:pb-1 pl-5 sm:pl-0">
                    {group.caption}
                  </p>
                )}
              </div>

              <div
                className={`grid grid-cols-1 gap-6 lg:gap-7 ${
                  group.stacked ? "" : "md:grid-cols-2"
                }`}
              >
                {group.plans.map((plan) => (
                  <Card key={plan.title + (plan.accent ?? "")} plan={plan} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4 px-7 py-5 rounded-2xl border border-[#BE9E5C]/25 bg-white shadow-[0_16px_44px_-30px_rgba(0,0,0,0.35)] max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] whitespace-nowrap border-r border-[#BE9E5C]/25 pr-4">
              Napomena
            </span>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Uplata 25% po završetku dogovora. Ostatak plaćanja na dan maturalne
              večeri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
