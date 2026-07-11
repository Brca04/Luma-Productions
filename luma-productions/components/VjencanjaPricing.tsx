"use client";

import { motion, type Variants } from "framer-motion";

type Plan = {
  title: string;
  accent?: string;
  features: string[];
  price: string;
  unit?: string;
  badge?: string;
  note?: string;
};

type Group = {
  label: string;
  caption: string;
  cols?: 2 | 3;
  plans: Plan[];
};

const GOLD = "#BE9E5C";

const GROUPS: Group[] = [
  {
    label: "Paketi vjenčanja",
    caption: "Od klasične fotografije do potpune foto i video produkcije.",
    plans: [
      {
        title: "Luma",
        accent: "#1",
        price: "700",
        features: [
          "1 fotograf",
          "Do 800 digitalno obrađenih fotografija",
          "Web galerija s mogućnošću preuzimanja materijala",
        ],
      },
      {
        title: "Luma",
        accent: "#2",
        price: "1300",
        features: [
          "1 fotograf | 1 snimatelj",
          "Do 800 digitalno obrađenih fotografija",
          "Video cijele večeri u trajanju do 60 minuta",
          "Web galerija s mogućnošću preuzimanja materijala",
        ],
      },
      {
        title: "Luma",
        accent: "#3",
        price: "1900",
        badge: "Najpopularnije",
        features: [
          "1 fotograf | 2 snimatelja",
          "Do 1000 digitalno obrađenih fotografija",
          "Video cijele večeri (do 120 min) + highlight video (5 min)",
          "Web galerija s mogućnošću preuzimanja materijala",
        ],
      },
      {
        title: "Luma",
        accent: "#4",
        price: "2500",
        features: [
          "2 fotografa | 2 snimatelja",
          "Do 1800 digitalno obrađenih fotografija",
          "Video cijele večeri (do 120 min) + highlight video (5 min)",
          "Web galerija s mogućnošću preuzimanja materijala",
          "100€ popusta na photobooth",
        ],
      },
    ],
  },
  {
    label: "Dodatno",
    caption: "Nadogradite paket posebnim detaljima.",
    cols: 3,
    plans: [
      {
        title: "Photobooth",
        price: "300",
        features: [
          "6 sati na terenu",
          "Neograničen broj fotografija",
          "Razni izbor prigodnih rekvizita",
          "Izrada fotografija u fizičkom obliku",
          "Asistent za montažu i pomoć u korištenju",
        ],
      },
      {
        title: "Zahvalnice",
        price: "1",
        unit: "zahvalnici",
        features: ["Personalizirane zahvalnice za vaše goste"],
      },
      {
        title: "Dron",
        price: "100",
        features: ["Fotografiranje i snimanje dronom"],
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
        <h3
          style={{
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#111",
            lineHeight: 1.1,
            margin: 0,
            paddingRight: plan.badge ? "104px" : 0,
          }}
        >
          {plan.title}
          {plan.accent && <span style={{ color: GOLD }}> {plan.accent}</span>}
        </h3>

        <div
          style={{
            width: "42px",
            height: "3px",
            borderRadius: "2px",
            background: GOLD,
            margin: "13px 0 24px",
          }}
        />

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
            {plan.price}€{plan.unit ? ` / ${plan.unit}` : ""}
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

export default function VjencanjaPricing() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/heroVjencanja/desktop/Stjepan%26Lucija-422.jpg")' }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#BE9E5C] mb-5">
            Cjenik · Vjenčanja 2026.
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
                  <h3
                    className={`text-2xl md:text-3xl font-semibold tracking-tight ${
                      group.label === "Dodatno" ? "text-[#BE9E5C]" : "text-gray-900"
                    }`}
                  >
                    {group.label}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 font-light sm:pb-1 pl-5 sm:pl-0">
                  {group.caption}
                </p>
              </div>

              <div
                className={`grid grid-cols-1 gap-6 lg:gap-7 ${
                  group.cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {group.plans.map((plan) => (
                  <Card key={plan.title + (plan.accent ?? plan.price)} plan={plan} />
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
              Sve cijene uključuju obradu materijala i web galeriju. Termine
              rezervirajte na vrijeme — datumi su ograničeni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
