// All site copy lives here. Facts come from the SWE resume (Nov 2026), the
// portfolio brief, and each project's own repository. Keep conditions attached
// to every number.

export const profile = {
  name: 'Matt Farzaneh',
  title: 'Software engineer',
  summary: 'I build backend systems and then check that what they produce is right.',
  location: 'Toronto, ON',
  email: 'mattfarzaneh21@gmail.com',
  github: 'https://github.com/MattFrz',
  linkedin: 'https://www.linkedin.com/in/matt-farzaneh-36153727a/',
  resume: '/resume.pdf',
  resumeSize: '200 KB',
  headshot: {
    src: '/images/matt-farzaneh-headshot.webp', width: 240, height: 240,
    alt: 'Matt Farzaneh in a navy suit, light blue shirt and navy tie.',
  },
}

export const projects = [
  {
    slug: 'urbanova',
    name: 'Urbanova',
    context: 'Hack the Valley 11',
    date: 'Oct 2026',
    team: 'Team of four: Emilia Ma, Zain Syed, Una Li, and me',
    role: 'Backend and the AI assumption-testing system',
    summary: 'A transit simulation for Toronto’s 505 Dundas streetcar. It shows how new housing could change crowding, waits, and the number of riders left behind at nine stops, and whether more service would help.',
    built: [
      'Express/TypeScript API with Zod validation, PostgreSQL storage, and Railway deployment',
      'PostgreSQL job queue with expiring worker leases and revision checks',
      'Gemini assumption testing, with outputs, numbers, and citations validated in code',
    ],
    stack: ['TypeScript', 'Express', 'Python', 'PostgreSQL', 'Zod', 'Gemini API', 'Railway'],
    code: 'https://github.com/emtato/Urbanova',
    live: 'https://urbanova.ems.lol/',
    // Event photos. Alt text describes what is visible; nobody else is named.
    photos: {
      caption: 'Hack the Valley 11, October 2026.',
      items: [
        {
          src: '/images/hack-the-valley-11-opening.webp', width: 800, height: 1200,
          alt: 'A lecture hall full of hackers. Two large screens read “You’re in! Welcome to Hack the Valley 11”, and a keyboard, drum kit and microphones are set up on the floor.',
        },
        {
          src: '/images/hack-the-valley-11-at-desk.webp', width: 800, height: 1200,
          alt: 'Matt in profile at a desk, wearing a black Hack the Valley 11 T-shirt and an event lanyard, with other hackers seated beside him.',
        },
        {
          src: '/images/hack-the-valley-11-pair.webp', width: 800, height: 533,
          alt: 'Matt smiling in a black HTV 11 T-shirt and event lanyard, standing next to another hacker in a pink shirt and glasses.',
        },
      ],
    },
    detail: {
      problem: 'A new tower can add hundreds of homes near a streetcar line. People who already ride it want to know if their stop gets worse, with longer waits, fuller cars, or a streetcar that passes them full. Planning documents don’t answer that for their own trip.',
      product: 'Urbanova models the westbound 505 Dundas corridor from Broadview Avenue to Yonge Street, nine stops, around three real development proposals. You can compare housing growth with unchanged service against more frequent streetcars or a priority lane, and see crowding, waits, and riders left behind at each stop. The team also built a 3D neighbourhood view with shadows.',
      teamNote: 'Emilia built the core transit simulation and its 3D replay. Zain built the map frontend, the scenario controls, and the copilot. Una built the building massing, the sunlight data, and the costed catalogue of service improvements.',
      mine: [
        'The Express/TypeScript API connecting scenario inputs, PostgreSQL storage, and the Python simulation workers, with Zod validation on every request.',
        'A database-backed job queue. Each claim holds a renewable lease, including while results are being written. Jobs pin the data and model versions, and a worker refuses a job built for different ones.',
        'Revision checks on every save, so an interrupted job can be picked up again and a stale worker cannot overwrite a newer result.',
        'The assumption-testing loop. Gemini can propose a change to an assumption (transit share, residents per unit, incoming load, extra service) and request a test. The test runs low and high values on matched random seeds and classifies the result.',
        'Validation for everything the model returns: structured output schema, numeric ranges, and citations, with deterministic fallbacks when a check fails.',
        'The reviewed corridor data pipeline: 591 residential records screened for walking access from a 2,444-building inventory, with source provenance and estimated unit counts labelled as estimates.',
        'API, database, simulation-integration, and AI validation tests, plus setup scripts.',
      ],
      architecture: 'The browser talks to the Express API. The API validates the request, writes a job row, and returns. Python workers claim jobs from PostgreSQL with a lease, run the simulation, and write results back only if the job’s revision still matches. Completed results are cached by version, so repeated scenarios return without rerunning.',
      hardProblem: {
        title: 'Separating real effects from simulation noise',
        body: [
          'The simulation is random, so two runs with the same inputs give different numbers. If the AI changes an assumption and the result moves, that alone doesn’t show the assumption caused it.',
          'Each test runs the low and high value on the same random seeds and compares the paired differences. The code computes a 95% interval on them. If the interval sits above the threshold the result is supported, below it is contradicted, and if it straddles the threshold it is inconclusive. With fewer than three valid pairs the result is inconclusive regardless of what the model says.',
        ],
      },
      evidence: [
        'Server test files cover the API, investigations, the pipeline, workers, the AI schema, and the research client.',
        'The live demo runs the corridor with real proposals.',
        'Classification code: backend/server/src/research/analysis.ts.',
      ],
      limits: 'This is an exploratory prototype. Stop-level passenger demand data is incomplete and occupancy is estimated, so results describe what could happen under stated assumptions. It is not a calibrated TTC forecast and doesn’t show that a specific building will cause a specific outcome.',
    },
  },
  {
    slug: 'itch-engine',
    name: 'Nasdaq ITCH Market Data Engine',
    shortName: 'ITCH Engine',
    context: 'Personal project',
    date: 'Aug 2026',
    team: 'Solo',
    role: 'Everything: parser, order books, validation, backtester, CI',
    summary: 'Rebuilds Nasdaq’s full limit order book from raw exchange messages, checks it against Databento’s reference book, and shows how fill assumptions can flip a backtest’s result.',
    built: [
      'C++17 ITCH 5.0 parser and two order books, one readable and one preallocated',
      'Validation against Databento’s reference book, which caught a duplicate-execution bug',
      'CI on Linux and Windows with a hard zero-allocation check',
    ],
    stack: ['C++17', 'Python', 'pybind11', 'CMake', 'GitHub Actions', 'Databento'],
    code: 'https://github.com/MattFrz/ITCH-Engine',
    live: 'https://itch-engine-t4ngmjgaseufnqn5foske3.streamlit.app/',
    detail: {
      problem: 'A trading backtest depends on the order book and the fills under it. If the book is slightly wrong, or the backtest assumes every order fills at the mid price, the results look better than they should and it is easy not to notice.',
      product: 'The engine reads Nasdaq TotalView-ITCH market-by-order data (every add, cancel, modify, and execution for one symbol on one day) and rebuilds the book. It has two paths. The research path has Python driving a C++ book through pybind11 into an event-driven backtester. The low-latency path has no Python at all: UDP multicast, MoldUDP64, the ITCH binary parser, then a preallocated book.',
      mine: [
        'The ITCH 5.0 binary parser and MoldUDP64 decoder, with sequence-gap and duplicate handling.',
        'Two order books with identical semantics: a readable research book, and a low-latency book built on preallocated pools and open-addressed indexing.',
        'Differential tests that fail on any divergence in FIFO order, level state, or anomaly counters between the books.',
        'Validation against an independent Python book and against Databento’s 10-level reference book.',
        'An event-driven backtester with FIFO queue position, partial fills, 2 ms data and 3 ms order latency, and real Nasdaq fees.',
        'Profiling of the Python/C++ boundary: about 85% of per-event cost was the crossing itself, so replay batches it.',
        'GitHub Actions CI on Linux and Windows: C++ and Python tests, differential replay, and a performance check with a zero-allocation invariant.',
      ],
      architecture: 'Historical data is pulled once, normalized, and stored as Parquet. The research path replays it event by event through the C++ book and the backtester, which writes trades and metrics to disk. A separate Streamlit viewer reads only those files and never touches the engine. The low-latency path starts at a socket instead of a file and shares only the event format and the book semantics.',
      hardProblem: {
        title: 'A bug that two matching books both had',
        body: [
          'The C++ book matched an independent Python book with zero drift. Both were written from my reading of the feed, though, so a mistake in that reading would pass both checks.',
          'Comparing against Databento’s aggregated book found one. The feed reports every execution twice, once as a fill and once as a cancel for the same shares. Dropping 199,781 duplicates took unknown-order events from 183,399 to zero. Lining up the two streams took a few tries too. Joining on timestamp matched 99.79%, joining on sequence matched 97.68% or 66.71%, and joining on sequence while respecting each row’s action matched 100%.',
          'The fix changed the backtest too. Earlier results (+$369 / −$2,679) came from a book that double-counted partial fills. The conclusion held, but the size of the gap was wrong.',
        ],
      },
      evidence: [
        'Zero mismatches across 3,774,380 checkpoints and 226,462,800 field comparisons against Databento mbp-10. AAPL, 2026-07-30, 14,270,119 events.',
        '43.0M messages/s, 23.27 ns per message, zero allocations per message. In-memory replay on one pinned core of a Windows 11 desktop, best of five runs. This is host processing with the packet already in memory, not network-to-book latency.',
        'Naive backtest +$378, realistic −$1,598 for the same signal on the same clock. Fees were $44 of the gap; queue position and latency were the rest. Passive fill rate was 37.3% against the naive 100%.',
        'Python/C++ boundary at 0.88 µs per event against a 20 µs target; batched replay at about 7.8M events/s.',
      ],
      stageChart: [
        { stage: 'UDP buffer to MoldUDP64', ns: 2.62 },
        { stage: 'MoldUDP64 to ITCH decode', ns: 4.67 },
        { stage: 'Event to order book', ns: 15.97 },
      ],
      limits: 'One symbol, one day. The trading signal is deliberately simple; it exists to compare fill models, not to make money. There are no exchange-latency or DPDK numbers because no such hardware was available. The deployed viewer runs on a synthetic day, because licensed market data isn’t redistributed.',
    },
  },
  {
    slug: 'ai-quant-council',
    name: 'AI Quant Council',
    context: 'IgnitionHacks V7',
    date: 'Aug 2026',
    team: 'Team of four: Nalin, Zain, Cecile, and me',
    role: 'Data, backtester, risk engine, job runner, and C++',
    summary: 'An investment research app that turns a plain-English thesis into source-linked research, then runs it through a quantitative engine that is allowed to reject it.',
    built: [
      'Event-driven backtester with commissions, volume-based slippage, and position limits',
      'Background job runner with progress streaming and a versioned result cache',
      'Risk engine: beta, drawdown, historical VaR and CVaR',
    ],
    stack: ['Python', 'FastAPI', 'FAISS', 'C++17', 'pybind11', 'Next.js', 'OpenAI API'],
    code: 'https://github.com/MattFrz/AI-Quant-Council-Ignition-Hacks-V7-',
    live: 'https://ai-quant-council.vercel.app/',
    detail: {
      problem: 'Ask a chatbot whether a stock is a good buy and it may give you a Sharpe ratio it made up. We wanted the language model to suggest ideas and leave the numbers to a backtest that can reject them.',
      product: 'You type a thesis in plain English. Seven agents break it into measurable criteria, retrieve SEC filings, extract catalysts with quotes and source links, and argue both sides. The candidate ideas then go through a backtest and risk checks that can reject them.',
      teamNote: 'Zain built retrieval and the agents, including the FAISS index with a hard filed-date filter so a backtest can’t read a filing that didn’t exist yet. Nalin built the factor and alpha models. Cecile built portfolio construction and the product surface.',
      mine: [
        'The market data pipeline and disk cache, universe construction, and the screening funnel.',
        'The event-driven backtester: commissions, participation-rate slippage, position limits, and an average-daily-volume cap. It evaluates seven-stock portfolios from a 499-stock universe.',
        'The risk engine: beta, volatility, drawdown, historical VaR and CVaR, sector exposure, concentration, correlation, and days to liquidate.',
        'Integration: the pipeline service, the job runner, and the result cache.',
        'A C++ price-level order book, ITCH parser, and fill simulator behind pybind11.',
      ],
      architecture: 'A full research run takes 60 to 90 seconds, far too long for one HTTP request. The API queues the run and returns immediately. A worker thread executes the pipeline and pushes progress events onto the job’s queue, which the frontend reads as a stream. Finished runs are written to a disk cache keyed by a cache version, so a warmed thesis replays in under a second.',
      hardProblem: {
        title: 'Keeping cached results in step with the code',
        body: [
          'Caching finished runs made the demo fast, but a cached run stores its own event list. After a backend change, an old entry would replay old output, which looked like a bug that only affected some prompts.',
          'Each cache entry records the cache version it was written with. Entries from an older version are ignored and recomputed instead of replayed.',
        ],
      },
      evidence: [
        '233 tests: 229 passing and 4 skipped, in about 8 minutes with no network required. This is the team’s suite, not only my code.',
        'The live app has eighteen pre-computed theses and needs no setup.',
        'Who built what is documented in docs/team_ownership.md in the repo.',
      ],
      limits: 'Backtest results are historical simulations, not live returns. The event study on extracted catalysts usually finds too few independent events to be statistically significant, and the app reports that instead of a number.',
    },
  },
]

export const experience = [
  {
    id: 'upp',
    org: 'University Pension Plan Ontario',
    role: 'Analyst Intern, Strategic Initiatives (Software Development)',
    dates: 'May 2026 to present',
    location: 'Toronto, ON',
    summary: 'Data pipelines for the Public Markets Quant team, a Dockerized Streamlit app on GCP for manager reviews, and AI agents with input validation and credential protection.',
    points: [
      'Built Python/PostgreSQL ETL pipelines that pull Bloomberg, Albourne, and internal DataHub data, convert to CAD, and refresh Excel reports. This saves the Public Markets Quant team hours of manual work each reporting cycle.',
      'Containerized a Streamlit app with Docker and configured its deployment on GCP. The team uses it for quarterly investment manager reviews.',
      'Built public equity and global macro agents with Python, Google ADK, and Gemini Enterprise to support manager analysis, with prompt-level safeguards against unsupported claims.',
      'Hardened the agents with input metadata validation, file-path restrictions, credential protection, and output-token limits.',
      'Sped up AI report generation by removing duplicate chart-analysis calls and caching repeated file reads, API requests, and rendering.',
    ],
  },
  {
    id: 'after-image',
    org: 'After Image Inc',
    role: 'Co-Founder / Developer',
    dates: 'Jun 2025 to May 2026',
    location: 'Toronto, ON',
    summary: 'The Node.js backend on AWS for a B2B SaaS product I co-founded with a teammate, including role-based access, reporting APIs and Stripe billing.',
    points: [
      'Co-founded a B2B SaaS venture with a teammate and launched its Node.js backend on AWS, with role-based access control separating tenant and administrator permissions.',
      'Designed the MySQL schema and REST APIs for tenant-scoped reporting, adding indexes and tuning queries as data grew.',
      'Integrated Stripe for tenant billing and invoicing in a multi-tenant analytics dashboard.',
    ],
  },
  {
    id: 'kd',
    org: 'K&D Consulting',
    role: 'Data Engineer & Business Analyst',
    dates: 'May 2024 to Sep 2025',
    location: 'Toronto, ON',
    summary: 'A Python automation framework driven by YAML configs that cut manual Excel processing by 95%.',
    points: [
      'Built a Python automation framework driven by YAML pipeline configs. It cut manual Excel processing by 95% and developer intervention by 90%+.',
      'Ran 500+ monthly financial workbook integrations through it, saving 40+ hours of reporting work a week while keeping the data intact.',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: 'Python, TypeScript/JavaScript, C++, Java, C, SQL' },
  { group: 'Frameworks', items: 'Node.js, Express, React, FastAPI, Flask, Streamlit, Google ADK, pybind11, Zod, FAISS, Pandas, NumPy' },
  { group: 'Infrastructure', items: 'AWS, GCP, Docker, Linux, Git, GitHub Actions, CMake, PostgreSQL, MySQL, MongoDB' },
]

export const quantFlow = [
  { title: 'Thesis', detail: 'Plain English', out: 'POST' },
  { title: 'FastAPI', detail: 'Queues the run, returns at once', out: 'job' },
  { title: 'Job runner', detail: 'Worker thread runs the pipeline', out: 'events' },
  { title: 'Progress stream', detail: 'Frontend reads events as they land' },
]

// Live trace replays for the hero. Synthetic: the timings and job numbers are
// illustrative, the sequence follows Urbanova's real job protocol.
// Services: api, pg (PostgreSQL), worker, check (validation).
export const traceServices = {
  api: 'api',
  pg: 'postgres',
  worker: 'worker',
  check: 'validate',
}

export const liveTraces = [
  {
    id: '7f3a91',
    title: 'POST /scenarios',
    note: 'Scenario run, happy path',
    outcome: { label: '200 · result saved', tone: 'ok' },
    spans: [
      { svc: 'api', name: 'POST /scenarios', start: 0, end: 120, depth: 0, events: [{ t: 118, label: '202 accepted' }] },
      { svc: 'check', name: 'zod.parse(ScenarioInput)', start: 6, end: 22, depth: 1 },
      { svc: 'pg', name: 'SELECT result cache (v miss)', start: 24, end: 38, depth: 1 },
      { svc: 'pg', name: 'INSERT job 41 · rev 1', start: 40, end: 62, depth: 1 },
      { svc: 'worker', name: 'claim job 41 · take lease', start: 140, end: 162, depth: 1 },
      { svc: 'worker', name: 'simulate.py · 20 matched seeds', start: 162, end: 800, depth: 2, events: [{ t: 380, label: 'lease renewed' }, { t: 600, label: 'lease renewed' }] },
      { svc: 'pg', name: 'UPDATE job 41 WHERE rev = 1', start: 806, end: 836, depth: 2, events: [{ t: 836, label: 'rev 2', tone: 'ok' }] },
      { svc: 'pg', name: 'INSERT result cache (data + model v)', start: 840, end: 862, depth: 2 },
    ],
  },
  {
    id: 'c41e07',
    title: 'POST /scenarios',
    note: 'A worker stalls mid-run',
    outcome: { label: '1 stale write rejected', tone: 'bad' },
    spans: [
      { svc: 'api', name: 'POST /scenarios', start: 0, end: 110, depth: 0, events: [{ t: 108, label: '202 accepted' }] },
      { svc: 'check', name: 'zod.parse(ScenarioInput)', start: 5, end: 19, depth: 1 },
      { svc: 'pg', name: 'INSERT job 42 · rev 1', start: 24, end: 46, depth: 1 },
      { svc: 'worker', name: 'worker A · claim job 42', start: 128, end: 146, depth: 1 },
      { svc: 'worker', name: 'worker A · simulate.py', start: 146, end: 470, depth: 2, status: 'stalled', events: [{ t: 470, label: 'worker A stalls', tone: 'warn' }] },
      { svc: 'pg', name: 'lease expired · requeue job 42', start: 600, end: 616, depth: 1, events: [{ t: 600, label: 'lease expired', tone: 'warn' }] },
      { svc: 'worker', name: 'worker B · claim job 42', start: 620, end: 638, depth: 1 },
      { svc: 'worker', name: 'worker B · simulate.py', start: 638, end: 892, depth: 2 },
      { svc: 'pg', name: 'UPDATE job 42 WHERE rev = 1 (B)', start: 896, end: 920, depth: 2, events: [{ t: 920, label: 'rev 2', tone: 'ok' }] },
      { svc: 'pg', name: 'UPDATE job 42 WHERE rev = 1 (A)', start: 940, end: 962, depth: 2, status: 'error', events: [{ t: 962, label: '409 stale revision', tone: 'bad' }] },
    ],
  },
  {
    id: '2b8d5c',
    title: 'POST /investigations',
    note: 'AI proposes a test; code checks it',
    outcome: { label: 'verdict: inconclusive', tone: 'neutral' },
    spans: [
      { svc: 'api', name: 'POST /investigations', start: 0, end: 90, depth: 0, events: [{ t: 88, label: '202 accepted' }] },
      { svc: 'worker', name: 'gemini · propose experiment', start: 100, end: 380, depth: 1 },
      { svc: 'check', name: 'schema + numeric bounds', start: 384, end: 404, depth: 1, events: [{ t: 404, label: 'pass', tone: 'ok' }] },
      { svc: 'check', name: 'citations resolve', start: 406, end: 424, depth: 1, events: [{ t: 424, label: 'pass', tone: 'ok' }] },
      { svc: 'worker', name: 'simulate low / high · matched seeds', start: 430, end: 872, depth: 1 },
      { svc: 'worker', name: 'paired deltas · 95% interval', start: 876, end: 908, depth: 2, events: [{ t: 908, label: 'interval spans 0' }] },
      { svc: 'pg', name: 'save investigation · rev 4', start: 912, end: 936, depth: 1 },
    ],
  },
]

// Apple-style home page copy.
export const home = {
  intro: 'Software engineer in Toronto. I study computer science at Western.',
  statement: 'I like work where you can check the answer. My order book matched Databento’s at all 3.77 million checkpoints in a day of AAPL trading.¹ My Urbanova job queue recovers when a worker stalls mid-run, and code checks Gemini’s numbers and citations before anything is saved.',
  chapters: {
    urbanova: {
      headline: 'Urbanova',
      lede: 'A simulation of nine stops on Toronto’s 505 Dundas streetcar, showing how new housing could change crowding and waits.',
      credit: 'Hack the Valley 11, October 2026. Team of four. I built the backend and the AI testing loop.',
      shot: {
        src: '/images/urbanova-demo.webp', width: 1920, height: 1200,
        alt: 'Urbanova live demo: a map of downtown Toronto with the 505 Dundas streetcar line in red from Yonge Street to Broadview Avenue, stop markers along it, and a replay bar at 07:12 playing a saved run.',
        caption: 'The live demo replaying a saved run with one new development on the corridor. The map and replay are my teammates’ work. The runs it loads come through the API and job queue I built.',
      },
    },
    'itch-engine': {
      headline: 'ITCH Engine',
      lede: 'A C++ parser and order book for Nasdaq’s ITCH feed, tested against Databento’s book on a full day of AAPL messages.',
      credit: 'Personal project, August 2026. I built all of it.',
      shot: {
        src: '/images/itch-engine-demo.webp', width: 2000, height: 1823, maxWidth: 860,
        alt: 'ITCH Engine viewer: a naive backtest of +$79 against a realistic engine result of −$89, summary tiles for fill rate, queue and fees, and an equity chart where the naive line ends above zero and the realistic line ends below it.',
        caption: 'The deployed viewer, which only reads the engine’s output files. It runs on a synthetic day because licensed market data isn’t redistributed, so its numbers are not the AAPL results in the footnotes.',
      },
    },
    'ai-quant-council': {
      headline: 'AI Quant Council',
      lede: 'A hackathon research app. Language models read SEC filings and pitch stock ideas, then my backtester and risk engine test them.',
      credit: 'IgnitionHacks V7, August 2026. Team of four. I built the data pipeline, backtester, risk engine and job runner.',
      shot: {
        src: '/images/ai-quant-council-demo.webp', width: 1536, height: 1868, maxWidth: 640,
        alt: 'AI Quant Council quantitative validation panel: a strategy equity curve against the SPY benchmark from August 2021 to August 2026, a drawdown chart, and backtest statistics including costs charged and the test window.',
        caption: 'The live app’s example thesis after a run. These results come from my backtester. As the panel says, it is one in-sample window, not a walk-forward test.',
      },
    },
  },
  numbers: [
    { value: 0, decimals: 0, suffix: '', label: 'heap allocations per message in the replay benchmark', note: 3 },
    { value: 229, decimals: 0, suffix: '', label: 'passing tests in the AI Quant Council suite', note: 4 },
    { value: 95, decimals: 0, suffix: '%', label: 'less manual Excel work at K&D Consulting', note: 5 },
    { value: 40, decimals: 0, suffix: '+', label: 'hours of reporting saved each week at K&D', note: 6 },
  ],
  footnotes: [
    'ITCH Engine. Compared against Databento’s 10-level mbp-10 book at every one of 3,774,380 points where the book changed, 226,462,800 field comparisons in total. AAPL, one trading session (14,270,119 events).',
    'ITCH Engine. 43.0 million messages per second, or 23.27 ns per message, on in-memory replay with one pinned core on a Windows 11 desktop, best of five runs. This is host processing with the packet already in memory, not network latency.',
    'ITCH Engine. Measured by replacing the global operator new in the benchmark, so any allocation would be counted.',
    'AI Quant Council. 233 tests in the team’s suite: 229 pass and 4 are skipped. Runs in about 8 minutes with no network access.',
    'K&D Consulting. Reduction in manual Excel processing from a Python automation framework driven by YAML configs, as reported on my resume.',
    'K&D Consulting. Across more than 500 financial workbook integrations a month, as reported on my resume.',
  ],
  about: [
    'I lift, mostly strength training, and I’ve shared some of it online. I’d rather fix my technique than add reps. Before lifting I swam competitively at the Eastern Canadian level.',
    'I also do hackathons with friends. Urbanova and AI Quant Council each came out of one.',
  ],
}
