import { ReactNode } from "react";
import { LangProvider } from "@/app/(marketing)/_components/lang-context";
import { MarketingHeader } from "@/app/(marketing)/_components/marketing-header";
import { PostHogProvider } from "@/app/(marketing)/_components/posthog-provider";

const HumanLayerMark = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="23" height="23" rx="6.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5"/>
    <rect x="6.5" y="7" width="15" height="5.5" rx="2" fill="var(--mkt-text3)"/>
    <rect x="6.5" y="15.5" width="15" height="5.5" rx="2" fill="var(--mkt-accent)"/>
  </svg>
);

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider>
    <LangProvider>
      <div className="mkt" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
        <MarketingHeader />
        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{ borderTop: "1px solid var(--mkt-border)", padding: "60px 0 50px" }}>
          <div className="mkt-wrap">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
              <div>
                <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 600, letterSpacing: "-0.02em", fontSize: "1.02rem", color: "var(--mkt-text)", marginBottom: 14 }}>
                  <HumanLayerMark />
                  <span>Human Layer</span>
                </a>
                <p style={{ color: "var(--mkt-text3)", fontSize: ".9rem", maxWidth: "30ch", lineHeight: 1.5 }}>
                  La couche de revue humaine avant le merge, pour les équipes qui livrent avec l&apos;IA.
                </p>
              </div>
              <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
                <div>
                  <h5 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mkt-text3)", marginBottom: 16 }}>Produit</h5>
                  {[["#probleme", "Le problème"], ["#fonctionnement", "Comment ça marche"], ["#valide", "Ce qui est validé"], ["#tarifs", "Tarifs"]].map(([href, label]) => (
                    <a key={href} href={href} style={{ display: "block", color: "var(--mkt-text2)", fontSize: ".92rem", marginBottom: 10 }}>{label}</a>
                  ))}
                </div>
                <div>
                  <h5 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mkt-text3)", marginBottom: 16 }}>Confiance</h5>
                  {[["#confiance", "Sécurité"], ["#confiance", "Process"], ["#reviewers", "Devenir reviewer"]].map(([href, label]) => (
                    <a key={label} href={href} style={{ display: "block", color: "var(--mkt-text2)", fontSize: ".92rem", marginBottom: 10 }}>{label}</a>
                  ))}
                </div>
                <div>
                  <h5 style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mkt-text3)", marginBottom: 16 }}>Contact</h5>
                  <a href="mailto:hello@humanlayer.dev" style={{ display: "block", color: "var(--mkt-text2)", fontSize: ".92rem", marginBottom: 10 }}>hello@humanlayer.dev</a>
                  <a href="#contact" style={{ display: "block", color: "var(--mkt-text2)", fontSize: ".92rem", marginBottom: 10 }}>Demander un accès</a>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginTop: 50, paddingTop: 26, borderTop: "1px solid var(--mkt-border)", flexWrap: "wrap" }}>
              <span style={{ color: "var(--mkt-text3)", fontSize: ".84rem", fontFamily: "var(--font-jetbrains), monospace" }}>© 2026 Human Layer</span>
              <span style={{ color: "var(--mkt-text3)", fontSize: ".84rem", fontFamily: "var(--font-jetbrains), monospace" }}>Early access · concierge mode</span>
            </div>
          </div>
        </footer>
      </div>
    </LangProvider>
    </PostHogProvider>
  );
}
