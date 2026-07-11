import { Section } from "./section";

const focus = [
  "Web Security",
  "API Security",
  "Recon Automation",
  "Bug Bounty",
  "Python Development",
];

const timeline = [
  { period: "2024 — now", text: "Web & API security, building recon and reporting automation." },
  { period: "2023", text: "Network and infrastructure pentesting through structured labs." },
  { period: "2022", text: "Foundations: Linux, networking, scripting, CTF practice." },
];

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-neutral-700" style={{ lineHeight: 1.7 }}>
            I learn by building and breaking. Most of my time goes into labs,
            writing tooling in Python, and documenting what I find. Below is a
            short view of how the focus has shifted over time.
          </p>
          <ul className="mt-6 border-t border-black/10">
            {timeline.map((t) => (
              <li key={t.period} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-black/10 py-3">
                <span className="text-neutral-400" style={{ fontSize: "0.8rem", fontFamily: "ui-monospace, monospace" }}>
                  {t.period}
                </span>
                <span className="text-neutral-800" style={{ lineHeight: 1.55 }}>{t.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
            Current focus
          </p>
          <div className="flex flex-wrap gap-2">
            {focus.map((f) => (
              <span key={f} className="border border-black/20 px-2.5 py-1 text-neutral-800" style={{ fontSize: "0.85rem" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
