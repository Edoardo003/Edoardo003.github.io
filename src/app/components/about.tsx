import { Section } from "./section";

const focus = [
  "Web Security",
  "API Security",
  "Recon Automation",
  "Bug Bounty",
  "Python Development",
];

const timeline = [
  {
    period: "2025 — now",
    text: "Focused practice in web & API security through hands-on labs, authorized testing environments, and security research.",
  },
  {
    period: "Projects",
    text: "Building Python tooling for reconnaissance, evidence handling, and reporting automation.",
  },
  {
    period: "Foundations",
    text: "Web engineering, Linux, networking, and scripting applied to application security.",
  },
];

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-neutral-700" style={{ lineHeight: 1.7 }}>
            I spend most of my time working through labs, building security
            tooling in Python, and documenting what I learn. My current focus is
            web and API security, with an interest in making the repetitive parts
            of the work easier to manage.
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
