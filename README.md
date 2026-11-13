# Matt Farzaneh

Personal portfolio, built with React 19 and Vite. It follows Apple's product-page style: dark by default, big centred type in Inter, one idea per screen, and scroll animations (a statement that lights up word by word, showcases that scale into place, numbers that count up). The Urbanova chapter runs a live replay of the job pipeline I built. Every number links to a footnote with its test conditions, and each featured project has its own write-up page.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Structure

- `src/content.js` holds all copy: profile, home-page copy and footnotes, projects (with their write-ups), experience, skills, and the trace replays. Edit content here, not in components.
- `src/components/Home.jsx` is the home page: hero, scroll-lit statement, project chapters, measurements, experience, about, contact and footnotes. `src/components/ProjectPage.jsx` renders `/work/:slug` from the same content.
- `src/components/LiveTrace.jsx` is the animated trace. One CSS variable (`--t`) drives every bar, event and label. It pauses offscreen, in hidden tabs and on the pause button, and is static under reduced motion. Its data (`liveTraces` in `content.js`) is labelled illustrative.
- `src/hooks/useMotion.js` holds the scroll-progress, count-up, entrance, in-view and reduced-motion hooks.
- `src/components/Sheet.jsx` has the nav, external links, section headings and footer. `src/components/Figures.jsx` draws the flow, stage-timing and backtest figures in HTML.
- `src/router.js` and `src/components/Link.jsx` are a small History API router. Page changes use the View Transitions API when it's available and motion isn't reduced.
- `vercel.json` rewrites unknown paths to `index.html` so `/work/...` URLs load directly.
- `src/index.css` owns the tokens and styles: true black (white in light mode), #161617 tiles, one link blue, Inter with optical sizing, JetBrains Mono only for trace data. The four trace colours are used only inside the trace.

## Content rules

These come from the portfolio brief and are worth keeping when editing:

- Every metric keeps its conditions (in-memory, backtest, observed, team suite).
- Team work and personal contribution stay separate. AI Quant Council and Urbanova credit teammates by lane.
- No phone number on the site. No employer screenshots, internal prompts, or sensitive architecture.
- No invented adoption, revenue, users, or hackathon wins.

Facts were checked against each project's repository in November 2026. If a repo's numbers change (for example after a bug fix), update `src/content.js` to match.

## Assets

- `public/resume.pdf` is the SWE resume (about 200 KB). If you replace it, update `resumeSize` in `src/content.js`.
- `public/og.png` is a 1200 × 630 capture of the hero.
- `public/images/urbanova-walking-route-500-dundas.webp` is cropped from the Urbanova repo (`data/reviewed/walking_routes.png`), output of the data pipeline I built. Map data © OpenStreetMap contributors (ODbL); development data © City of Toronto.
- `public/images/urbanova-demo.webp`, `itch-engine-demo.webp` and `ai-quant-council-demo.webp` are screenshots of each project's live demo, captured with headless Chrome on 2026-11-13. Urbanova shows the saved run "2026-10-22 12:48 · New homes · current service" playing at 30×. ITCH Engine is the Streamlit viewer's overview on its bundled synthetic day, cropped to the header, summary tiles and equity chart. AI Quant Council is the Quantitative Validation panel after running the default example thesis. The Urbanova map tiles are © Mapbox © OpenStreetMap contributors. Recapture them if a demo changes.
- `public/images/matt-farzaneh-headshot.webp` (contact band) and the three `hack-the-valley-11-*.webp` photos (Urbanova page gallery) are Matt's own photos, supplied 2026-11-13. The Hack the Valley 11 photos are from October 2026. They were converted to WebP and only ever scaled down. Alt text describes what is visible and names nobody else.
- `PRODUCT.md` and `.impeccable/` hold the Impeccable design context for this project.
