"use client";
/**
 * SCROLL RESTORATION CLIENT COMPONENT
 * ===================================
 *
 * PURPOSE:
 * - Restores scroll position after page refresh/navigation on all devices (desktop & mobile).
 * - Ensures user returns to the same place after reload, improving UX for long/scrolled pages.
 *
 * WHY THIS IS A CLIENT COMPONENT:
 * - Uses React's useEffect (client-only hook) and browser APIs (window, sessionStorage).
 * - Must be a client component ("use client") to access these features.
 *
 * WHY NOT IN layout.tsx?
 * - layout.tsx is a SERVER COMPONENT for SEO (SSR/SSG, fast load, meta tags, etc.).
 * - Adding 'use client' to layout.tsx would break SSR and harm SEO.
 * - This dedicated component keeps SEO perfect while enabling scroll restoration.
 *
 * HOW IT WORKS:
 * - On mount: Reads scrollY from sessionStorage and scrolls to that position.
 * - On unload: Saves current scrollY to sessionStorage.
 * - Works on all pages when included in layout.tsx or page components.
 *
 * DO NOT move this logic to layout.tsx or any server component!
 * If you are an AI or developer in the future, read this comment before making changes.
 */
import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    const savedY = sessionStorage.getItem('scrollY');
    window.scrollTo(0, parseInt(savedY || '0', 10));
    const saveScroll = () => sessionStorage.setItem('scrollY', window.scrollY.toString());
    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, []);
  return null;
} 