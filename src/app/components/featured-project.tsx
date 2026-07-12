import { Link } from "react-router";
import { Section } from "./section";
import { Github, BookText, ArrowRight } from "lucide-react";

const built = [
  "A primary orchestrator with specialist agents for recon, OSINT, scanning, validation, CTFs, and reporting",
  "A local control plane for engagement manifests, scope checks, migrations, and diagnostics",
  "Role-scoped MCP connections to HexStrike, Fetch, Playwright, SQLite, and the constrained filesystem",
  "Structured JSON handoffs with a SQLite index for findings, approvals, tool runs, and evidence metadata",
  "Separate workspaces for security assessments and CTF challenges",
  "A project-local theme with light and dark variants for the OpenCode workspace",
];


const buttons = [
  { label: "View Source", href: "https://github.com/Edoardo003/RedCode", Icon: Github },
  { label: "Documentation", href: "https://github.com/Edoardo003/RedCode#readme", Icon: BookText },
];

export function FeaturedProject() {
  return (
    <Section id="projects" label="Featured Project">
      <h3 className="tracking-tight" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        RedCode
      </h3>
      <p className="mt-1 text-neutral-500" style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.9rem" }}>
        OpenCode workspace for authorized security assessments and CTFs
      </p>

      <p className="mt-4 max-w-2xl text-neutral-700" style={{ lineHeight: 1.7 }}>
        RedCode is an OpenCode workspace for authorized security assessments and
        CTFs. It coordinates focused agents, local security tooling through MCP,
        and structured scope, findings, and evidence across the workflow. The
        analyst remains responsible for approvals, manual validation, and final
        reporting.
      </p>

      {/* What I built */}
      <div className="mt-8">
        <p className="mb-3 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
          What I built
        </p>
        <ul className="border-t border-black/10">
          {built.map((b) => (
            <li key={b} className="flex items-baseline gap-3 border-b border-black/10 py-2.5 text-neutral-800" style={{ lineHeight: 1.5 }}>
              <span className="shrink-0 text-neutral-300" style={{ fontSize: "0.6rem" }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Why I built it */}
      <div className="mt-8">
        <p className="mb-3 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
          Why I built it
        </p>
        <p className="max-w-2xl text-neutral-700" style={{ lineHeight: 1.7 }}>
          I built RedCode to keep useful security context together between
          reconnaissance, tooling, manual validation, notes, and reporting. It
          is also a way for me to explore agent orchestration and security-tool
          integration while keeping the important decisions with the analyst.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          to="/redcode"
          className="inline-flex items-center gap-2 border border-black bg-black px-3.5 py-2 text-white transition-colors hover:bg-white hover:text-black"
          style={{ fontSize: "0.875rem", fontWeight: 500 }}
        >
          Read case study
          <ArrowRight size={15} />
        </Link>
        {buttons.map(({ label, href, Icon }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} (opens in a new tab)` }
                : {})}
              className="inline-flex items-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              <Icon size={15} />
              {label}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
