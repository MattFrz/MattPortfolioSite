# Matt Farzaneh

Personal portfolio built with React 19, Vite, Framer Motion, react-icons, and hand-authored component CSS. No additional application dependencies were introduced for the redesign.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Design and content

- `src/index.css` owns the palette, semantic light/dark tokens, typography, spacing, and motion tokens. Component styles use semantic colors only.
- `index.html` selects the theme before paint. `useTheme` follows the OS until the visitor chooses a theme, safely persists that choice, responds to other tabs, and updates browser chrome.
- `Reveal` uses the shared motion tokens for a single 12px/320ms entrance. Reduced-motion visitors receive plain, visible markup. Keyboard focus makes a revealed region immediately visible.
- The mobile navigation uses a modal dialog, explicit Tab wrapping, Escape dismissal, scroll locking, and focus restoration/section transfer.
- The original supplied resume is preserved at `public/resume.pdf` (163,647 bytes; displayed as 160 KB). When replacing it, update the displayed size in Hero and Contact.
- Project repository and demo URLs come from the resume. Results are attributed to their project or employer, and simulations are labeled as backtests.
- Canonical, social metadata, Person JSON-LD, and the sitemap use `https://matt-portfolio-site-tau.vercel.app/`. Update them together if the domain changes.
- `public/og.png` is a 1200 × 630 social preview. The favicon and manifest icons use the MF identity.

## Validation — September 20, 2026

- Production build and ESLint pass.
- Inspected the live Vite site in light and dark themes at mobile, tablet, and desktop sizes. Checked widths 360, 768, 1024, 1440, and 1920px in both themes: no horizontal document overflow and no visible link/button shorter than 44px.
- Traversed all 26 desktop controls by keyboard: visible focus rings, correct sequence, no closed-menu links in the tab order. Skip-to-content focuses `main`.
- Verified mobile forward/reverse focus wrapping, Escape close, focus restoration, scroll lock, and focus transfer to the selected section. Native dialog focus alone allowed a reverse-Tab escape; explicit wrapping fixes it.
- Verified saved theme survives reload and updates `theme-color`. Ten isolated bootstrap scenarios cover both OS defaults, both saved choices, invalid storage values, and denied storage.
- A local reduced-motion fixture verified there are no animated reveal wrappers or hidden content. Global CSS also disables smooth scrolling and transitions under the actual media query.
- Confirmed one h1, logical heading hierarchy, header/main/nav/footer landmarks, real project links, valid JSON-LD/manifest, and a byte-identical resume download.
- All five project repository/demo URLs resolved in public-page or HTTP checks. Demo availability remains dependent on their respective hosts.

Contrast minima across base and raised surfaces (WCAG relative luminance):

- Light: primary text 14.06:1, secondary 5.84:1, accent 6.37:1, control borders 3.42:1, positive 5.91:1, negative 6.22:1.
- Dark: primary text 14.40:1, secondary 7.60:1, accent 7.52:1, control borders 3.98:1, positive 8.52:1, negative 7.81:1.
- Decorative dividers use a quieter token; they do not identify controls. Color signals also have written labels and signs.

The page has no content imagery or image-driven layout shifts. Fonts retain preconnect and `display=swap`. Formal Lighthouse/CLS and screen-reader audits were not run; keyboard and layout checks used Chromium in the local browser. Dependency installation reported nine existing audit advisories; dependency upgrades were outside this visual/content rework.
