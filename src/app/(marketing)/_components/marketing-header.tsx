"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang, T } from "./lang-context";

const HumanLayerMark = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="23" height="23" rx="6.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5"/>
    <rect x="6.5" y="7" width="15" height="5.5" rx="2" fill="var(--mkt-text3)"/>
    <rect x="6.5" y="15.5" width="15" height="5.5" rx="2" fill="var(--mkt-accent)"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const navLinks = [
  { href: "#probleme", fr: "Le problème", en: "The problem" },
  { href: "#fonctionnement", fr: "Comment ça marche", en: "How it works" },
  { href: "#tarifs", fr: "Tarifs", en: "Pricing" },
  { href: "#reviewers", fr: "Reviewers", en: "Reviewers" },
];

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "background .25s var(--ease), border-color .25s var(--ease)",
          ...(scrolled ? {
            background: "oklch(0.165 0.011 265 / 0.72)",
            backdropFilter: "blur(14px) saturate(1.2)",
            borderBottom: "1px solid var(--mkt-border)",
          } : {}),
        }}
      >
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
          <Link href="#top" style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 600, letterSpacing: "-0.02em", fontSize: "1.02rem", color: "var(--mkt-text)" }}>
            <HumanLayerMark />
            <span>Human Layer</span>
          </Link>

          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 30 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: ".92rem", color: "var(--mkt-text2)", transition: "color .15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--mkt-text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--mkt-text2)")}>
                {lang === "en" ? l.en : l.fr}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", border: "1px solid var(--mkt-border2)", borderRadius: 8, overflow: "hidden" }}>
              {(["fr", "en"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: ".42em .62em", background: lang === l ? "rgba(255,255,255,.09)" : "transparent",
                  color: lang === l ? "var(--mkt-text)" : "var(--mkt-text3)", border: 0, cursor: "pointer",
                  fontFamily: "var(--font-jetbrains), monospace", fontSize: ".72rem", letterSpacing: ".04em",
                  transition: "background .15s, color .15s",
                }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link href="#contact" style={{ background: "transparent", color: "var(--mkt-text)", border: "1px solid var(--mkt-border2)", padding: ".55em 1em", borderRadius: 9, fontSize: ".9rem", fontWeight: 500 }}
              className="btn-ghost-resp">
              <T fr="Se connecter" en="Sign in" />
            </Link>
            <Link href="#contact" style={{ background: "var(--mkt-text)", color: "oklch(0.18 0.01 265)", padding: ".55em 1em", borderRadius: 9, fontSize: ".9rem", fontWeight: 600 }}>
              <T fr="Demander un accès" en="Request access" />
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "1px solid var(--mkt-border2)", borderRadius: 8, width: 40, height: 38, color: "var(--mkt-text)", cursor: "pointer" }}
              className="menu-btn-resp" aria-label="Menu">
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "oklch(0.165 0.011 265 / 0.97)", backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--mkt-border)", padding: "20px 28px 26px",
        }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "13px 0", color: "var(--mkt-text2)", fontSize: "1rem", borderBottom: "1px solid var(--mkt-border)" }}>
              {lang === "en" ? l.en : l.fr}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: 18, background: "var(--mkt-text)", color: "oklch(0.18 0.01 265)", padding: ".72em 1.25em", borderRadius: 9, textAlign: "center", fontWeight: 600 }}>
            <T fr="Demander un accès" en="Request access" />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .nav-links-desktop { display: none !important; }
          .btn-ghost-resp { display: none !important; }
          .menu-btn-resp { display: grid !important; place-items: center; }
        }
        @media (max-width: 620px) {
          .menu-btn-resp + a { display: none !important; }
        }
      `}</style>
    </>
  );
}
