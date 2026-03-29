"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

export default function AnimatedSectionHeading({ label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          lineHeight: 0.88,
          letterSpacing: "0.01em",
          color: "#fff",
          margin: "0 0 16px",
        }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 400,
          textTransform: "uppercase",
          color: "#BE9E5C",
          marginBottom: 0,
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
