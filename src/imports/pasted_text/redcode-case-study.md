Add a responsive project case-study page for RedCode to my existing cybersecurity portfolio.

Use the four attached screenshots as real evidence. Do not redraw terminal content, fabricate results, alter text, or create fake code blocks. Keep screenshots readable and use them only in the evidence sections, not as decorative backgrounds.

All visible copy must be professional English.

PROJECT

Name: RedCode

One-line description:
An evidence-first OpenCode workspace for authorized security assessments and CTF workflows.

Positioning:
RedCode coordinates specialist agents, role-scoped MCP tools, structured JSON evidence, and SQLite tracking. The analyst remains responsible for scope, validation, and final reporting.

Do not describe RedCode as autonomous, production-ready, or a novel vulnerability discovery platform.

VISUAL DESIGN

Create a light, technical, engineering-focused design.

Colors:
- Background: #F7F8FA
- Main surface: #FFFFFF
- Secondary surface: #ECEFF3
- Text: #171A1F
- Muted text: #66707C
- RedCode red: #C9363E
- Dark red: #A8242C
- Technical blue: #16708A
- Success green: #257A45
- Border: #C8CED6

Use a restrained layout with sharp hierarchy, compact labels, tables, timelines, and technical diagrams. Maximum border radius: 8px.

Avoid gradients, glassmorphism, neon green, matrix visuals, hacker clichés, decorative orbs, oversized hero typography, marketing language, and excessive cards.

PAGE STRUCTURE

1. Project Header

Title:
RedCode

Supporting copy:
An AI-assisted offensive security workspace built on OpenCode for authorized assessments and CTF workflows.

Technology labels:
OpenCode, Python, SQLite, MCP, Docker, GitHub Actions, HexStrike

Add compact links:
GitHub Repository
Technical Documentation

2. Why I Built It

Heading:
Preserving Security Context

Copy:
Security assessment context is often lost between reconnaissance output, scanners, manual validation, notes, and reports. RedCode keeps that context in inspectable files while leaving authorization and technical judgment with the analyst.

3. Architecture

Create a clean technical flow:

Analyst
→ RedCode Orchestrator
→ Specialist Agents
→ Role-Scoped MCP Tools
→ JSON Evidence and SQLite Index

Below the flow, add a control layer:

Engagement Manifest and Scope Preflight

Label it clearly:
Scope preflight, not a network sandbox

4. Local Juice Shop Validation

Heading:
End-to-End Local Lab Validation

Use screenshot 1 here.

Copy:
A controlled validation was performed against a disposable OWASP Juice Shop container bound only to 127.0.0.1:3000. The workflow verified normal registration, then reproduced a known mass-assignment training weakness using disposable accounts. The behavior was repeated on two clean containers.

5. Runtime Readiness

Heading:
Environment Verification

Use screenshot 2 here.

Show a compact callout:
- OpenCode available
- HexStrike backend healthy
- Database schema version 2
- Zero doctor errors
- MCP connectivity verified

Mention that optional capability warnings are reported transparently rather than hidden.

6. Evidence Comparison

Heading:
Normal Flow vs. Mass Assignment

Use screenshot 3 here.

Create a two-column comparison beside or below the screenshot.

Left:
Normal Registration
Expected role: customer
HTTP 201 Created

Right:
Mass Assignment
Client-supplied role: admin
Returned role: admin
HTTP 201 Created

Caption:
Passwords, authorization headers, JWTs, and disposable account identities were removed by a tested redaction utility before publication.

7. Test Verification

Heading:
Reproducible Integration Test

Use screenshot 4 here.

Create a compact results band showing:

2
Clean-container reproductions

6/6
Live integration and boundary tests

30
Repository tests

6
Sanitized JSON evidence files

CI
GitHub Actions passing

8. Engineering Decisions

Use a dense, two-column technical layout with these items:

Loopback-only testing
The live integration test skips unless the target resolves to localhost or another loopback address.

Conditional integration
The test runs only when REDCODE_JUICE_SHOP_URL is explicitly set.

Evidence redaction
A standard-library utility removes passwords, authorization headers, JWTs, tokens, and account identities.

Pinned lab image
The local Juice Shop reproduction guide records the exact Docker image digest.

CTF separation
Challenge artifacts remain separate from assessment findings and SQLite records.

Human-in-the-loop
The analyst defines scope, approves active behavior, validates evidence, and owns the final report.

9. Honest Limitations

Heading:
What This Does Not Claim

Include:
- The Juice Shop behavior is a known training scenario, not a novel vulnerability.
- Agent workflows are prompt-driven rather than transactional.
- Scope preflight does not intercept every network request.
- RedCode assists an analyst; it does not autonomously conduct penetration tests.

10. Closing

Heading:
Outcome

Copy:
RedCode demonstrates a reproducible workflow built around declared scope, focused automation, preserved evidence, tested redaction, and analyst-controlled validation.

Add a primary text link:
View RedCode on GitHub

RESPONSIVE REQUIREMENTS

Create polished desktop and mobile layouts.

On mobile:
- stack the customer/admin comparison vertically;
- preserve screenshot readability;
- keep architecture nodes compact;
- avoid horizontal overflow;
- maintain accessible body text sizes.

The final page should feel like a genuine engineering case study for penetration testers, security engineers, and technical recruiters, not a product marketing landing page.