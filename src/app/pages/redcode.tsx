import { Link } from "react-router";
import { ArrowLeft, Github, FileText, ArrowRight, Check } from "lucide-react";
import { ExpandableImage } from "../components/expandable-image";

import shotValidation from "../../imports/Screenshot_2026-07-11_184539.png";
import shotDoctor from "../../imports/Screenshot_2026-07-11_183856.png";
import shotEvidence from "../../imports/Screenshot_2026-07-11_183937.png";
import shotTests from "../../imports/Screenshot_2026-07-11_184009.png";

const C = {
  bg: "#F7F8FA",
  surface: "#FFFFFF",
  surface2: "#ECEFF3",
  text: "#171A1F",
  muted: "#66707C",
  red: "#C9363E",
  redDark: "#A8242C",
  blue: "#16708A",
  green: "#257A45",
  border: "#C8CED6",
};

const REPO_URL = "https://github.com/Edoardo003/RedCode"; // repository link
const DOCS_URL = "https://github.com/Edoardo003/RedCode#readme"; // technical documentation

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="uppercase tracking-widest" style={{ fontSize: "0.68rem", fontWeight: 600, color: C.muted }}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 tracking-tight" style={{ fontSize: "1.375rem", fontWeight: 700, color: C.text }}>
        {title}
      </h2>
    </div>
  );
}

function Figure({ src, alt, caption, expandable = false }: { src: string; alt: string; caption?: string; expandable?: boolean }) {
  return (
    <figure className="overflow-hidden border" style={{ borderColor: C.border, borderRadius: 8, background: C.surface }}>
      {expandable
        ? <ExpandableImage src={src} alt={alt} />
        : <img src={src} alt={alt} className="block w-full" style={{ background: "#0b0b0b" }} />
      }
      {caption && (
        <figcaption className="border-t px-4 py-2" style={{ borderColor: C.border, color: C.muted, fontSize: "0.8rem" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const archNodes = [
  "Analyst",
  "RedCode Orchestrator",
  "Specialist Agents",
  "Role-Scoped MCP Tools",
  "JSON Evidence + SQLite Index",
];

const decisions: { title: string; text: string }[] = [
  { title: "Loopback-only testing", text: "The live integration test skips unless the target resolves to localhost or another loopback address." },
  { title: "Conditional integration", text: "The test runs only when REDCODE_JUICE_SHOP_URL is explicitly set." },
  { title: "Evidence redaction", text: "A standard-library utility removes passwords, authorization headers, JWTs, tokens, and account identities." },
  { title: "Pinned lab image", text: "The local Juice Shop reproduction guide records the exact Docker image digest." },
  { title: "CTF separation", text: "Challenge artifacts remain separate from assessment findings and SQLite records." },
  { title: "Human-in-the-loop", text: "The analyst defines scope, approves active behavior, validates evidence, and owns the final report." },
];

const band = [
  { metric: "2", label: "Clean-container reproductions" },
  { metric: "6/6", label: "Live integration and boundary tests" },
  { metric: "30", label: "Repository tests" },
  { metric: "6", label: "Sanitized JSON evidence files" },
  { metric: "CI", label: "GitHub Actions passing" },
];

const limitations = [
  "The Juice Shop behavior is a known training scenario, not a novel vulnerability.",
  "Agent workflows are prompt-driven rather than transactional.",
  "Scope preflight does not intercept every network request.",
  "RedCode assists an analyst; it does not autonomously conduct penetration tests.",
];

export function RedCodeCaseStudy() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Top bar */}
      <div className="border-b" style={{ borderColor: C.border, background: C.surface }}>
        <div className="mx-auto max-w-[940px] px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:underline"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: C.muted }}
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
        </div>
      </div>

      {/* 1. Project Header */}
      <header className="border-b" style={{ borderColor: C.border, background: C.surface }}>
        <div className="mx-auto max-w-[940px] px-6 py-12">
          <div className="flex items-center gap-3">
            <span className="inline-block" style={{ width: 10, height: 10, background: C.red, borderRadius: 2 }} />
            <h1 className="tracking-tight" style={{ fontSize: "2rem", fontWeight: 700 }}>RedCode</h1>
          </div>
          <p className="mt-3 max-w-2xl" style={{ fontSize: "1.05rem", lineHeight: 1.6, color: C.text }}>
            An AI-assisted offensive security workspace built on OpenCode for
            authorized assessments and CTF workflows.
          </p>
          <p className="mt-3 max-w-2xl" style={{ color: C.muted, lineHeight: 1.6 }}>
            RedCode coordinates specialist agents, role-scoped MCP tools,
            structured JSON evidence, and SQLite tracking. The analyst remains
            responsible for scope, validation, and final reporting.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["OpenCode", "Python", "SQLite", "MCP", "Docker", "GitHub Actions", "HexStrike"].map((t) => (
              <span key={t} className="border px-2.5 py-1" style={{ borderColor: C.border, background: C.surface2, borderRadius: 6, fontSize: "0.78rem", fontFamily: "ui-monospace, monospace", color: C.text }}>
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3.5 py-2 text-white" style={{ background: C.red, borderRadius: 6, fontSize: "0.875rem", fontWeight: 500 }}>
              <Github size={15} /> GitHub Repository
            </a>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-3.5 py-2" style={{ borderColor: C.border, borderRadius: 6, fontSize: "0.875rem", fontWeight: 500, color: C.text }}>
              <FileText size={15} /> Technical Documentation
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[940px] px-6">
        {/* 2. Why I built it */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Why I built it" title="Preserving Security Context" />
          <p className="max-w-3xl" style={{ lineHeight: 1.7, color: C.text }}>
            Security assessment context is often lost between reconnaissance
            output, scanners, manual validation, notes, and reports. RedCode
            keeps that context in inspectable files while leaving authorization
            and technical judgment with the analyst.
          </p>
        </section>

        {/* 3. Architecture */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Architecture" title="Coordination Flow" />
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
            {archNodes.map((node, i) => (
              <div key={node} className="flex items-center gap-2 lg:flex-1 lg:flex-col lg:justify-center">
                <div className="w-full border px-3 py-3 text-center" style={{ borderColor: C.border, background: C.surface, borderRadius: 8, fontSize: "0.82rem", fontWeight: 500 }}>
                  {node}
                </div>
                {i < archNodes.length - 1 && (
                  <ArrowRight size={16} style={{ color: C.blue }} className="shrink-0 rotate-90 lg:rotate-0" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 border px-4 py-4" style={{ borderColor: C.border, background: C.surface2, borderRadius: 8 }}>
            <p style={{ fontWeight: 600 }}>Engagement Manifest and Scope Preflight</p>
            <p className="mt-1" style={{ color: C.muted, fontSize: "0.85rem" }}>
              Scope preflight, not a network sandbox.
            </p>
          </div>
        </section>

        {/* 4. Local Juice Shop Validation */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Validation" title="End-to-End Local Lab Validation" />
          <p className="mb-5 max-w-3xl" style={{ lineHeight: 1.7 }}>
            A controlled validation was performed against a disposable OWASP
            Juice Shop container bound only to 127.0.0.1:3000. The workflow
            verified normal registration, then reproduced a known mass-assignment
            training weakness using disposable accounts. The behavior was
            repeated on two clean containers.
          </p>
          <Figure src={shotValidation} alt="RedCode Juice Shop validation summary and active engagement scope" expandable />
        </section>

        {/* 5. Runtime Readiness */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Runtime Readiness" title="Environment Verification" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
            <Figure src={shotDoctor} alt="RedCode doctor output verifying tooling, database schema and HexStrike health" expandable />
            <div className="border p-5" style={{ borderColor: C.border, background: C.surface, borderRadius: 8 }}>
              <ul className="space-y-2">
                {["OpenCode available", "HexStrike backend healthy", "Database schema version 2", "Zero doctor errors", "MCP connectivity verified"].map((item) => (
                  <li key={item} className="flex items-baseline gap-2" style={{ fontSize: "0.9rem" }}>
                    <Check size={14} style={{ color: C.green }} className="shrink-0 translate-y-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4" style={{ color: C.muted, fontSize: "0.82rem", lineHeight: 1.5 }}>
                Optional capability warnings are reported transparently rather
                than hidden.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Evidence Comparison */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Evidence" title="Normal Flow vs. Mass Assignment" />
          <Figure src={shotEvidence} alt="jq comparison of normal registration evidence versus mass-assignment evidence" expandable />

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border p-6" style={{ borderColor: C.border, background: C.surface, borderRadius: 8 }}>
              <p className="uppercase tracking-widest" style={{ fontSize: "0.68rem", fontWeight: 600, color: C.muted }}>Normal Registration</p>
              <dl className="mt-3 space-y-1.5" style={{ fontSize: "0.9rem", fontFamily: "ui-monospace, monospace" }}>
                <div className="flex justify-between gap-4"><dt style={{ color: C.muted }}>Expected role</dt><dd>customer</dd></div>
                <div className="flex justify-between gap-4"><dt style={{ color: C.muted }}>Status</dt><dd style={{ color: C.green }}>HTTP 201 Created</dd></div>
              </dl>
            </div>
            <div className="border-2 p-6" style={{ borderColor: C.red, background: "#FDF3F3", borderRadius: 8 }}>
              <p className="uppercase tracking-widest" style={{ fontSize: "0.68rem", fontWeight: 600, color: C.red }}>Mass Assignment</p>
              <dl className="mt-3 space-y-1.5" style={{ fontSize: "0.9rem", fontFamily: "ui-monospace, monospace" }}>
                <div className="flex justify-between gap-4"><dt style={{ color: C.muted }}>Client-supplied role</dt><dd style={{ color: C.red }}>admin</dd></div>
                <div className="flex justify-between gap-4"><dt style={{ color: C.muted }}>Returned role</dt><dd style={{ color: C.red }}>admin</dd></div>
                <div className="flex justify-between gap-4"><dt style={{ color: C.muted }}>Status</dt><dd>HTTP 201 Created</dd></div>
              </dl>
            </div>
          </div>
          <p className="mt-4" style={{ color: C.muted, fontSize: "0.82rem", lineHeight: 1.5 }}>
            Passwords, authorization headers, JWTs, and disposable account
            identities were removed by a tested redaction utility before
            publication.
          </p>
        </section>

        {/* 7. Test Verification */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Test Verification" title="Reproducible Integration Test" />
          <Figure src={shotTests} alt="Python unittest run showing six passing integration and boundary tests" expandable />

          <div className="mt-5 grid grid-cols-2 border-l border-t sm:grid-cols-3 lg:grid-cols-5" style={{ borderColor: C.border }}>
            {band.map((b) => (
              <div key={b.label} className="border-b border-r p-4" style={{ borderColor: C.border, background: C.surface }}>
                <div className="tracking-tight" style={{ fontSize: "1.5rem", fontWeight: 700, color: C.blue }}>{b.metric}</div>
                <div className="mt-1" style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.4 }}>{b.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Engineering Decisions */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Engineering Decisions" title="How Scope and Evidence Are Controlled" />
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {decisions.map((d) => (
              <div key={d.title}>
                <p style={{ fontWeight: 600 }}>{d.title}</p>
                <p className="mt-1" style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.6 }}>{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Honest Limitations */}
        <section className="border-b py-12" style={{ borderColor: C.border }}>
          <SectionTitle eyebrow="Honest Limitations" title="What This Does Not Claim" />
          <ul className="space-y-2">
            {limitations.map((l) => (
              <li key={l} className="flex items-baseline gap-3" style={{ lineHeight: 1.6 }}>
                <span className="shrink-0" style={{ color: C.muted, fontSize: "0.7rem" }}>▸</span>
                {l}
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Closing */}
        <section className="py-12">
          <SectionTitle eyebrow="Outcome" title="Outcome" />
          <p className="max-w-3xl" style={{ lineHeight: 1.7 }}>
            RedCode demonstrates a reproducible workflow built around declared
            scope, focused automation, preserved evidence, tested redaction, and
            analyst-controlled validation.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 hover:underline"
            style={{ color: C.red, fontWeight: 600 }}
          >
            <Github size={16} /> View RedCode on GitHub
          </a>
        </section>
      </main>
    </div>
  );
}
