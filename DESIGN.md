# Portfolio design

## Direction

Keep the clean monochrome layout and strong typography. The introduction should sound personal and lead quickly to projects. Avoid oversized text blocks and scroll effects that delay reading.

## Visual system

`src/index.css` is the source of truth for tokens and component styles.

- Dark by default with a light theme toggle. Black or white ground, grey surfaces, blue links.
- Inter for text; JetBrains Mono for technical trace data.
- Centred headings and project introductions; left-aligned technical details and long-form writing.
- Layout widths: 1040px for showcases and bands, 980px for headings, 720px for articles.
- Rounded figures and cards, hairline dividers, no decorative shadows.
- Captions use 15px text. Keep qualifications readable beside the claims they constrain.

## Homepage

Short introduction, three project chapters, experience, personal interests with an authentic hackathon photo, then contact. Each project shows its purpose, contribution, two technical highlights, write-up/code/demo links, and a screenshot. Tall screenshots have capped widths and keep their natural aspect ratios.

Metrics belong with their projects or jobs. Detailed benchmark conditions, team ownership, architecture, test coverage, and limitations belong in write-ups. The Urbanova job trace appears in its write-up and is explicitly illustrative, not live telemetry.

## Responsive behavior

Below 760px, navigation wraps into a second row, experience and fact rows stack, and technical figures reflow. Keep resume and contact links accessible. At 1000px, flow diagrams stack vertically. Avoid horizontal overflow, cropped screenshots, tiny captions, and unnecessary empty space.

## Motion and accessibility

Retain modest entrance animations, expandable experience rows, and optional page transitions. No sticky statement reveal, scroll-scaling showcases, or animated metric counters. Respect reduced motion. The illustrative trace pauses offscreen and in hidden tabs and has a pause control.

Use semantic headings, visible keyboard focus, descriptive image alt text, and labelled external links. Personal photos must be authentic; never invent imagery or anecdotes.

## Homepage background

A fixed monochrome starfield stays behind the homepage as visitors scroll, with lower contrast in the centre for text. Stars drift and brighten slowly, pause in hidden tabs, and stay static under reduced motion. A fixed pause control remains available in the bottom corner. Mobile shows fewer stars. This is decorative, without implying a personal astronomy interest.
