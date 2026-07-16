import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./section";

const REPO_URL = "https://github.com/Edoardo003/ctf-writeups";

const writeups = [
  {
    title: "What's Your Name?",
    platform: "TryHackMe",
    difficulty: "Medium",
    summary:
      "Stored XSS chained from moderator session hijacking to an administrator password reset.",
    topics: ["Stored XSS", "Session Hijacking", "CSRF"],
    href: "https://github.com/Edoardo003/ctf-writeups/blob/main/TryHackMe/Whats-Your-Name/whats-your-name.md",
  },
  {
    title: "Injectics",
    platform: "TryHackMe",
    difficulty: "Intermediate",
    summary:
      "SQL injection flaws and Twig SSTI chained from a public login bypass to server-side file disclosure.",
    topics: ["SQL Injection", "Authentication Bypass", "Twig SSTI"],
    href: "https://github.com/Edoardo003/ctf-writeups/blob/main/TryHackMe/Injectics/injectics.md",
  },
  {
    title: "Hammer",
    platform: "TryHackMe",
    difficulty: "Intermediate",
    summary:
      "A password-reset rate-limit bypass and unsafe JWT key handling chained to command execution.",
    topics: ["Authentication", "JWT", "Web Security"],
    href: "https://github.com/Edoardo003/ctf-writeups/blob/main/TryHackMe/Hammer/hammer.md",
  },
];

export function SecurityWriteups() {
  return (
    <Section
      id="writeups"
      label="Security Write-ups"
      subtitle="Structured technical documentation from CTF challenges, authorized labs and intentionally vulnerable applications."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {writeups.map((writeup) => (
          <article key={writeup.title} className="flex h-full flex-col border border-black p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 style={{ fontSize: "1rem", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
                {writeup.title}
              </h3>
              <span className="border border-black/20 px-2 py-0.5 text-neutral-600" style={{ fontSize: "0.72rem", fontFamily: "ui-monospace, monospace" }}>
                {writeup.platform} / {writeup.difficulty}
              </span>
            </div>

            <p className="mt-2 text-neutral-600" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              {writeup.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {writeup.topics.map((topic) => (
                <span key={topic} className="border border-black/20 px-2 py-0.5 text-neutral-600" style={{ fontSize: "0.72rem" }}>
                  {topic}
                </span>
              ))}
            </div>

            <a
              href={writeup.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the ${writeup.title} write-up on GitHub (opens in a new tab)`}
              className="mt-5 inline-flex w-fit items-center gap-2 border border-black bg-black px-3.5 py-2 text-white transition-colors hover:bg-white hover:text-black md:mt-auto"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              Read {writeup.title} write-up
              <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-5">
        <div>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
            Write-up Repository
          </h3>
          <p className="mt-1 text-neutral-500" style={{ fontSize: "0.82rem" }}>
            All write-ups and templates on GitHub.
          </p>
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Write-up Repository on GitHub (opens in a new tab)"
          className="inline-flex items-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
          style={{ fontSize: "0.875rem", fontWeight: 500 }}
        >
          <Github size={15} />
          Browse repository
        </a>
      </div>
    </Section>
  );
}
