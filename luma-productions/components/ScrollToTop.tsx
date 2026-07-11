"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // If the URL has a hash (e.g. #portfolio), let the anchor navigation
    // handle scrolling — don't force the page back to the top.
    if (typeof window !== "undefined" && window.location.hash) return;
    // "instant" avoids a visible jump animation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}