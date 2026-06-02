"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "fr" | "en";
type LangContextType = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextType>({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hl-lang") as Lang | null;
      if (saved === "en" || saved === "fr") setLangState(saved);
    } catch (_e) { /* storage not available */ }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try { localStorage.setItem("hl-lang", l); } catch (_e) { /* storage not available */ }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() { return useContext(LangContext); }

export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "en" ? en : fr}</>;
}
