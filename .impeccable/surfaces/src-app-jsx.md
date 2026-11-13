---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Surface brief: portfolio site (home + project pages)

Scope: whole site, `src/App.jsx` and routes `/` and `/work/:slug`. Mode: Experience (portfolio) with Persuade duties: resume, code and demo links reachable from the first viewport.
Audience/job: recruiters and engineers screening Summer 2027 SWE interns.
Constraints: PRODUCT.md accuracy rules; no phone number; team vs personal work separate; metrics keep their conditions (here as numbered footnotes); synthetic trace data labelled.
History: datasheet build rejected ("looks lazy"); live-trace build kept for its animation but the user then said the text "looks AI and not clean like the Apple site" and asked for animations. This build pins the Apple product-page look.

## Direction contract

THESIS: Matt presented the way Apple presents a product: one idea per screen, big confident type, the work shown running, and every number backed by a footnote. It refuses dense dashboards, kicker labels and decorative chrome.

OWN-WORLD: true black ground (white in light theme), #161617 tiles with 28px radius, #f5f5f7 / #a1a1a6 / #8a8a8f ink, a single link blue (#2997ff dark, #0066cc light) for every action, Inter with optical sizing and tight negative tracking at display sizes, chevron text links, a translucent blurred 48px nav, numbered footnotes in small grey type. The four validated service colours appear only inside the live trace.

STORY: the visitor meets the name and one plain sentence, reads a statement that lights up word by word as they scroll, then sees three project chapters (headline, one-line lede, read/code/demo links, a showcase that scales into place), a by-the-numbers grid that counts up, experience, a short about, and a big "Let's talk." with the email.

FIRST VIEWPORT: centred "Matt Farzaneh" at up to 120px, a one-sentence grey intro, two blue chevron links (Download résumé, See the work); the first words of the statement begin below the fold line.

FORM: Apple product page, pinned by the user: "not clean like the apple site i want animations". seed: none (pinned). Signature interactions: word-by-word scroll reveal of the statement; showcase tiles that scale from 88% to full size with scroll; the live Urbanova trace replay inside the first showcase; count-up numbers with footnote links; hero blur-in entrance; expandable experience rows. All static under reduced motion; the live trace pauses offscreen and has a pause control.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
