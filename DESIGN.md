---
name: Matt Farzaneh
description: A software engineer presented the way Apple presents a product, one idea per screen, big confident type, the work shown running, and every number footnoted.
colors:
  link-blue: "#2997ff"
  ground-black: "#000000"
  tile-graphite: "#161617"
  control-graphite: "#232325"
  hairline: "#333336"
  rule-strong: "#48484b"
  ink: "#f5f5f7"
  ink-2: "#a1a1a6"
  ink-3: "#8a8a8f"
  nav-veil: "rgba(22, 22, 23, 0.8)"
  selection: "#0b4a8c"
  api-amber: "#cb8315"
  postgres-teal: "#16a7a3"
  worker-violet: "#966cd7"
  validate-green: "#62a948"
  status-ok: "#30d158"
  status-warn: "#ffd60a"
  status-bad: "#ff6961"
  link-blue-light: "#0066cc"
  button-blue: "#0071e3"
  ground-white: "#ffffff"
  tile-light: "#f5f5f7"
  control-light: "#e8e8ed"
  hairline-light: "#d2d2d7"
  rule-strong-light: "#b8b8bd"
  ink-light: "#1d1d1f"
  ink-2-light: "#6e6e73"
  ink-3-light: "#6e6e73"
  nav-veil-light: "rgba(255, 255, 255, 0.8)"
  selection-light: "#b4d7ff"
  api-amber-light: "#b86b00"
  postgres-teal-light: "#00897d"
  worker-violet-light: "#794db6"
  validate-green-light: "#428731"
  status-ok-light: "#1d7a34"
  status-warn-light: "#8a6d00"
  status-bad-light: "#d70015"
typography:
  display:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(56px, 10vw, 120px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(48px, 8vw, 96px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(56px, 6vw, 80px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
  section-title:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(40px, 5.6vw, 64px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(30px, 4.4vw, 60px)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(24px, 2.6vw, 32px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(21px, 2.4vw, 28px)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  prose:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.022em"
  body:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.022em"
    fontFeature: "'cv11'"
  label:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  footnote:
    fontFamily: "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  tile: "28px"
  tile-compact: "22px"
  card: "18px"
  bar: "10px"
  span: "6px"
  focus: "4px"
  pill: "980px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 48px)"
  band: "clamp(96px, 12vw, 160px)"
  title-gap: "clamp(40px, 5vw, 64px)"
  section: "clamp(64px, 8vw, 96px)"
  row: "40px"
  list-row: "16px"
  grid: "20px"
  card-pad: "20px"
components:
  nav-bar:
    backgroundColor: "{colors.nav-veil}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "48px"
    padding: "0 clamp(20px, 5vw, 48px)"
  text-link:
    textColor: "{colors.link-blue}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.link-blue-light}"
    textColor: "{colors.ground-white}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
  button-secondary:
    textColor: "{colors.link-blue}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
  nav-pill:
    backgroundColor: "{colors.link-blue-light}"
    textColor: "{colors.ground-white}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  icon-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "32px"
  icon-button-hover:
    backgroundColor: "{colors.control-graphite}"
  tile:
    backgroundColor: "{colors.tile-graphite}"
    rounded: "{rounded.tile}"
    padding: "clamp(24px, 4vw, 48px)"
  number-tile:
    backgroundColor: "{colors.tile-graphite}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.tile}"
    padding: "36px 32px"
  inner-card:
    backgroundColor: "{colors.ground-black}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  note-card:
    backgroundColor: "{colors.tile-graphite}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.card}"
    padding: "20px 24px"
  chip:
    backgroundColor: "{colors.control-graphite}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  segmented-control:
    backgroundColor: "{colors.control-graphite}"
    rounded: "{rounded.pill}"
    padding: "3px"
  segmented-control-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground-black}"
    rounded: "{rounded.circle}"
    size: "30px"
---

# Design System: Matt Farzaneh

## Overview

**Creative North Star: "The Product Page"**

Matt is presented the way Apple presents a product: one idea per screen, big confident type, the work shown running, and every number backed by a footnote. A visit reads as a sequence of full-width moments: a centred name and one plain sentence, a statement that lights up word by word as it scrolls past, three project chapters whose showcase tiles grow into place, a grid of footnoted numbers, expandable experience rows, and a closing "Email me." set as large as the name. The work itself sits inside soft grey tiles on a true black ground, and the first showcase is a live trace replay rather than a picture of one.

The palette is almost colourless. Black ground, one step of graphite for tiles, three greys of ink, and a single link blue for every action. Colour beyond that blue lives only inside the live trace, where four colour-blind-validated service hues and three status hues encode data. Type is one family, Inter with optical sizing, tracked tight at display sizes and relaxed at body sizes; JetBrains Mono appears only where the reader is reading data. Depth comes from tone, never shadow: the only material effect is the translucent, blurred 48px navigation bar.

Dark is the default theme and the one the world was built in; light is a full alternate that maps every role to an Apple-light equivalent (white ground, #f5f5f7 tiles, #1d1d1f ink, #0066cc link). Motion is generous but always optional: everything is visible by default, scroll-linked effects resolve to their end state under reduced motion, and the live trace pauses offscreen, in hidden tabs, and on demand. The site rejects dense dashboards, kicker labels and decorative chrome.

**Key Characteristics:**
- True black (or white) ground with graphite tiles at a 28px radius.
- One link blue for every action, written as chevron text links.
- Inter with optical sizing, 700 weight, tight negative tracking at display sizes, centred.
- Colour beyond blue appears only inside the live trace, as data.
- Flat tonal depth; the blurred nav bar is the one translucent surface.
- Scroll-driven signature motion, fully static under reduced motion.
- Numbers carry superscript footnote links to a small grey footnote block.

## Colors

A near-monochrome ground of black, graphite and three greys, broken by one blue for action and, only inside the live trace, a validated data palette.

### Primary
- **Sky Link Blue** (link-blue, dark theme): every action on the page, as text. Chevron links, the experience disclosure, the back link, the outline button's stroke and label, the focus ring, the flow packet, and the ITCH stage bars (as `color-mix` tints of itself toward the tile). It reads 6.0:1 on tiles and 7.0:1 on black.
- **Deep Link Blue** (link-blue-light): the light theme's link colour, and the fill for any blue control carrying white text in either theme (5.6:1 with white).

### Secondary (live trace only)
- **API Amber** (api-amber / api-amber-light): API spans, their dot and legend swatch.
- **Postgres Teal** (postgres-teal / postgres-teal-light): database spans.
- **Worker Violet** (worker-violet / worker-violet-light): worker spans.
- **Validate Green** (validate-green / validate-green-light): validation spans.

These four are fills only (dots, bars, swatches), never text. Each clears 3:1 against its tile in both themes.

### Tertiary (status, live trace only)
- **Signal Green** (status-ok / status-ok-light): the live dot while running, successful events, the "ok" outcome line.
- **Caution Yellow** (status-warn / status-warn-light): stalled spans and warning events.
- **Alarm Coral** (status-bad / status-bad-light): rejected writes, error bars, the 409 duration, failed outcomes. Bad events are set bold so the state does not rely on hue.

### Neutral
- **True Black** (ground-black) / **Paper White** (ground-white): the page ground. Also the fill of inner cards that sit inside a tile, so they read as cut into it.
- **Graphite Tile** (tile-graphite) / **Mist Tile** (tile-light): every tile, the footnote and footer band, and note cards.
- **Control Graphite** (control-graphite) / **Control Mist** (control-light): chips, the segmented trace switch, the pause button, and icon-button hover.
- **Hairline** (hairline / hairline-light): 1px rules between experience rows, fact lists, skills, trace rows and the footer.
- **Strong Rule** (rule-strong / rule-strong-light): flow-diagram arrows.
- **Ink** (ink / ink-light): headings and primary text.
- **Ink Two** (ink-2 / ink-2-light): ledes, intros, role titles, skill values, secondary copy.
- **Ink Three** (ink-3 / ink-3-light): dates, captions, footnotes, the footer, axis ticks, bullet dots. In light it collapses into Ink Two so small grey text keeps 4.5:1.
- **Nav Veil** (nav-veil / nav-veil-light): the 80% translucent nav fill under `saturate(180%) blur(20px)`.
- **Selection Blue** (selection / selection-light): text selection, themed from the link hue.

### Named Rules
**The One Blue Rule.** Outside the live trace, Link Blue is the only chromatic colour on the page. It marks every action and, in figures, is the single data hue (as tints). A second accent is outside this world.

**The Trace Quarantine Rule.** The four service colours and three status colours appear only inside the live trace. They never colour a heading, link, tile or figure elsewhere.

**The White-On-Blue Rule.** White text sits only on Button Blue (#0071e3, about 4.6:1) or darker. Sky Link Blue (#2997ff) is a text colour, not a fill for white text (3.0:1).

## Typography

**Display Font:** Inter Variable, self-hosted with the optical-size axis (with Inter, -apple-system, BlinkMacSystemFont, Segoe UI)
**Body Font:** Inter Variable (same stack)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, SF Mono, Menlo, Consolas)

**Character:** One grotesque doing everything, from a 120px name to 12px footnotes, with `font-optical-sizing: auto` reshaping it at each size and tracking tightening as size grows. The mono is an instrument readout, not a voice.

### Hierarchy
- **Display** (700, up to 120px, 1.0): the name on the home hero, and "Email me." (up to 112px). Centred. The 120px ceiling is pinned by the brief.
- **Headline** (700, up to 96px, 1.02): project chapter headlines on the home page; project-page titles use the same voice at up to 80px with `text-wrap: balance`.
- **Numeral** (700, up to 80px, 1.0, tabular figures): the count-up values in number tiles.
- **Section Title** (700, up to 64px, 1.06): centred band titles that end in a full stop ("What I measured.", "Experience.", "Outside of work.").
- **Statement** (650, up to 60px, 1.12): the scroll-lit statement, one large paragraph, `text-wrap: pretty`.
- **Title** (700, up to 32px, 1.15): employer names in experience rows; project-page section heads use 700 at up to 40px.
- **Lede** (500, up to 28px, 1.25, Ink Two): hero intro (30ch), chapter ledes (600, up to 32px, 28ch), project summaries, contact sub-line. Always balanced.
- **Prose** (400, 19px, 1.5): project-page paragraphs and long lists inside a 720px column; role summaries cap at 60ch.
- **Body** (400, 17px, 1.47, `cv11`): the base size for links, buttons and default text.
- **Label** (400, 13px): nav links (at 80% opacity), captions, trace meta, chips (12px).
- **Footnote** (400, 12px, 1.42, Ink Three): the numbered footnote list and footer.
- **Mono** (400, 12.5px, tracking 0): trace title (14px, 600), span names, durations, axis ticks (11px), flow-arrow protocol labels (10px).

### Named Rules
**The Tighten-With-Size Rule.** Tracking scales with size: -0.01em at 12 to 15px, -0.022em at body, -0.025em to -0.03em at lede and title, -0.035em at section and statement sizes, -0.04em at display. The floor is -0.04em.

**The Data-Only Mono Rule.** JetBrains Mono is used only for trace names, durations, ticks and protocol labels: things a reader would copy from a log. Words that explain are always Inter.

**The Weight Steps Rule.** Weights are 400, 500, 600, 650 and 700, nothing lighter. Emphasis comes from size and weight, never from colour or gradient.

## Layout

Three centred measures carry the whole site: 1120px for bands and showcases, 980px for the hero, chapter heads, experience and footnotes, and 720px for reading (about, skills, project pages). A fluid gutter (`clamp(20px, 5vw, 48px)`) holds every edge.

Bands are separated by `clamp(96px, 12vw, 160px)` of space above them, section titles sit `clamp(40px, 5vw, 64px)` above their content, and project-page sections step by `clamp(64px, 8vw, 96px)`. Groups inside are tight: 20px between tiles, 12 to 16px between a heading and its lede, 24 to 28px down to links. The hero takes `clamp(96px, 16vh, 180px)` above the name so the first statement words start below the fold.

The voice is centred (hero, chapter heads, section titles, numbers band title, contact), the reading is left-aligned (experience rows, about copy, project pages). Experience rows are a 220px date column beside the body; skills and fact lists are a 9rem / 7rem term column beside the value, ruled with hairlines. The numbers band is a three-column tile grid. On project pages, figures break out of the 720px column by 140px on each side at 1000px and above.

The statement band is 240vh tall with a sticky 100vh stage; the live trace and figures reflow at small widths rather than shrinking.

Breakpoints: at 1000px the number grid drops to two columns and the flow diagram stacks vertically with downward arrows; at 760px the nav links hide (résumé pill and theme toggle stay), numbers go single-column, experience and fact rows stack, the trace drops its axis and stacks each span's label above its bar, and the statement shortens to 200vh.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth is one tonal step: graphite tiles on a black ground, with inner cards cut back to black inside a tile, and control surfaces one step lighter again. Hairlines separate list rows; they never outline tiles. The only material effect is the sticky navigation bar, an 80% veil under `backdrop-filter: saturate(180%) blur(20px)`, which lets the page move under it.

### Named Rules
**The Tone-Not-Shadow Rule.** A surface is raised by one tonal step, never by a shadow or glow. If something needs to stand forward, it moves to the next grey.

**The One Veil Rule.** Blur and translucency belong to the sticky navigation bar alone. Tiles, cards and controls are opaque.

## Shapes

Generous, soft rectangles at two scales. Tiles (number tiles, figures, the live trace) take a 28px radius, dropping to 22px for the trace on phones. Cards nested inside a tile, and note cards in reading columns, take 18px. Every control is a full pill (980px) or a circle: buttons, chips, the résumé pill, the segmented switch, the pause and icon buttons. Data marks keep small consistent rounds: 10px on 20px stage and value bars, 6px on 12px trace spans, full circles on 5 to 10px dots (service swatches, bullets, events, the live dot). Arrows in the flow diagram are 1px lines with a `clip-path` triangle head. No borders on tiles; 1px hairlines only between rows.

## Components

### Buttons
Quiet, Apple-style pills; most actions are text links, buttons are reserved for project-page heroes.
- **Shape:** full pill (980px), 44px tall, 22px side padding, 17px weight 500, 8px gap to a 16px Feather icon.
- **Primary:** Deep Link Blue fill with white text. Hover mixes 15% white into the fill.
- **Secondary (outline):** transparent with a 1px Link Blue stroke and Link Blue label; hover washes the fill with 12% Link Blue. External targets end in a 13px up-right arrow.
- **Focus:** a 2px Link Blue outline offset 3px with a 4px radius, site-wide.
- **Résumé pill (nav):** 12px weight 500, 4px by 12px, blue fill with white text, hover brightens.
- **Icon button:** 32px circle, 16px Feather icon at 80% opacity; hover goes to full opacity on Control Graphite.

### Text links ("More" chevron links)
The primary action device. Link Blue, inheriting the surrounding size, followed by a Feather chevron at 0.85em. Hover underlines (offset 0.18em) and nudges the chevron 3px right over 220ms. Groups of them wrap centred with 12 to 32px gaps (hero, chapter heads, contact). External ones state "(opens in a new tab)" to assistive tech.

### Chips
- **Style:** Control Graphite fill, Ink Two text, 12px, pill, 2px by 10px. Used once, for the trace's "replay · illustrative timings" label, which keeps synthetic data honest.

### Segmented control
The trace picker: a Control Graphite pill with 3px padding holding 30px circular number buttons. The current one inverts (Ink fill, ground-colour text) and is marked `aria-pressed`; others are Ink Two and brighten on hover.

### Cards / Containers
- **Tile:** Graphite Tile, 28px radius, `clamp(24px, 4vw, 48px)` padding, 13px Ink Three figcaption 24px below the figure, capped at 80ch.
- **Number tile:** Graphite Tile, 28px radius, 36px by 32px padding (28px on phones), 260px minimum height with the value at top and a 19px weight 600 Ink Two label at the bottom. The value counts up once (1400ms, quartic ease-out) and its label ends in a superscript footnote number linking to the footnote block. Earned by the brief's by-the-numbers band; not a general page device.
- **Inner card:** True Black (ground) fill, 18px radius, 20px padding, 19px weight 700 title over a 15px Ink Two detail. Only inside a tile.
- **Note card:** Graphite Tile, 18px radius, 20px by 24px, Ink Two text with a bold Ink lead-in ("Team context.").

### Navigation
Sticky, 48px, Nav Veil with blur. The wordmark "Matt Farzaneh" at 15px weight 650 on the left; five 13px links at 80% opacity (full on hover) pushed right with 28px gaps; then the blue résumé pill and the theme icon button. Below 760px the links hide. The bar holds still during page view-transitions while the page cross-fades.

### Experience row
A ruled row (hairline top, last row also bottom), 40px vertical padding: 15px Ink Three tabular dates in a 220px column, then a Title-size employer, Ink Two role, a 19px summary (60ch), and a Link Blue "More details" toggle whose chevron rotates 180°. Details open by animating `grid-template-rows` from 0fr to 1fr (500ms) with opacity; closed details are `inert`. Bullets are 5px Ink Three dots.

### Live trace (signature)
The work, running. A 28px tile holding a header (live dot, mono title, meta, chip, segmented picker, pause button), a mono axis at 0 to 1000 ms, and span rows of 36px: an 8px service dot and mono name indented 18px per depth, a track with faint quarter gridlines, a 12px bar in the service colour that draws left to right, circular events that land with labels, and a mono duration that appears when the span ends. A 1px cursor sweeps the track. Stalled spans hatch their bar at 135°; rejected spans turn Alarm Coral with a bold "409". A foot line resolves the outcome in its status colour beside the service legend. One custom property (`--t`) drives every mark; a trace plays in 7s and holds 2.2s before the next. It runs only while on screen, in a visible tab, unpaused and with motion allowed; otherwise it shows the finished state. A compact variant drops service names for project pages.

### Demo screenshots
Each home-page chapter's showcase opens with a screenshot of that project's live demo, in a Graphite Tile with the image edge to edge and a 13px Ink Three caption below. Tall captures (ITCH, AI Quant Council) sit inset at a capped width (`--shot-max`) with a 12px image radius so they don't fill several screens. The showcase stacks the screenshot above the project's figure with a 20px gap; AI Quant Council has the screenshot only, and its flow figure lives on the project page. Captions say whose work the screen shows and when the data is synthetic or in-sample. Screenshots are of the demos as published, never of employer systems.

### Figures
Drawn in HTML so they reflow and read to assistive tech. **Stage trace:** rows of name / track / tabular duration, 20px bars laid end to end, the earlier stages as lighter Link Blue tints, then a large weight-700 total. **Flow:** four inner cards joined by 1px arrows with mono protocol labels and a small blue packet that travels each arrow; stacks vertically below 1000px. **Diverging bars:** a 2px zero line, 20px Ink Three (positive) and Ink (negative) bars on one shared scale, values set beside the bar end.

### Footnotes and footer
A Graphite Tile band at the foot of the home page: a numbered list in 12px Ink Three. Jumping to a footnote briefly washes it with 22% Link Blue (1.8s). The footer shares the band colour, separated by a hairline, 12px Ink Three.

## Do's and Don'ts

### Do:
- **Do** put one idea per screen: a centred heading of 64px or more, at most one lede, then the work.
- **Do** write every action as a Link Blue chevron text link unless it sits in a project-page hero.
- **Do** place work inside Graphite Tiles (#161617, 28px radius) on the black ground, with inner cards cut back to the ground colour at 18px.
- **Do** attach a superscript footnote to every large number and keep the conditions in the footnote block.
- **Do** keep everything visible by default: entrances arm only for elements that start offscreen, scroll-linked values resolve to 1 under reduced motion, and the trace shows its finished state.
- **Do** use the house easing `cubic-bezier(0.28, 0.11, 0.32, 1)` for movement and `cubic-bezier(0.16, 1, 0.3, 1)` for fades.
- **Do** give each new signature moment its own motion; the 40px rise-in is the quiet supporting entrance, not a template for every section.
- **Do** theme browser surfaces from the palette: selection in Selection Blue, focus in a 2px Link Blue ring, tabular numerals in dates, durations and counts.
- **Do** build both themes from the same roles; dark ships by default.

### Don't:
- **Don't** add a second accent colour, or use service or status colours outside the live trace.
- **Don't** put white text on Sky Link Blue (#2997ff); fill with Button Blue (#0071e3) instead.
- **Don't** use box-shadows, glows or outlines on tiles; raise by one tonal step.
- **Don't** use blur or translucency anywhere but the navigation bar.
- **Don't** set kicker or eyebrow labels above headings; the heading speaks alone.
- **Don't** use gradients for decoration or text. The only gradients are data encodings in the trace: quarter gridlines and the stalled-span hatch.
- **Don't** set explanatory words in JetBrains Mono.
- **Don't** track display type tighter than -0.04em or set weights below 400.
- **Don't** use emoji or Unicode glyphs as icons; icons are Feather (react-icons/fi) at 16px.
- **Don't** fill pages with dense dashboard grids; the number tiles are the one grid of stats.
