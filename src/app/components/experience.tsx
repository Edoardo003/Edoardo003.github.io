import { Section } from "./section";

const items = [
  { title: "TryHackMe", text: "Offensive and defensive paths, from enumeration to privilege escalation." },
  { title: "Personal Research", text: "Write-ups and research on recon workflows and agentic security systems." },
  { title: "Automation Projects", text: "Lightweight OpenCode wrapper for recon, scanning orchestration and report generation." },
];

export function Experience() {
  return (
    <Section id="experience" label="Practical Experience">
      <ul className="border-t border-black/10">
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
