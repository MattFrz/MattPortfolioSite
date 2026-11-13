# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and engineers screening candidates for summer 2027 software engineering internships and co-ops at big tech and strong product companies (named targets: Pinterest, Palantir, Amazon). They usually arrive from a resume link or application, on a laptop, with a few minutes at most, and decide whether to read further, open the code, or move the candidate forward.

Secondary: people interested in Matt's longer-term areas (quantitative development, trading systems, ML engineering) and hackathon teammates.

## Product Purpose

A personal portfolio for Matt Farzaneh, a Toronto-based Computer Science student at Western University (B.Sc. Honors Computer Science, Minor in Software Engineering, expected April 2028). Within a short visit, a reader should understand:

1. What Matt builds.
2. What he personally contributed, separate from team work.
3. What makes the work technically substantive.
4. Where to see the code or demo.
5. How to download the resume or get in touch.

Success: a recruiter or engineer opens a project's code or demo, downloads the resume, or emails Matt.

## Positioning

Matt is positioned as a software engineer first. Finance is one domain he builds in, not the whole identity. What distinguishes the work is that it checks whether its own outputs are correct: an order book validated against the venue's reference book, simulation jobs that recover from interruption and reject stale results, AI outputs validated in code with deterministic fallbacks, and retrieval that cannot read documents from the future.

## Operating Context

- Readers jump between the site, the PDF resume, GitHub, and LinkedIn.
- Every project link must say whether it opens code or a live demo.
- Toronto office attendance matters for some targets (Pinterest Toronto).

## Capabilities and Constraints

- Existing React 19 + Vite single-page site deployed on Vercel (https://matt-portfolio-site-tau.vercel.app).
- Featured projects: Urbanova (Hack the Valley 11, Oct 2026, team of four), Nasdaq ITCH Market Data Engine (solo, Aug 2026), AI Quant Council (IgnitionHacks V7, Aug 2026, team of four).
- Experience: University Pension Plan Ontario (Analyst Intern, Strategic Initiatives (Software Development), May 2026 to present); After Image Inc (Co-Founder / Developer, Jun 2025 to May 2026); K&D Consulting (Data Engineer & Business Analyst, May 2024 to Sep 2025).
- Concise homepage summaries with deeper project pages; not a resume dump.
- Public contact: email, GitHub, LinkedIn. No phone number on the site.

## Brand Commitments

Voice: direct, natural, short, confident, specific. Honest tradeoffs and limitations. A little personality.
Banned: obvious AI prose, excessive em dashes, dramatic storytelling, "passionate developer", inflated or buzzword copy, "Leveraged X to empower Y" constructions, forced inspirational endings.
No visual theme has been chosen by the user; no palette or aesthetic is binding.

## Evidence on Hand

- Public repos and live demos for all three featured projects (links in the content files).
- Resume PDFs: `public/resume.pdf` (SWE version).
- Verified in repos (Nov 2026): ITCH README results (14,270,119 events; 3,774,380 checkpoints and 226,462,800 field comparisons against Databento mbp-10 with 0 mismatches; duplicate-execution bug; 23.27 ns/message and 43.0M messages/s in-memory with 0 allocations per message on one pinned core; backtest +$378 naive vs -$1,598 realistic, 37.3% passive fill rate). Urbanova team-contribution section lists Matt's lane. AI Quant Council `docs/team_ownership.md` lists Matt's lane (data, backtester, risk engine, job runner, result cache, C++); tests.md reports 229 passing, 4 skipped.
- No screenshots of employer systems may be published. No testimonials, user counts, revenue, or adoption figures exist; none may be invented.
- Hackathon participation is established; wins are not.

## Product Principles

1. Lead with what Matt built and how he knows it works.
2. Keep team work and personal contribution visibly separate.
3. Every metric keeps its conditions attached (in-memory, backtest, observed).
4. Make code and demo links impossible to miss and clearly labelled.
5. Readable and fast without animation.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard navigation, reduced-motion support, readable on mobile, usable without JavaScript-heavy effects.
