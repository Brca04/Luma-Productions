"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SectionHeroProps = {
  titleTop: string;
  titleBottom: string;
  description: string;
  eyebrow?: string;
  videoSrc?: string;
  images?: string[];
  mobileImages?: string[];
  imageAlt?: string;
};

export default function SectionHero({
  titleTop,
  titleBottom,
  description,
  eyebrow,
  videoSrc,
  images,
  mobileImages,
  imageAlt = "",
}: SectionHeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Switch to the mobile image set on small (portrait) screens.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const activeImages =
    isMobile && mobileImages && mobileImages.length > 0 ? mobileImages : images;

  // Reset to the first slide whenever the active set changes.
  useEffect(() => {
    setCurrentImage(0);
  }, [isMobile]);

  useEffect(() => {
    if (!activeImages || activeImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % activeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeImages]);

  return (
    <section className="relative h-[100dvh] overflow-hidden bg-black">
      <style>{`
        @keyframes hRise { from { opacity:0; transform: translateY(42px); } to { opacity:1; transform: translateY(0); } }
        @keyframes hFade { from { opacity:0; } to { opacity:1; } }
        @keyframes hScroll { 0%,100% { transform: translateY(0); opacity:1; } 50% { transform: translateY(8px); opacity:0.3; } }
        .sh-eyebrow { font-size:0.72rem; font-weight:600; letter-spacing:0.34em; text-transform:uppercase; color:#BE9E5C; margin:0; opacity:0; animation:hFade 0.8s ease 0.3s forwards; }
        .sh-title { font-size:clamp(3rem, 7.5vw, 6.5rem); font-weight:600; line-height:0.98; letter-spacing:-0.02em; color:#fff; margin:1.3rem 0 0; }
        .sh-title .l1 { display:block; opacity:0; animation:hRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards; }
        .sh-title .l2 { display:block; color:#BE9E5C; opacity:0; animation:hRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.68s forwards; }
        .sh-divider { width:64px; height:1px; background:rgba(190,158,92,0.65); margin:1.9rem auto 0; opacity:0; animation:hFade 1s ease 0.95s forwards; }
        .sh-sub { font-size:clamp(1rem, 1.9vw, 1.12rem); font-weight:300; line-height:1.8; color:rgba(255,255,255,0.72); max-width:38rem; margin:1.6rem auto 0; opacity:0; animation:hFade 1s ease 1.05s forwards; }
        .sh-scroll { position:absolute; bottom:max(2rem, env(safe-area-inset-bottom, 0px) + 1.5rem); left:0; right:0; width:fit-content; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:8px; z-index:10; opacity:0; animation:hFade 0.8s ease 1.7s forwards; }
        .sh-scroll-label { font-size:0.6rem; font-weight:500; letter-spacing:0.3em; text-transform:uppercase; color:rgba(255,255,255,0.45); }
        .sh-scroll-dot { width:4px; height:4px; border-radius:50%; background:#BE9E5C; animation:hScroll 1.6s ease-in-out 2s infinite; }
        .sh-bg { position:absolute; inset:0; }
        .sh-img { position:absolute; inset:0; transition:opacity 2.5s ease; }
      `}</style>

      {/* Background: video or rotating images */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : activeImages && activeImages.length > 0 ? (
        <div className="sh-bg">
          {activeImages.map((src, i) => (
            <div key={src} className="sh-img" style={{ opacity: i === currentImage ? 1 : 0 }}>
              <Image
                src={src}
                alt={i === currentImage ? imageAlt : ""}
                fill
                priority={i === 0}
                sizes="100vw"
                quality={85}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      {/* Scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 5,
        }}
      />

      {/* Centered content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        {eyebrow && <p className="sh-eyebrow">{eyebrow}</p>}
        <h1 className="sh-title">
          <span className="l1">{titleTop}</span>
          {titleBottom && <span className="l2">{titleBottom}</span>}
        </h1>
        {description && <div className="sh-divider" />}
        {description && <p className="sh-sub">{description}</p>}
      </div>

      {/* Scroll indicator */}
      <div className="sh-scroll">
        <span className="sh-scroll-label">scroll</span>
        <div className="sh-scroll-dot" />
      </div>
    </section>
  );
}
