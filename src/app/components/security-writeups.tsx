import { Section } from "./section";
import { Github } from "lucide-react";

const REPO_URL = "https://github.com/Edoardo003/ctf-writeups";

export function SecurityWriteups() {
  return (
    <Section
      id="writeups"
      label="Security Write-ups"
      subtitle="Structured technical documentation from CTF challenges, authorized labs and intentionally vulnerable applications."
    >
      <div className="flex items-center gap-3">
        <span className="border border-black bg-black px-2 py-0.5 uppercase tracking-widest text-white" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
          Work in progress
        </span>
      </div>

      {/* Repository card */}
      <div className="mt-6 border border-black/15 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 style={{ fontSize: "1rem", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
            CTF &amp; Security Write-ups
          </h3>
        </div>
        <p className="mt-2 text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          Reusable documentation templates and technical write-ups from CTF
          challenges, TryHackMe rooms, authorized labs and intentionally
          vulnerable applications.
        </p>
        <p className="mt-3 text-neutral-500" style={{ fontSize: "0.82rem", fontFamily: "ui-monospace, monospace" }}>
          Template created — first write-ups in preparation
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Write-up Repository on GitHub (opens in a new tab)"
            className="inline-flex items-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            <Github size={15} />
            View Write-up Repository
          </a>
          <span className="text-neutral-400" style={{ fontSize: "0.8rem" }} aria-hidden="true">
            First write-ups in progress
          </span>
        </div>
      </div>
    </Section>
  );
}
