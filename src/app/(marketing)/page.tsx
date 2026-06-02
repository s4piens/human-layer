"use client";

import { Reveal } from "./_components/reveal";
import { HeroCard } from "./_components/hero-card";
import { T } from "./_components/lang-context";

/* ── SVG helpers ──────────────────────────────────────────── */
const CheckIcon = ({ color = "var(--mkt-accent)" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8.4l2.6 2.6L12.6 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Arr = () => <span style={{ transition: "transform .2s var(--ease)", display: "inline-block" }}>→</span>;

/* ── Shared section wrapper ───────────────────────────────── */
function Section({ children, id, style }: { children: React.ReactNode; id?: string; style?: React.CSSProperties }) {
  return (
    <section id={id} style={{ padding: "clamp(80px,11vw,150px) 0", position: "relative", ...style }}>
      <div className="mkt-wrap">{children}</div>
    </section>
  );
}

/* ── Eyebrow ──────────────────────────────────────────────── */
function Eyebrow({ fr, en }: { fr: string; en: string }) {
  return <span className="mkt-eyebrow"><T fr={fr} en={en} /></span>;
}

/* ── SectionHead ──────────────────────────────────────────── */
function SectionHead({ eyebrowFr, eyebrowEn, titleFr, titleEn, leadFr, leadEn }: {
  eyebrowFr: string; eyebrowEn: string;
  titleFr: string; titleEn: string;
  leadFr?: string; leadEn?: string;
}) {
  return (
    <Reveal style={{ maxWidth: 680 }}>
      <Eyebrow fr={eyebrowFr} en={eyebrowEn} />
      <h2 style={{ fontSize: "clamp(2rem,3.6vw,3rem)", fontWeight: 600, letterSpacing: "-0.028em", lineHeight: 1.05, margin: "22px 0 0" }}>
        <T fr={titleFr} en={titleEn} />
      </h2>
      {leadFr && (
        <p style={{ fontSize: "clamp(1.05rem,1.6vw,1.3rem)", color: "var(--mkt-text2)", marginTop: 22, lineHeight: 1.55 }}>
          <T fr={leadFr} en={leadEn!} />
        </p>
      )}
    </Reveal>
  );
}

/* ── Btn ──────────────────────────────────────────────────── */
function BtnPrimary({ href, fr, en }: { href: string; fr: string; en: string }) {
  return (
    <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: ".55em", fontSize: ".95rem", fontWeight: 600, padding: ".72em 1.25em", borderRadius: 9, background: "var(--mkt-text)", color: "oklch(0.18 0.01 265)", border: "1px solid transparent", cursor: "pointer", textDecoration: "none" }}>
      <T fr={fr} en={en} /> <Arr />
    </a>
  );
}
function BtnGhost({ href, fr, en }: { href: string; fr: string; en: string }) {
  return (
    <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: ".55em", fontSize: ".95rem", fontWeight: 500, padding: ".72em 1.25em", borderRadius: 9, background: "transparent", color: "var(--mkt-text)", border: "1px solid var(--mkt-border2)", cursor: "pointer", textDecoration: "none" }}>
      <T fr={fr} en={en} />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ paddingTop: 148, paddingBottom: "clamp(60px,8vw,110px)", position: "relative", overflow: "hidden" }}>
        {/* glow */}
        <div style={{ position: "absolute", top: -280, left: "50%", transform: "translateX(-50%)", width: 1100, height: 760, background: "radial-gradient(closest-side, oklch(0.70 0.115 268 / 0.18), transparent 72%)", pointerEvents: "none", zIndex: 0, filter: "blur(8px)" }}/>
        {/* grid */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "linear-gradient(var(--mkt-border) 1px,transparent 1px),linear-gradient(90deg,var(--mkt-border) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 70% 55% at 50% 22%,#000 25%,transparent 72%)", opacity: .5 }}/>

        <div className="mkt-wrap" style={{ position: "relative", zIndex: 1 }}>
          {/* badge */}
          <span style={{ display: "inline-flex", alignItems: "center", gap: ".6em", fontFamily: "var(--font-jetbrains), monospace", fontSize: ".74rem", letterSpacing: ".04em", color: "var(--mkt-text2)", border: "1px solid var(--mkt-border)", background: "rgba(255,255,255,.025)", padding: ".42em .85em", borderRadius: 100 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--mkt-ok)", boxShadow: "0 0 0 3px oklch(0.74 0.12 165 / 0.18)", animation: "hl-pulse 2.6s ease-in-out infinite", display: "inline-block" }}/>
            <T fr="Accès limité · chaque review faite à la main" en="Limited access · every review done by hand" />
          </span>

          <h1 style={{ fontSize: "clamp(2.7rem,6.2vw,4.7rem)", fontWeight: 600, marginTop: 26, maxWidth: "16ch", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
            <T
              fr={<>Une dernière revue humaine <span style={{ color: "var(--mkt-text3)" }}>avant le merge.</span></>}
              en={<>One last human review <span style={{ color: "var(--mkt-text3)" }}>before you merge.</span></>}
            />
          </h1>
          <p style={{ fontSize: "clamp(1.1rem,1.9vw,1.4rem)", color: "var(--mkt-text2)", marginTop: 26, maxWidth: "46ch", lineHeight: 1.5 }}>
            <T
              fr="Human Layer ajoute une couche de validation humaine sur vos merge requests à risque — en particulier celles écrites avec de l'IA. Vous livrez vite, sans relâcher la qualité."
              en="Human Layer adds a layer of human validation on your high-risk merge requests — especially the ones written with AI. You ship fast, without letting quality slip."
            />
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 36 }}>
            <BtnPrimary href="#contact" fr="Demander un accès" en="Request access" />
            <BtnGhost href="#fonctionnement" fr="Voir comment ça marche" en="See how it works" />
          </div>
          <p style={{ marginTop: 18, fontSize: ".85rem", color: "var(--mkt-text3)", fontFamily: "var(--font-jetbrains), monospace", letterSpacing: ".02em" }}>
            <T fr="Pas de carte bancaire. On évalue ensemble si c'est pour vous." en="No credit card. We figure out together if it's a fit." />
          </p>

          <HeroCard />
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────── */}
      <Section id="probleme">
        <SectionHead
          eyebrowFr="Le problème" eyebrowEn="The problem"
          titleFr="Le code arrive plus vite que la confiance." titleEn="Code is arriving faster than trust."
          leadFr="L'IA écrit désormais une part du code qui passe en revue. Le volume monte, l'attention baisse, et le risque se concentre exactement là où personne ne regarde vraiment."
          leadEn="AI now writes a share of the code under review. Volume climbs, attention drops, and risk concentrates exactly where no one truly looks."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 56 }} className="grid-3-resp">
          {[
            { num: "01", frTitle: "Le volume explose", enTitle: "Volume explodes", frDesc: "Plus d'agents, plus de MR, plus vite. Vos reviewers absorbent un flux qu'ils n'ont plus le temps de lire en profondeur.", enDesc: "More agents, more MRs, faster. Your reviewers absorb a flow they no longer have time to read deeply.", delay: 0 },
            { num: "02", frTitle: "La revue s'érode", enTitle: "Review erodes", frDesc: "« LGTM » sur un diff de 400 lignes. Sans contexte ni intention, la revue devient un tampon plutôt qu'un garde-fou.", enDesc: "\"LGTM\" on a 400-line diff. Without context or intent, review becomes a rubber stamp instead of a safeguard.", delay: 90 },
            { num: "03", frTitle: "Le risque se concentre", enTitle: "Risk concentrates", frDesc: "Les changements ambigus et sensibles — paiements, sécurité, migrations — sont précisément ceux qu'on survole le plus.", enDesc: "The ambiguous, sensitive changes — payments, security, migrations — are exactly the ones we skim the most.", delay: 180 },
          ].map((c) => (
            <Reveal key={c.num} delay={c.delay} style={{ background: "var(--mkt-surface)", border: "1px solid var(--mkt-border)", borderRadius: 14, padding: "30px 26px" }}>
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".74rem", color: "var(--mkt-text3)", letterSpacing: ".05em" }}>{c.num}</span>
              <h3 style={{ fontSize: "1.22rem", marginTop: 16, fontWeight: 600 }}><T fr={c.frTitle} en={c.enTitle} /></h3>
              <p style={{ color: "var(--mkt-text2)", marginTop: 10, fontSize: ".97rem", lineHeight: 1.55 }}><T fr={c.frDesc} en={c.enDesc} /></p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── SOLUTION ──────────────────────────────────────── */}
      <section style={{ paddingTop: 0, paddingBottom: "clamp(80px,11vw,150px)" }}>
        <div className="mkt-wrap">
          <Reveal style={{ maxWidth: 900 }}>
            <span className="mkt-eyebrow"><T fr="La solution" en="The solution" /></span>
            <h2 style={{ fontSize: "clamp(2.1rem,4vw,3.4rem)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.03em", margin: "22px 0 0" }}>
              <T
                fr={<><span style={{ color: "var(--mkt-text)" }}>Human Layer est la couche de confiance qui s&apos;intercale entre votre CI et votre merge.</span> <span style={{ color: "var(--mkt-text3)" }}>Un humain regarde ce que les tests ne voient pas — et tranche.</span></>}
                en={<><span style={{ color: "var(--mkt-text)" }}>Human Layer is the trust layer that sits between your CI and your merge.</span> <span style={{ color: "var(--mkt-text3)" }}>A human looks at what tests can&apos;t see — and decides.</span></>}
              />
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 60 }} className="grid-3-resp">
            {[
              { k: "Ciblé", kEn: "Targeted", frDesc: "Vous n'envoyez pas tout. Seulement les MR à risque, ou celles écrites par un agent. Le reste suit votre process habituel.", enDesc: "You don't send everything. Only high-risk MRs, or those written by an agent. The rest follows your usual process.", delay: 0 },
              { k: "Méthodique", kEn: "Methodical", frDesc: "Chaque review suit un playbook : intention, cas limites, sécurité, dette. Rien n'est laissé à l'intuition seule.", enDesc: "Every review follows a playbook: intent, edge cases, security, debt. Nothing is left to intuition alone.", delay: 90 },
              { k: "Décisif", kEn: "Decisive", frDesc: "Un verdict net — approuvé ou changements demandés — avec des retours précis et actionnables, avant le merge.", enDesc: "A clear verdict — approved or changes requested — with precise, actionable feedback, before you merge.", delay: 180 },
            ].map((m) => (
              <Reveal key={m.k} delay={m.delay} style={{ paddingTop: 24, borderTop: "1px solid var(--mkt-border2)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mkt-accent)" }}><T fr={m.k} en={m.kEn} /></div>
                <p style={{ color: "var(--mkt-text2)", marginTop: 12, fontSize: ".95rem", lineHeight: 1.5 }}><T fr={m.frDesc} en={m.enDesc} /></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <Section id="fonctionnement">
        <SectionHead
          eyebrowFr="Comment ça marche" eyebrowEn="How it works"
          titleFr="Trois étapes. Aucun changement dans vos habitudes." titleEn="Three steps. Nothing changes in your habits."
          leadFr="Human Layer se branche sur votre flux existant. Vous gardez votre repo, vos outils et le dernier mot."
          leadEn="Human Layer plugs into your existing flow. You keep your repo, your tools, and the final say."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, marginTop: 56, border: "1px solid var(--mkt-border)", borderRadius: 16, overflow: "hidden" }} className="grid-steps-resp">
          {[
            {
              stepFr: "Étape 01", stepEn: "Step 01", delay: 0,
              titleFr: "Vous signalez la MR", titleEn: "You flag the MR",
              descFr: "Un label, une règle ou un clic. Les MR à risque ou écrites par un agent sont routées vers Human Layer, le reste passe normalement.",
              descEn: "A label, a rule, or a click. High-risk or agent-written MRs are routed to Human Layer; everything else passes as usual.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v6m0 0L7 5m3 3l3-3M4 12v3a1 1 0 001 1h10a1 1 0 001-1v-3" stroke="var(--mkt-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
            {
              stepFr: "Étape 02", stepEn: "Step 02", delay: 110,
              titleFr: "Un humain analyse", titleEn: "A human reviews",
              descFr: "Un reviewer senior examine l'intention, les cas limites et les zones sensibles — en suivant un playbook, pas une checklist générique.",
              descEn: "A senior reviewer examines intent, edge cases, and sensitive areas — following a playbook, not a generic checklist.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="8" r="3.2" stroke="var(--mkt-accent)" strokeWidth="1.5"/><path d="M13 12l3.5 3.5" stroke="var(--mkt-accent)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
            },
            {
              stepFr: "Étape 03", stepEn: "Step 03", delay: 220,
              titleFr: "Vous recevez un verdict", titleEn: "You get a verdict",
              descFr: "Approuvé ou changements demandés, avec un commentaire clair et localisé. Vous décidez, vous mergez en confiance.",
              descEn: "Approved or changes requested, with clear, located comments. You decide, you merge with confidence.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10.5l3.5 3.5L16 5.5" stroke="var(--mkt-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
          ].map((s, i) => (
            <Reveal key={s.stepFr} delay={s.delay} style={{ padding: "38px 32px", borderRight: i < 2 ? "1px solid var(--mkt-border)" : "none" }} className="step-item-resp">
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".78rem", color: "var(--mkt-accent)", display: "flex", alignItems: "center", gap: 10 }}>
                <T fr={s.stepFr} en={s.stepEn} />
                <span style={{ flex: 1, height: 1, background: "var(--mkt-border)", display: "block" }}/>
              </div>
              <div style={{ marginTop: 24, width: 42, height: 42, borderRadius: 10, background: "var(--mkt-surface)", border: "1px solid var(--mkt-border2)", display: "grid", placeItems: "center" }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.3rem", marginTop: 24, fontWeight: 600, letterSpacing: "-0.02em" }}><T fr={s.titleFr} en={s.titleEn} /></h3>
              <p style={{ color: "var(--mkt-text2)", marginTop: 12, fontSize: ".97rem", lineHeight: 1.55 }}><T fr={s.descFr} en={s.descEn} /></p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── WHAT GETS REVIEWED ────────────────────────────── */}
      <Section id="valide">
        <SectionHead
          eyebrowFr="Ce qui est validé" eyebrowEn="What we review"
          titleFr="Là où les tests s'arrêtent, la revue commence." titleEn="Where tests stop, review begins."
          leadFr="La CI dit si le code passe. Human Layer dit s'il fallait vraiment l'écrire comme ça."
          leadEn="CI tells you if the code passes. Human Layer tells you whether it should have been written that way."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0, marginTop: 56, borderTop: "1px solid var(--mkt-border)" }} className="grid-2-resp">
          {[
            {
              frTitle: "Changements sensibles à la sécurité", enTitle: "Security-sensitive changes",
              frDesc: "Auth, permissions, secrets, accès aux données. Les zones où une erreur ne pardonne pas.",
              enDesc: "Auth, permissions, secrets, data access. The areas where a mistake doesn't forgive.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l6 3v4c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V6l6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
            },
            {
              frTitle: "Cas limites & chemins d'erreur", enTitle: "Edge cases & error paths",
              frDesc: "Timeouts, retries, états concurrents, doubles écritures — ce que le happy path masque toujours.",
              enDesc: "Timeouts, retries, concurrent states, double writes — what the happy path always hides.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 14l3-3 2.5 2L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
            {
              frTitle: "Cohérence avec l'architecture", enTitle: "Consistency with architecture",
              frDesc: "Les raccourcis qui marchent aujourd'hui mais qui font dériver le système sur le long terme.",
              enDesc: "Shortcuts that work today but drift the system over the long run.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3.5" y="4" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M3.5 8h13M7 4v12" stroke="currentColor" strokeWidth="1.4"/></svg>,
            },
            {
              frTitle: "Intention vs. code généré", enTitle: "Intent vs. generated code",
              frDesc: "L'IA produit du code plausible. On vérifie qu'il résout vraiment le bon problème — sans hallucination silencieuse.",
              enDesc: "AI produces plausible code. We check it actually solves the right problem — with no silent hallucination.",
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.4"/><path d="M10 6.5v3.5l2.2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
            },
          ].map((item) => (
            <Reveal key={item.frTitle} style={{ display: "flex", gap: 18, padding: "26px 4px", borderBottom: "1px solid var(--mkt-border)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 9, background: "var(--mkt-surface)", border: "1px solid var(--mkt-border)", display: "grid", placeItems: "center", flexShrink: 0, color: "var(--mkt-accent)" }}>{item.icon}</div>
              <div>
                <h4 style={{ fontSize: "1.08rem", fontWeight: 600 }}><T fr={item.frTitle} en={item.enTitle} /></h4>
                <p style={{ color: "var(--mkt-text2)", marginTop: 6, fontSize: ".93rem", lineHeight: 1.5 }}><T fr={item.frDesc} en={item.enDesc} /></p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── BENEFITS ──────────────────────────────────────── */}
      <Section>
        <SectionHead
          eyebrowFr="Bénéfices" eyebrowEn="Benefits"
          titleFr="Livrer vite et bien ne sont plus deux choix." titleEn="Shipping fast and shipping well are no longer a trade-off."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 56 }} className="grid-4-resp">
          {[
            { bn: "↑", frTitle: "Qualité", enTitle: "Quality", frDesc: "Un standard de revue constant, même quand le volume de MR augmente.", enDesc: "A constant review standard, even as MR volume grows.", delay: 0 },
            { bn: "↑", frTitle: "Vitesse", enTitle: "Speed", frDesc: "Plus de MR à risque qui dorment des jours dans une file. Un verdict en heures.", enDesc: "No more high-risk MRs sitting in a queue for days. A verdict in hours.", delay: 80 },
            { bn: "↓", frTitle: "Risque réduit", enTitle: "Lower risk", frDesc: "Les incidents coûteux sont attrapés avant le merge, pas en production.", enDesc: "Costly incidents are caught before merge, not in production.", delay: 160 },
            { bn: "↑", frTitle: "Confiance", enTitle: "Confidence", frDesc: "Vos équipes mergent du code assisté par l'IA sans angoisse de fond.", enDesc: "Your teams merge AI-assisted code without that nagging anxiety.", delay: 240 },
          ].map((b) => (
            <Reveal key={b.frTitle} delay={b.delay} style={{ background: "linear-gradient(180deg,var(--mkt-surface),var(--mkt-bg2))", border: "1px solid var(--mkt-border)", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "2rem", fontWeight: 500, color: "var(--mkt-text)", letterSpacing: "-0.02em" }}>{b.bn}</div>
              <h3 style={{ fontSize: "1.06rem", marginTop: 16, fontWeight: 600 }}><T fr={b.frTitle} en={b.enTitle} /></h3>
              <p style={{ color: "var(--mkt-text2)", marginTop: 8, fontSize: ".9rem", lineHeight: 1.5 }}><T fr={b.frDesc} en={b.enDesc} /></p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── TRUST ─────────────────────────────────────────── */}
      <section id="confiance" style={{ padding: "clamp(80px,11vw,150px) 0", background: "linear-gradient(180deg,var(--mkt-bg2),var(--mkt-bg))" }}>
        <div className="mkt-wrap">
          <SectionHead
            eyebrowFr="Confiance & sérieux" eyebrowEn="Trust & seriousness"
            titleFr="Pas de promesse magique. Une méthode." titleEn="No magic promise. A method."
            leadFr="On ne remplace pas votre jugement. On ajoute un regard humain rigoureux, là où c'est utile — et vous gardez toujours le contrôle."
            leadEn="We don't replace your judgment. We add a rigorous human eye where it matters — and you always stay in control."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "36px 40px", marginTop: 56 }} className="grid-3-resp">
            {[
              { frTitle: "Vous gardez le dernier mot", enTitle: "You keep the final say", frDesc: "Human Layer recommande et argumente. La décision de merger reste toujours la vôtre — rien n'est automatique.", enDesc: "Human Layer recommends and argues its case. The decision to merge always stays yours — nothing is automatic.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l5 2.5V8c0 3-2 5-5 6-3-1-5-3-5-6V4.5L8 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>, delay: 0 },
              { frTitle: "Périmètre d'accès minimal", enTitle: "Minimal access scope", frDesc: "On n'accède qu'à ce qui est nécessaire pour reviewer. Pas de stockage de votre code au-delà de la revue en cours.", enDesc: "We access only what's needed to review. No storage of your code beyond the review in progress.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.3"/></svg>, delay: 80 },
              { frTitle: "Des humains identifiables", enTitle: "Identifiable humans", frDesc: "Chaque review porte un nom et un raisonnement. Vous pouvez challenger un verdict et en discuter, comme avec un collègue.", enDesc: "Every review carries a name and a rationale. You can challenge a verdict and discuss it, like with a colleague.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>, delay: 160 },
              { frTitle: "Process transparent", enTitle: "Transparent process", frDesc: "Vous voyez ce qui a été vérifié, pourquoi, et ce qui a été flaggé. Aucune boîte noire.", enDesc: "You see what was checked, why, and what was flagged. No black box.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h2l1.5 4 3-8L13 8h0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>, delay: 0 },
              { frTitle: "S'adapte à vos standards", enTitle: "Adapts to your standards", frDesc: "Vos conventions, votre niveau d'exigence, vos zones critiques. La review reflète votre équipe, pas une norme générique.", enDesc: "Your conventions, your bar, your critical zones. The review reflects your team, not a generic norm.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v2M8 12v2M2 8h2M12 8h2M4 4l1.4 1.4M10.6 10.6L12 12M12 4l-1.4 1.4M5.4 10.6L4 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, delay: 80 },
              { frTitle: "Délais cadrés", enTitle: "Defined turnaround", frDesc: "Une review n'est utile que si elle est rapide. On s'engage sur des délais clairs, pas sur des promesses floues.", enDesc: "A review is only useful if it's fast. We commit to clear turnaround, not vague promises.", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4.5v3.7l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, delay: 160 },
            ].map((t) => (
              <Reveal key={t.frTitle} delay={t.delay}>
                <h3 style={{ display: "flex", alignItems: "center", gap: 11, fontSize: "1.08rem", fontWeight: 600 }}>
                  <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--mkt-surface)", border: "1px solid var(--mkt-border)", display: "grid", placeItems: "center", color: "var(--mkt-accent)", flexShrink: 0 }}>{t.icon}</span>
                  <T fr={t.frTitle} en={t.enTitle} />
                </h3>
                <p style={{ color: "var(--mkt-text2)", marginTop: 12, fontSize: ".95rem", lineHeight: 1.55 }}><T fr={t.frDesc} en={t.enDesc} /></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────── */}
      <Section id="tarifs">
        <SectionHead
          eyebrowFr="Tarifs" eyebrowEn="Pricing"
          titleFr="Un pilote avant tout engagement." titleEn="A pilot before any commitment."
          leadFr="Human Layer est en accès anticipé. On commence par un pilote cadré sur vos vraies MR, puis on définit ensemble un tarif adapté à votre volume — sans licence annuelle imposée."
          leadEn="Human Layer is in early access. We start with a scoped pilot on your real MRs, then set a price tailored to your volume together — no annual lock-in."
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 56 }} className="grid-2-resp">
          {/* Pilot */}
          <Reveal style={{ position: "relative", background: "var(--mkt-surface)", border: "1px solid var(--mkt-border)", borderRadius: 16, padding: "36px 34px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mkt-text3)" }}><T fr="Pilote" en="Pilot" /></div>
            <h3 style={{ fontSize: "1.4rem", marginTop: 13, fontWeight: 600, letterSpacing: "-0.02em" }}><T fr="Tester sur de vraies MR" en="Test it on real MRs" /></h3>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "1.02rem", color: "var(--mkt-text)", marginTop: 18 }}><T fr="Engagement cadré" en="Scoped engagement" /></div>
            <p style={{ color: "var(--mkt-text2)", marginTop: 10, fontSize: ".95rem", lineHeight: 1.55, flex: 1 }}><T fr="Un pilote court et cadré pour voir Human Layer à l'œuvre sur vos propres merge requests, avant tout engagement." en="A short, fixed-scope pilot to see Human Layer at work on your own merge requests, before any commitment." /></p>
            <ul style={{ listStyle: "none", marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { fr: "Un lot de MR à risque, reviewées à la main.", en: "A batch of high-risk MRs, reviewed by hand." },
                { fr: "Des délais de review cadrés.", en: "Defined review turnaround." },
                { fr: "Un point de restitution clair à la fin.", en: "A clear debrief at the end." },
              ].map((li) => (
                <li key={li.fr} style={{ display: "flex", gap: 11, color: "var(--mkt-text2)", fontSize: ".93rem", lineHeight: 1.45 }}>
                  <span style={{ flexShrink: 0, marginTop: 2, color: "var(--mkt-text3)" }}><CheckIcon color="var(--mkt-text3)" /></span>
                  <T fr={li.fr} en={li.en} />
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ marginTop: 28, display: "flex", justifyContent: "center", alignItems: "center", padding: ".72em 1.25em", borderRadius: 9, background: "transparent", color: "var(--mkt-text)", border: "1px solid var(--mkt-border2)", fontWeight: 500, fontSize: ".95rem", cursor: "pointer" }}>
              <T fr="Démarrer un pilote" en="Start a pilot" />
            </a>
          </Reveal>

          {/* Early access */}
          <Reveal delay={90} style={{ position: "relative", background: "linear-gradient(180deg,var(--mkt-asoft),var(--mkt-bg2))", border: "1px solid var(--mkt-asoft)", borderRadius: 16, padding: "36px 34px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mkt-accent)" }}><T fr="Accès anticipé" en="Early access" /></div>
            <h3 style={{ fontSize: "1.4rem", marginTop: 13, fontWeight: 600, letterSpacing: "-0.02em" }}><T fr="Pour les équipes qui livrent en continu" en="For teams shipping continuously" /></h3>
            <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "1.02rem", color: "var(--mkt-text)", marginTop: 18 }}><T fr="Tarif sur demande" en="Pricing on request" /></div>
            <p style={{ color: "var(--mkt-text2)", marginTop: 10, fontSize: ".95rem", lineHeight: 1.55, flex: 1 }}><T fr="Une revue humaine continue sur vos MR à risque et assistées par l'IA. Tarif adapté à votre volume et à votre niveau de criticité." en="Ongoing human review on your high-risk and AI-assisted MRs. Pricing tailored to your volume and criticality." /></p>
            <ul style={{ listStyle: "none", marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { fr: "Périmètre et SLA définis avec vous.", en: "Scope and SLA defined with you." },
                { fr: "Des reviewers alignés sur vos standards.", en: "Reviewers aligned with your standards." },
                { fr: "Facturation à l'usage, pas de licence imposée.", en: "Usage-based billing, no forced license." },
              ].map((li) => (
                <li key={li.fr} style={{ display: "flex", gap: 11, color: "var(--mkt-text2)", fontSize: ".93rem", lineHeight: 1.45 }}>
                  <span style={{ flexShrink: 0, marginTop: 2, color: "var(--mkt-accent)" }}><CheckIcon color="var(--mkt-accent)" /></span>
                  <T fr={li.fr} en={li.en} />
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ marginTop: 28, display: "flex", justifyContent: "center", alignItems: "center", padding: ".72em 1.25em", borderRadius: 9, background: "var(--mkt-text)", color: "oklch(0.18 0.01 265)", fontWeight: 600, fontSize: ".95rem", cursor: "pointer" }}>
              <T fr="Demander un accès" en="Request access" />
            </a>
          </Reveal>
        </div>

        <Reveal style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: "10px 26px", alignItems: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: ".78rem", color: "var(--mkt-text3)" }}>
          {[
            { fr: "Pas de licence annuelle imposée", en: "No annual lock-in" },
            { fr: "Périmètre cadré avec vous", en: "Scope defined together" },
            { fr: "On commence petit", en: "We start small" },
          ].map((item) => (
            <span key={item.fr} style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--mkt-accent)", display: "inline-block" }}/>
              <T fr={item.fr} en={item.en} />
            </span>
          ))}
        </Reveal>
      </Section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <Section id="contact">
        <Reveal style={{ position: "relative", border: "1px solid var(--mkt-border2)", borderRadius: 22, padding: "clamp(48px,7vw,84px) 32px", textAlign: "center", background: "linear-gradient(180deg,var(--mkt-surface),var(--mkt-bg2))", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 760, height: 480, background: "radial-gradient(closest-side,oklch(0.70 0.115 268 / 0.22),transparent 70%)", pointerEvents: "none" }}/>
          <span className="mkt-eyebrow" style={{ position: "relative" }}><T fr="Accès anticipé" en="Early access" /></span>
          <h2 style={{ fontSize: "clamp(2.1rem,4.4vw,3.4rem)", fontWeight: 600, letterSpacing: "-0.028em", lineHeight: 1.05, marginTop: 20, maxWidth: "18ch", marginLeft: "auto", marginRight: "auto", position: "relative" }}>
            <T fr="Gardez la qualité. Gardez la vitesse." en="Keep the quality. Keep the speed." />
          </h2>
          <p style={{ color: "var(--mkt-text2)", marginTop: 20, maxWidth: "46ch", marginLeft: "auto", marginRight: "auto", position: "relative", fontSize: "1.08rem" }}>
            <T
              fr="On ouvre l'accès à un petit nombre d'équipes. Décrivez votre flux de merge — on évalue ensemble si Human Layer peut vous aider dès cette semaine."
              en="We're opening access to a small number of teams. Describe your merge flow — we'll figure out together whether Human Layer can help you as soon as this week."
            />
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 36, justifyContent: "center", position: "relative" }}>
            <BtnPrimary href="mailto:hello@humanlayer.dev" fr="Demander un accès" en="Request access" />
            <BtnGhost href="#fonctionnement" fr="Revoir le fonctionnement" en="Review how it works" />
          </div>
        </Reveal>
      </Section>

      {/* ── REVIEWERS ─────────────────────────────────────── */}
      <Section id="reviewers">
        <Reveal style={{ position: "relative", border: "1px solid var(--mkt-border2)", borderRadius: 22, overflow: "hidden", background: "linear-gradient(135deg, oklch(0.215 0.022 268), var(--mkt-bg2))", display: "grid", gridTemplateColumns: "1.05fr 1fr" }} className="rev-panel-resp">
          <div style={{ position: "absolute", top: -200, right: -120, width: 600, height: 480, background: "radial-gradient(closest-side,oklch(0.70 0.115 268 / 0.20),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ padding: "clamp(40px,5vw,62px)", position: "relative", zIndex: 1 }}>
            <span className="mkt-eyebrow"><T fr="Réseau de reviewers" en="Reviewer network" /></span>
            <h2 style={{ fontSize: "clamp(1.9rem,3.4vw,2.7rem)", fontWeight: 600, letterSpacing: "-0.028em", lineHeight: 1.05, marginTop: 18, maxWidth: "14ch" }}>
              <T fr="Vous aussi, vous voulez devenir reviewer ?" en="Want to become a reviewer too?" />
            </h2>
            <p style={{ color: "var(--mkt-text2)", marginTop: 20, fontSize: "1.05rem", lineHeight: 1.55, maxWidth: "40ch" }}>
              <T
                fr="Human Layer repose sur de vrais reviewers humains — des ingénieurs seniors sélectionnés avec soin. Les missions sont rémunérées, et vous choisissez votre charge."
                en="Human Layer runs on real human reviewers — carefully selected senior engineers. Assignments are paid, and you choose your own load."
              />
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 30 }}>
              <BtnPrimary href="mailto:reviewers@humanlayer.dev" fr="Postuler comme reviewer" en="Apply as a reviewer" />
            </div>
          </div>
          <div style={{ padding: "clamp(40px,5vw,62px)", borderLeft: "1px solid var(--mkt-border)", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 26, justifyContent: "center" }} className="rvp-right-resp">
            {[
              { frTitle: "Sélection exigeante", enTitle: "Selective by design", frDesc: "On recherche des profils techniques sérieux et fiables. Chaque reviewer passe un véritable processus de sélection.", enDesc: "We look for serious, reliable technical profiles. Every reviewer goes through a real selection process.", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M5.5 10h9M8 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { frTitle: "Missions rémunérées", enTitle: "Paid assignments", frDesc: "Chaque review est rémunérée. Vous gagnez de l'argent pour votre expertise, sur une base claire par review.", enDesc: "Every review is paid. You earn money for your expertise, on a clear per-review basis.", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6.5v7M8.2 8.2h2.6a1.3 1.3 0 010 2.6H9.2a1.3 1.3 0 000 2.6h2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { frTitle: "Du travail qui compte", enTitle: "Work that matters", frDesc: "Vous protégez du vrai code, en route vers la production. Pas de busywork, pas de remplissage.", enDesc: "You protect real code on its way to production. No busywork, no filler.", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 3l6 3v4c0 3.5-2.5 6-6 7-3.5-1-6-3.5-6-7V6l6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M7.5 10l1.7 1.7L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { frTitle: "Flexible, à distance", enTitle: "Flexible, remote", frDesc: "Vous choisissez vos missions et votre rythme. 100% à distance, autour de votre emploi du temps.", enDesc: "You pick your assignments and your pace. Fully remote, around your schedule.", icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6.3v3.9l2.6 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
            ].map((f) => (
              <div key={f.frTitle} style={{ display: "flex", gap: 15 }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(255,255,255,.04)", border: "1px solid var(--mkt-border2)", display: "grid", placeItems: "center", flexShrink: 0, color: "var(--mkt-accent)" }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: "1.02rem", fontWeight: 600 }}><T fr={f.frTitle} en={f.enTitle} /></h4>
                  <p style={{ color: "var(--mkt-text2)", marginTop: 5, fontSize: ".92rem", lineHeight: 1.5 }}><T fr={f.frDesc} en={f.enDesc} /></p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Global animation keyframe + responsive ────────── */}
      <style>{`
        @keyframes hl-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @media (max-width: 920px) {
          .grid-3-resp { grid-template-columns: 1fr 1fr !important; }
          .grid-steps-resp { grid-template-columns: 1fr !important; }
          .step-item-resp { border-right: 0 !important; border-bottom: 1px solid var(--mkt-border) !important; }
          .step-item-resp:last-child { border-bottom: 0 !important; }
          .rev-panel-resp { grid-template-columns: 1fr !important; }
          .rvp-right-resp { border-left: 0 !important; border-top: 1px solid var(--mkt-border) !important; }
        }
        @media (max-width: 620px) {
          .grid-3-resp, .grid-4-resp, .grid-2-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
