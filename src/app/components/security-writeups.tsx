import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./section";

const REPO_URL = "https://github.com/Edoardo003/ctf-writeups";
const HAMMER_URL = "https://github.com/Edoardo003/ctf-writeups/blob/main/TryHackMe/Hammer/hammer.md";

export function SecurityWriteups() {
  return (
    <Section
      id="writeups"
      label="Security Write-ups"
      subtitle="Structured technical documentation from CTF challenges, authorized labs and intentionally vulnerable applications."
    >
      <article className="mt-6 border border-black p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 style={{ fontSize: "1rem", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
            Hammer
          </h3>
          <span className="border border-black/20 px-2 py-0.5 text-neutral-600" style={{ fontSize: "0.72rem", fontFamily: "ui-monospace, monospace" }}>
            TryHackMe · Intermediate
          </span>
        </div>
        <p className="mt-2 text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          A web-security write-up covering a password-reset rate-limit bypass,
          unsafe JWT key handling, and how the two weaknesses can be chained in
          an authorized CTF lab.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Authentication", "JWT", "Web security"].map((topic) => (
            <span key={topic} className="border border-black/20 px-2 py-0.5 text-neutral-600" style={{ fontSize: "0.72rem" }}>
              {topic}
            </span>
          ))}
        </div>
        <a
          href={HAMMER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read the Hammer write-up on GitHub (opens in a new tab)"
          className="mt-5 inline-flex items-center gap-2 border border-black bg-black px-3.5 py-2 text-white transition-colors hover:bg-white hover:text-black"
          style={{ fontSize: "0.875rem", fontWeight: 500 }}
        >
          Read Hammer write-up
          <ArrowUpRight size={15} />
        </a>
      </article>

      <div className="mt-6 border border-black/15 p-5">
        <h3 style={{ fontSize: "1rem", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
          Write-up Repository
        </h3>
        <p className="mt-2 text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          Reusable documentation templates and technical write-ups from CTF
          challenges, TryHackMe rooms, authorized labs and intentionally
          vulnerable applications.
        </p>
        <p className="mt-3 text-neutral-500" style={{ fontSize: "0.82rem", fontFamily: "ui-monospace, monospace" }}>
          TryHackMe rooms, authorized labs, and technical notes
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
            Updated as new write-ups are completed
          </span>
        </div>
      </div>
    </Section>
  );
}
