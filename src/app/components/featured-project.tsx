import { Link } from "react-router";
import { Section } from "./section";
import { Github, BookText, ArrowRight } from "lucide-react";

const built = [
  "Multi-agent architecture with specialized security roles",
  "Automated reconnaissance and enumeration workflows",
  "Vulnerability scanning pipeline with Nuclei and other tools",
  "MCP integrations for offensive security tooling",
  "AI-assisted exploit research and PoC generation",
  "Automated evidence collection and professional report generation",
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
        AI-Assisted Security Assessment Framework
      </p>

      <p className="mt-4 max-w-2xl text-neutral-700" style={{ lineHeight: 1.7 }}>
        RedCode is a personal project built to streamline repetitive penetration
        testing tasks without replacing manual analysis. It extends OpenCode with
        specialized security agents, automated workflows and MCP integrations to
        support reconnaissance, vulnerability assessment, exploit research and
        professional reporting. It was designed to experiment with modern
        AI-assisted offensive security workflows while keeping the analyst in
        control of every stage of the assessment.
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
          I created RedCode to better understand how modern penetration testing
          workflows can be automated while preserving analyst decision-making.
          The project lets me experiment with agent orchestration, security
          tooling integration and report generation in a realistic offensive
          security workflow.
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
