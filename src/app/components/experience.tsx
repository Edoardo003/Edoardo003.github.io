import { Section } from "./section";

const stats = [
  { value: "180+", label: "TryHackMe rooms" },
  { value: "Active", label: "Home lab" },
];

const items = [
  { title: "TryHackMe", text: "Offensive and defensive paths, from enumeration to privilege escalation." },
  { title: "Personal Research", text: "Writeups and notes on recon automation and JWT/session flaws." },
  { title: "Automation Projects", text: "Python tooling for recon, scanning orchestration and report generation." },
];

export function Experience() {
  return (
    <Section id="experience" label="Practical Experience">
      <div className="grid grid-cols-2 border-l border-t border-black/15 md:grid-cols-2" style={{ maxWidth: "28rem" }}>
        {stats.map((s) => (
          <div key={s.label} className="border-b border-r border-black/15 p-4">
            <div className="tracking-tight" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{s.value}</div>
            <div className="mt-1 text-neutral-500" style={{ fontSize: "0.8rem", lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <ul className="mt-8 border-t border-black/10">
        {items.map((it) => (
          <li key={it.title} className="grid grid-cols-1 gap-1 border-b border-black/10 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <span style={{ fontWeight: 600 }}>{it.title}</span>
            <span className="text-neutral-700" style={{ lineHeight: 1.55 }}>{it.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
