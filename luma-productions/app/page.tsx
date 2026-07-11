"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

import SectionHero from "@/components/SectionHero";
import { maturalneItems } from "@/app/maturalne-veceri/data";

const HERO_IMAGES = [
  "/heroHompage/desktop/Lucija%26Ante%20-%20138.jpg",
  "/heroHompage/desktop/MaturalnaVe%C4%8Der_%20%C5%A0pogi%20-%20317.jpg",
  "/heroHompage/desktop/SvetoKr%C5%A1tenje%C5%A0imun_%20-%203.jpg",
];

// Portrait crops that fit tall phone screens better.
const HERO_IMAGES_MOBILE = [
  "/vjencanja/Stjepan%26Lucija/Stjepan%26Lucija-141.jpg",
  "/maturalne/geodetska/MaturalnaVe%C4%8Der_%20Geodetska%20-%201.jpg",
  "/krstenja/Andro/Sveto_kr%C5%A1tenje_Andro%20%20-%201.jpg",
];

export default function Home() {
  // Memoize arrays to avoid re-creating them on every render (small Lighthouse win)
  const services = useMemo(
    () => [
      {
        title: "Maturalne Večeri",
        description: "Uhvatite najljepše trenutke vaše maturalne večeri",
        href: "/maturalne-veceri",
        image: "/menuImages/MaturalnaVe%C4%8Der_%20Titu%C5%A1-%20615.jpg",
      },
      {
        title: "Vjenčanja",
        description: "Vječno sačuvajte najvažnji dan vašeg života",
        href: "/vjencanja",
        image: "/menuImages/Lucija%26Ante%20-%20208.jpg",
      },
      {
        title: "Sveto Krštenje",
        description: "Diskretna fotografija obreda i obiteljskog slavlja",
        href: "/sveto-krstenje",
        image: "/menuImages/Sveto_kr%C5%A1tenje_Andro%20%20-%2098.jpg",
      },
      {
        title: "Najam Photobooth-a",
        description: "Posebni obiteljski trenuci zaslužuju posebnu pažnju",
        href: "/krstenja",
        image: "/menuImages/MaturalnaVe%C4%8Der_%20GGG%20-%20473.jpg",
      },
    ],
    []
  );

  // Latest work — links to the real maturalne galleries.
  const latestWorks = useMemo(
    () =>
      maturalneItems.slice(0, 4).map((m) => ({
        name: m.name,
        category: m.category,
        coverImage: m.coverImage,
        href: `/maturalne-veceri/${m.slug}`,
      })),
    []
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        titleTop="Luma"
        titleBottom="Productions"
        description=""
        images={HERO_IMAGES}
        mobileImages={HERO_IMAGES_MOBILE}
        imageAlt="Luma Productions"
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20">
            {/* Left — kicker + heading */}
            <div className="lg:max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
                Dobrodošli
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Svaka priča{" "}
                <span className="text-[#BE9E5C]">zaslužuje kadar</span>
              </h2>
            </div>

            {/* Right — paragraphs */}
            <div className="space-y-6 max-w-2xl lg:pt-2">
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Luma Productions je kreativni tim posvećen fotografiji i video
                produkciji koja čuva vaše najvažnije trenutke. Od intimnih
                obiteljskih slavlja do velikih komercijalnih projekata,
                pristupamo svakom zadatku s jednakom strašću i pažnjom za
                detalje.
              </p>
              <p className="text-lg text-gray-600 leading-[1.8] font-light">
                Naša filozofija je jednostavna: svaki trenutak priča priču, a
                mi smo tu da ju zabilježimo — autentično, estetski, i s
                posvećenošću koja se vidi u svakom kadru.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-0 pb-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20">
            {/* Left — kicker + heading */}
            <div className="lg:max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-4">
                Što radimo
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Naše <span className="text-[#BE9E5C]">usluge</span>
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariant}>
              <Link
                href={service.href}
                className="group block bg-white overflow-hidden rounded-3xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="relative h-72 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      // Lighthouse: give sizes so Next can serve smaller images
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      // Non-LCP images should be lazy (default), but being explicit is fine:
                      loading="lazy"
                      quality={80}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-center">
                      <span className="text-gray-400 text-xl font-semibold">Uskoro</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#BE9E5C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-[1.8] font-light">{service.description}</p>
                  <div className="mt-4 flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 group-hover:text-[#BE9E5C] transition-colors">
                    Saznaj više
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Latest Work Section */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 mb-12">
              {/* Left — kicker + heading */}
              <div className="lg:max-w-sm">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                  Najnoviji <span className="text-[#BE9E5C]">radovi</span>
                </h2>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {latestWorks.map((work) => (
              <motion.div key={work.href} variants={cardVariant}>
                <Link
                  href={work.href}
                  className="relative block h-[400px] bg-gray-200 overflow-hidden group cursor-pointer rounded-3xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-1"
                >
                  <Image
                    src={work.coverImage}
                    alt={work.name}
                    fill
                    loading="lazy"
                    quality={80}
                    // Lighthouse: correct sizes makes a big difference
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BE9E5C] mb-1">
                      {work.category}
                    </p>
                    <p className="text-white text-lg font-semibold tracking-tight">{work.name}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
