"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 25, label: "škola" },
  { target: 2271, label: "zadovoljnih maturanata" },
  { target: 16000, suffix: "+", label: "isporučenih fotografija" },
];

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);

  return value;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCountUp(stat.target, run);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
        <span className="text-[#BE9E5C]">{value.toLocaleString("hr-HR")}</span>
        {stat.suffix ?? ""}
      </div>
      <p className="mt-3 text-sm md:text-base uppercase tracking-[0.14em] text-gray-500 font-medium">
        {stat.label}
      </p>
    </div>
  );
}

export default function MaturalneStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRun(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pt-8 pb-4">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8"
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </section>
  );
}
