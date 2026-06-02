"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./lang-context";

const checks = [
  { type: "ok", fr: "Logique de retry & idempotence", en: "Retry logic & idempotency", metaFr: "vérifié", metaEn: "verified" },
  { type: "flag", fr: "Cas limite : double débit sur timeout", en: "Edge case: double charge on timeout", metaFr: "à corriger", metaEn: "needs fix" },
  { type: "ok", fr: "Gestion des secrets & clés d'API", en: "Secrets & API key handling", metaFr: "vérifié", metaEn: "verified" },
  { type: "ok", fr: "Cohérence avec l'architecture", en: "Consistency with architecture", metaFr: "vérifié", metaEn: "verified" },
];

const OkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6.2l2.2 2.3L9.5 3.5" stroke="var(--mkt-ok)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WarnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 3v3.4M6 8.6h.01" stroke="var(--mkt-warn)" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const GitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5 4v7M5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7v3.5M13 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7c0-1.5-1-2-3-2H7" stroke="var(--mkt-text2)" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export function HeroCard() {
  const { lang } = useLang();
  const [shown, setShown] = useState<boolean[]>([false, false, false, false]);
  const [verdictShown, setVerdictShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  function runSeq() {
    if (ran.current) return;
    ran.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown([true, true, true, true]); setVerdictShown(true); return; }
    checks.forEach((_, i) => {
      setTimeout(() => setShown((prev) => { const n = [...prev]; n[i] = true; return n; }), 350 + i * 240);
    });
    setTimeout(() => setVerdictShown(true), 350 + checks.length * 240 + 250);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { runSeq(); return; }
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { runSeq(); io.unobserve(el); } }); },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mkt-reveal" style={{ marginTop: 70, background: "linear-gradient(180deg, var(--mkt-surface), var(--mkt-bg2))", border: "1px solid var(--mkt-border2)", borderRadius: 16, boxShadow: "0 30px 80px -30px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.02) inset", overflow: "hidden", position: "relative" }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "1px solid var(--mkt-border)" }}>
        <div style={{ display: "flex", gap: 7 }}>
          {[0,1,2].map(i => <i key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--mkt-surface2)", display: "block" }}/>)}
        </div>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".8rem", color: "var(--mkt-text3)", marginLeft: 4 }}>human-layer · review</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", letterSpacing: ".05em", color: "var(--mkt-accent)", border: "1px solid var(--mkt-asoft)", background: "var(--mkt-asoft)", padding: ".3em .7em", borderRadius: 6 }}>AI-assisted MR</span>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr" }} className="rc-body-resp">

        {/* Left */}
        <div style={{ padding: "24px 26px", borderRight: "1px solid var(--mkt-border)" }} className="rc-left-resp">
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 22 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "var(--mkt-surface2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
              <GitIcon />
            </div>
            <div>
              <h4 style={{ fontSize: "1.02rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                {lang === "en" ? "refactor: payment retry logic" : "refactor: logique de retry sur les paiements"}
              </h4>
              <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".76rem", color: "var(--mkt-text3)", marginTop: 3 }}>
                {lang === "en" ? "#4821 · +312 −98 · 7 files" : "#4821 · +312 −98 · 7 fichiers"}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {checks.map((chk, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 10px", borderRadius: 9,
                opacity: shown[i] ? 1 : 0, transform: shown[i] ? "none" : "translateY(6px)",
                transition: "opacity .5s var(--ease), transform .5s var(--ease)",
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6, display: "grid", placeItems: "center", flexShrink: 0, border: "1px solid",
                  background: chk.type === "ok" ? "oklch(0.74 0.12 165 / 0.16)" : "oklch(0.80 0.11 78 / 0.14)",
                  borderColor: chk.type === "ok" ? "oklch(0.74 0.12 165 / 0.4)" : "oklch(0.80 0.11 78 / 0.42)",
                }}>
                  {chk.type === "ok" ? <OkIcon /> : <WarnIcon />}
                </div>
                <span style={{ fontSize: ".92rem", color: "var(--mkt-text)", flex: 1 }}>
                  {lang === "en" ? chk.en : chk.fr}
                </span>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".68rem", color: chk.type === "ok" ? "var(--mkt-ok)" : "var(--mkt-warn)", marginLeft: "auto", whiteSpace: "nowrap" }}>
                  {lang === "en" ? chk.metaEn : chk.metaFr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
          <div style={{ opacity: verdictShown ? 1 : 0, transform: verdictShown ? "scale(1)" : "scale(.96)", transition: "opacity .5s var(--ease), transform .5s var(--ease)" }}>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mkt-text3)" }}>
              {lang === "en" ? "Human Layer verdict" : "Verdict Human Layer"}
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 14, fontSize: "1.18rem", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--mkt-warn)" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--mkt-warn)", boxShadow: "0 0 0 4px oklch(0.80 0.11 78 / 0.18)", display: "inline-block" }}/>
              {lang === "en" ? "Changes requested" : "Changements demandés"}
            </div>
            <p style={{ fontSize: ".9rem", color: "var(--mkt-text2)", marginTop: 14, lineHeight: 1.5 }}>
              {lang === "en"
                ? "A double-charge case isn't handled on network timeout. Everything else is solid — merge as soon as it's fixed."
                : "Un cas de double débit n'est pas couvert en cas de timeout réseau. Tout le reste est solide — merge dès que c'est corrigé."}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 11, paddingTop: 18, borderTop: "1px solid var(--mkt-border)" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--mkt-accent), oklch(0.66 0.10 232))", flexShrink: 0 }}/>
            <div>
              <div style={{ fontSize: ".86rem", fontWeight: 500 }}>{lang === "en" ? "Human Layer reviewer" : "Reviewer Human Layer"}</div>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", color: "var(--mkt-text3)" }}>senior backend · 12 min</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .rc-body-resp { grid-template-columns: 1fr !important; }
          .rc-left-resp { border-right: 0 !important; border-bottom: 1px solid var(--mkt-border) !important; }
        }
      `}</style>
    </div>
  );
}
