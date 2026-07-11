import { Section } from "./section";

const capabilities: { title: string; text: string; status: string }[] = [
  {
    title: "Web & API Security",
    text: "Manual testing of web applications and APIs, with a focus on HTTP, authentication, authorization, session management and common OWASP vulnerabilities.",
    status: "Practicing",
  },
  {
    title: "Network Security",
    text: "Designing and testing segmented virtual networks using Proxmox, OPNsense, VLANs, DNS services and firewall rules.",
    status: "Project-backed",
  },
  {
    title: "Automation & Development",
    text: "Building RedCode, an OpenCode wrapper that adds specialized security agents, custom skills and MCP integrations to automate reconnaissance, evidence collection and report generation.",
    status: "Project-backed",
  },
];

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      label="Selected Capabilities"
      subtitle="Core areas I am developing through practical projects, authorized labs and technical documentation."
    >
      <div className="grid grid-cols-1 border-l border-t border-black/15 sm:grid-cols-2">
        {capabilities.map((c) => (
          <div key={c.title} className="flex flex-col border-b border-r border-black/15 p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{c.title}</h3>
              <span className="shrink-0 border border-black/20 px-2 py-0.5 text-neutral-600" style={{ fontSize: "0.7rem", fontFamily: "ui-monospace, monospace" }}>
                {c.status}
              </span>
            </div>
            <p className="mt-3 text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
