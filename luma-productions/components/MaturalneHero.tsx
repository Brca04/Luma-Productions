export default function MaturalneHero() {
  return (
    <section className="relative h-[100dvh] overflow-hidden bg-black">
      <style>{`
        @keyframes hRise { from { opacity:0; transform: translateY(42px); } to { opacity:1; transform: translateY(0); } }
        @keyframes hFade { from { opacity:0; } to { opacity:1; } }
        @keyframes hScroll { 0%,100% { transform: translateY(0); opacity:1; } 50% { transform: translateY(8px); opacity:0.3; } }
        .h-eyebrow { font-size:0.72rem; font-weight:600; letter-spacing:0.34em; text-transform:uppercase; color:#BE9E5C; margin:0; opacity:0; animation:hFade 0.8s ease 0.3s forwards; }
        .h-title { font-size:clamp(3.5rem, 9vw, 8rem); font-weight:600; line-height:0.98; letter-spacing:-0.02em; color:#fff; margin:1.3rem 0 0; }
        .h-title .l1 { display:block; opacity:0; animation:hRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards; }
        .h-title .l2 { display:block; color:#BE9E5C; opacity:0; animation:hRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.68s forwards; }
        .h-divider { width:64px; height:1px; background:rgba(190,158,92,0.65); margin:1.9rem auto 0; opacity:0; animation:hFade 1s ease 0.95s forwards; }
        .h-sub { font-size:clamp(1rem, 1.9vw, 1.12rem); font-weight:300; line-height:1.8; color:rgba(255,255,255,0.72); max-width:38rem; margin:1.6rem auto 0; opacity:0; animation:hFade 1s ease 1.05s forwards; }
        .h-scroll { position:absolute; bottom:max(2rem, env(safe-area-inset-bottom, 0px) + 1.5rem); left:0; right:0; width:fit-content; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:8px; z-index:10; opacity:0; animation:hFade 0.8s ease 1.7s forwards; }
        .h-scroll-label { font-size:0.6rem; font-weight:500; letter-spacing:0.3em; text-transform:uppercase; color:rgba(255,255,255,0.45); }
        .h-scroll-dot { width:4px; height:4px; border-radius:50%; background:#BE9E5C; animation:hScroll 1.6s ease-in-out 2s infinite; }
      `}</style>

      {/* Background image */}
      <picture>
        {/* Portrait crop for phones */}
        <source
          media="(max-width: 767px)"
          srcSet="/heroMaturalne/mobile/LumaProductions_Photobooth%20-%2056.jpg"
        />
        <img
          src="/heroHompage/desktop/MaturalnaVe%C4%8Der_%20%C5%A0pogi%20-%20317.jpg"
          alt="Maturalna večer"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </picture>

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
        <p className="h-eyebrow">Fotografija &amp; Video · Matura 2026</p>
        <h1 className="h-title">
          <span className="l1">Maturalne</span>
          <span className="l2">Večeri</span>
        </h1>
        <div className="h-divider" />
        <p className="h-sub">
          Profesionalna fotografija i video produkcija koja čuva najljepše
          trenutke vaše maturalne večeri. Vrhunska kvaliteta, pristupačni
          paketi, nezaboravne uspomene.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="h-scroll">
        <span className="h-scroll-label">dolje</span>
        <div className="h-scroll-dot" />
      </div>
    </section>
  );
}
