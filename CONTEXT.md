# ResumeForge AI — Complete Project Context
> **Last Updated:** 2026-06-30  
> **Purpose:** Comprehensive reference document for any AI model to understand, modify, or extend this project.

---

## 1. PROJECT OVERVIEW

**ResumeForge AI** is a client-side web application that generates **1-page ATS-optimized LaTeX resumes** tailored to any Job Description (JD). The app is built specifically for **Manas Mishra** — an AI/ML engineering student — and uses the **Google Gemini API** to intelligently select, reorder, and rewrite resume content to match each JD.

### Core Workflow
```
User pastes JD → App sends PROFILE + JD to Gemini API → AI returns JSON →
App displays: ATS Score + LaTeX Resume + Project Suggestion
```

### Key Features
- **JD-to-Resume Pipeline**: Paste a job description, get a tailored LaTeX resume
- **ATS Score**: 0-100 match score with feedback
- **LaTeX Output**: Complete compilable .tex file (Jake Ryan template format)
- **Project Suggestion**: AI suggests a new project to strengthen the application
- **Model Fallback**: Tries 3 Gemini models automatically if quota is exceeded
- **Copy/Download**: Extract LaTeX to clipboard or download as .tex file
- **API Key Management**: Stored in localStorage, never sent to any server except Google's API

### Design Theme
**Cyberpunk / Sci-Fi Gaming HUD** — neon glows, angular clipped corners, scanline overlay, hex shapes, monospace fonts, dark void background. Game-themed language throughout (Mission, Execute, Quest, Power Level, Player Card, etc.)

---

## 2. FILE STRUCTURE

```
resume genrator/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md       # Bug template
│   │   └── feature_request.md  # Feature request template
│   └── PULL_REQUEST_TEMPLATE.md # PR template description
├── README.md                   # High-fidelity project README
├── LICENSE                     # MIT License
├── CONTRIBUTING.md             # Developer guidelines
├── CODE_OF_CONDUCT.md           # Community behavior guidelines
├── CHANGELOG.md                 # Project version changelog
├── SECURITY.md                  # Security policies and key safety rules
├── CONTEXT.md                   # Project design and developer context (this file)
├── index.html                  # Main HTML — 282 lines, single-page app structure
├── index.css                   # Complete CSS — 1340 lines, gaming HUD design system
├── app.js                      # Core logic — 628 lines, profile data + Gemini API + UI controller
├── read_excel.ps1              # Utility — PowerShell script to read Manas_gpt_Dataset.xlsx
├── Manas_gpt_Dataset.xlsx      # Source data — Profile info in Excel (Category | Field | Value)
├── Manas Mishra.pdf            # Full resume PDF
├── Manas Mishra Resume_compressed.pdf  # Compressed resume PDF
├── CertificateOfCompletion_Deep Learning with Python...pdf
├── CertificateOfCompletion_Figma for UX Design.pdf
├── introduction to tranformer _ NVIDIA.pdf
└── coderely certificate.png
```

### No Build Tools / No Dependencies
This is a **zero-dependency vanilla project** — plain HTML, CSS, and JavaScript. No npm, no bundler, no framework. Just open `index.html` in a browser.

---

## 3. FILE-BY-FILE BREAKDOWN

---

### 3.1 `index.html` (282 lines)

**Purpose:** Single-page app structure with all UI components.

#### HTML Structure (top to bottom):
| Section | Element IDs | Description |
|---------|------------|-------------|
| Scanline Overlay | `.scanlines` | Full-screen CRT effect overlay |
| HUD Top Bar | `.hud-top-bar` | Logo + system status (SYS: ONLINE, AI: GEMINI, MODE: ATS) |
| Player Card | `.player-card` | Manas's avatar (hex), name, class, XP bar, level (LV 6) |
| Mission Input Panel | `#jd-input`, `#btn-generate`, `#char-count` | Textarea for JD + Execute button |
| Output Panel | `#output-panel` | Container for all output cards |
| ├ Empty State | `#empty-state` | Shown before first generation |
| ├ ATS Score Card | `#ats-card`, `#ats-ring-progress`, `#ats-value` | SVG ring + score percentage |
| ├ JD Intelligence | `#jd-analysis-card`, `#jd-target-role`, `#jd-required-tech`, `#jd-preferred-tech`, `#jd-responsibilities`, `#jd-missing-skills`, `#missing-skills-section` | UI for extracted keywords, role, and skills gap analysis |
| ├ Projects Optimization | `#project-selection-card`, `#project-scores-bars`, `#selected-projects-list`, `#replaced-project-details` | Matching scores visualization bar-chart, selected details, and replaced project metadata |
| ├ LaTeX Card | `#latex-card`, `#latex-output`, `#btn-copy`, `#btn-download` | Code output + action buttons |
| └ Project Card | `#project-card`, `#project-title`, `#project-desc`, `#project-tech`, `#project-why` | Suggested project display |
| API Key Modal | `#modal-overlay`, `#modal-api-key`, `#modal-save`, `#modal-error` | First-run key entry |
| Settings Button | `#btn-settings` | Fixed hex button (bottom-right), opens modal |
| Toast | `#toast` | Notification popup |

#### Important DOM Details:
- ATS ring uses SVG `<circle>` with `stroke-dasharray: 157` and `stroke-dashoffset` for animation
- All panels use `clip-path` for angular/hex corner cuts
- Output cards start with `opacity: 0` and get `.visible` class added via JS
- Modal shows on first visit if no API key exists

---

### 3.2 `app.js` (566 lines)

**Purpose:** All application logic — profile data, API calls, prompt engineering, UI control.

#### Code Organization:

##### A. PROFILE Object (Lines 7–149)
The complete hardcoded profile for Manas Mishra. This is the **single source of truth** for all resume content.

```javascript
PROFILE = {
  name, email, phone, linkedin, github, location,
  targetRoles: [...],           // 4 target job titles
  education: {
    degree, institution, location, period,
    coursework: [...]           // 15 courses
  },
  experience: [{                // 1 internship
    title, company, period, bullets: [3]
  }],
  projects: [{                  // 6 projects
    name, subtitle, link, period, tech: [...], bullets: [3]
  }, ...],
  skills: {                     // 6 categories
    "Languages": [7],
    "AI/ML": [9],
    "LLM & NLP": [5],
    "Web Development": [8],
    "Databases": [3],
    "Tools & Infrastructure": [7]
  },
  certifications: [{            // 8 certs
    name, issuer, date
  }, ...],
  preferredDomains: [...]       // 5 domains
}
```

**IMPORTANT:** Strings in the PROFILE use LaTeX escaping (`\\&` for ampersand, `---` for em-dash, `\\_` for underscore) because they're injected directly into the LaTeX prompt.

##### B. API Key Management (Lines 151–164)
- Stored in `localStorage` under key `gemini_api_key_resume_gen`
- Functions: `getApiKey()`, `setApiKey(key)`, `hasApiKey()` (checks length > 10)

##### C. Gemini API Call with Fallback + Retry
- **7-model fallback chain:** `gemini-2.0-flash-lite` → `gemini-2.5-flash-preview-05-20` → `gemini-1.5-flash-8b` → `gemini-1.5-flash` → `gemini-2.0-flash` → `gemini-2.5-flash` → `gemini-1.5-pro`
- Each model retried up to 2 times with exponential backoff (2s, 4s) on quota/rate errors
- Uses REST API: `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent`
- Generation config: `temperature: 0.7`, `topP: 0.9`, `maxOutputTokens: 8192`
- Live status updates via `onStatusUpdate` callback (shows model name + retry status on button)
- Skips models that return 400 "not found" (model doesn't exist for API key)
- Throws on 400/403 invalid key — user must fix

##### D. System Prompt Builder
`buildResumePrompt(jd)` constructs the full system prompt using a strict 10-stage recruiter decision pipeline:
1. Injects target JD & PROFILE as JSON.
2. Directs the model to score all 6 projects: Tech (40), Keywords (25), Domain (20), Impact (15).
3. Orders selecting the best 2 existing projects.
4. Commands generating 1 production-quality project to fill the largest JD technology gap.
5. Instructs replacing the weakest project with the generated one.
6. Dictates reordering skills categories and highlights without inventing.
7. Filters and ranks certifications (max 3) by JD relevance.
8. Mandates experience rewriting using: `Action Verb -> Tech -> Business Impact -> Metric`.
9. Forces contact header clickable hyperlink rendering using `fontawesome5` and `hyperref` macros.
10. Validates ATS-conformity, grammar, structure, and 1-page constraints.

**Demands strict JSON output format:**
```json
{
  "ats_score": 95,
  "ats_feedback": "...",
  "jd_analysis": {
    "target_role": "...",
    "required_technologies": [...],
    "preferred_technologies": [...],
    "key_responsibilities": [...],
    "missing_skills": [...]
  },
  "selected_projects": [
    {"name": "...", "score": 95, "reason": "...", "generated": false},
    {"name": "...", "score": 90, "reason": "...", "generated": false},
    {
      "name": "...",
      "score": 100,
      "reason": "...",
      "generated": true,
      "fills_gap": "...",
      "description": "...",
      "tech_stack": [...],
      "why": "..."
    }
  ],
  "replaced_project": {
    "name": "...",
    "score": 45,
    "reason": "..."
  },
  "project_scores": {
    "EvalForge": 90,
    "TourismCo. AI": 85,
    ...
  },
  "skills_emphasized": [...],
  "certifications_used": [...],
  "latex": "..."
}
```

##### E. Response Parser & Sanitizer
`parseGeminiResponse(rawText)`:
- Strips markdown code fences (```json ... ```) and conversational outer text via brace boundary matching.
- Uses `cleanJSONBackslashes(str)` to scan inside JSON strings and automatically double-escape single backslashes (e.g. `\section` to `\\section`) that are not followed by valid JSON escape characters, preventing JSON parsing syntax errors from raw LaTeX backslashes.
- Reports detailed parsing and raw text dump messages to the developer console on failure before throwing user-friendly messages.

##### F. Offline Fallback Generator
`generateOfflineResume(jd)` — **GUARANTEES output even when all API calls fail:**
- Extracts keywords from JD and scores projects/skills/certifications by relevance
- Picks top 3 projects, top 3 certs, reorders skill categories by JD match
- Generates complete compilable Jake Ryan LaTeX template with all sections
- Calculates ATS score from skill overlap ratio
- Suggests a new project based on JD gap analysis (cloud/MLOps, agents/LangChain, CV/RL, data engineering, or general multi-modal)
- Returns result with `_offline: true` flag so UI can indicate local generation

##### G. Main Generate Function
`generateResume(jd)`:
- Validates JD length (≥ 50 chars)
- Checks API key exists
- Tries Gemini API first (7 models with retry)
- **If ALL fail**: automatically falls back to `generateOfflineResume(jd)` — never throws to the user
- Only throws for invalid API key (user needs to fix it)

##### H. UI Controller
All DOM event handlers, registered inside `DOMContentLoaded`:

| Feature | Handler | Notes |
|---------|---------|-------|
| Character counter | `jd-input` → `input` | Updates `#char-count` |
| Modal show/hide | `showModal()` / `hideModal()` | Toggles `.active` class |
| Settings button | `#btn-settings` → `click` | Opens modal |
| Modal backdrop click | `#modal-overlay` → `click` | Closes if API key exists |
| Save API key | `#modal-save` → `click` | Validates length ≥ 10, saves to localStorage |
| Status updates | `onStatusUpdate` callback | Shows model name/retry on button during loading |
| Generate resume | `#btn-generate` → `click` | Full pipeline: loading → API call → offline fallback → render |
| Copy LaTeX | `#btn-copy` → `click` | Clipboard API with fallback `execCommand` |
| Download .tex | `#btn-download` → `click` | Creates Blob, triggers download as `Manas_Mishra_Resume.tex` |
| Toast notifications | `showToast(icon, msg)` | Shows '📡 Generated locally' for offline, '🎉' for AI |
| Keyboard shortcut | `Ctrl+Enter` on textarea | Triggers generate button click |

**ATS Score Rendering:**
```javascript
const circumference = 157;  // SVG circle circumference (2πr where r=25)
const offset = circumference - (circumference * score / 100);
atsRingProgress.style.strokeDashoffset = offset;
```

---

### 3.3 `index.css` (1065 lines)

**Purpose:** Complete design system — cyberpunk gaming HUD theme.

#### Design Tokens (CSS Custom Properties):
```css
/* Colors */
--bg-void: #020408;              /* Background */
--neon-cyan: #00f0ff;            /* Primary accent */
--neon-magenta: #ff00aa;         /* Secondary accent */
--neon-yellow: #ffe600;          /* Highlight */
--neon-green: #00ff6a;           /* Success */
--neon-red: #ff2244;             /* Error */
--neon-purple: #b44aff;          /* Tertiary */

/* Fonts */
--font-hud: 'Orbitron', monospace;     /* Headings, labels */
--font-body: 'Rajdhani', sans-serif;   /* Body text */
--font-mono: 'JetBrains Mono', monospace;  /* Code, data */

/* Clip Paths (angular corners) */
--clip-corner: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
--clip-corner-sm: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
```

#### CSS Architecture (by section):
| Section | Lines | Key Classes |
|---------|-------|-------------|
| Reset & Base | 50–67 | `*`, `html`, `body` |
| Animated Background | 69–99 | `body::before`, `body::after`, `@keyframes grid-drift` |
| Scanlines | 101–114 | `.scanlines` |
| Layout | 116–124 | `.app-container` |
| HUD Top Bar | 126–239 | `.hud-top-bar`, `.hud-logo`, `.logo-hex`, `.hud-status` |
| Player Card | 241–323 | `.player-card`, `.player-avatar`, `.player-xp-bar` |
| Main Grid | 325–334 | `.main-grid` (2-column on desktop, 1-column on mobile at 960px) |
| HUD Panels | 336–421 | `.hud-panel`, `.panel-corner-br`, `.panel-header` |
| Textarea | 423–464 | `.jd-textarea`, `.char-count` |
| Generate Button | 466–554 | `.btn-generate`, loading animation, glitch text effect |
| Output Cards | 556–572 | `.output-card`, `.visible` transition |
| ATS Score | 574–658 | `.ats-score-bar`, `.ats-ring`, SVG styles |
| LaTeX Output | 660–715 | `.latex-output`, `.btn-action` |
| Project Card | 717–793 | `.project-card`, `.tech-tag`, `.project-why` |
| Empty State | 795–820 | `.empty-state` |
| Modal | 822–963 | `.modal-overlay`, `.modal`, `.modal-input` |
| Settings Button | 965–995 | `.btn-settings` (hexagonal clip-path) |
| Toast | 997–1023 | `.toast`, `.visible` |
| Scrollbar | 1025–1029 | Custom webkit scrollbar |
| Responsive | 1037–1050 | `@media (max-width: 768px)` and `480px` |
| Animations | 1052–1065 | `@keyframes fade-in-up`, `.animate-in` |

#### Key Animations:
| Name | Effect |
|------|--------|
| `grid-drift` | Background grid slowly moves diagonally |
| `hex-pulse` | Logo hex breathes with glow |
| `blink` | Status dot blinks |
| `xp-shimmer` | XP bar pulses |
| `glitch-text` | Loading text glitches with magenta/cyan offset |
| `border-cycle` | Loading button border cycles through neon colors |
| `gradient-slide` | ATS/project card top border shimmers |
| `fade-in-up` | Initial page load animation |
| `hex-spin` | Settings button rotates 60° on hover |

---

### 3.4 `read_excel.ps1` (22 lines)

**Purpose:** PowerShell script to read `Manas_gpt_Dataset.xlsx` using COM (Excel).

This was a utility used during development to extract profile data from the Excel sheet and integrate it into `app.js`. The Excel data has been fully integrated into the PROFILE object.

---

### 3.5 `Manas_gpt_Dataset.xlsx`

**Structure:** 3 columns (Category | Field | Value), 26 rows.

| Category | Fields |
|----------|--------|
| Personal | Name, Degree, Branch, University, Expected Graduation, Location |
| Career | Target Roles |
| Skills | Languages, Frameworks, ML Libraries, Databases, Tools |
| Projects | EvalForge, AI Test Case Generator, TourismCo, Demand Forecasting, WanderChat |
| Coursework | 20+ relevant courses |
| Experience | CodSoft ML Internship |
| Certifications | NVIDIA Deep Learning, NLP, DevOps |
| Preferences | Resume Style, Bullet Style, Preferred Domains |

---

## 4. MANAS MISHRA — COMPLETE PROFILE

### Personal Info
- **Name:** Manas Mishra
- **Email:** manasmishra131005@gmail.com
- **LinkedIn:** linkedin.com/in/manas-mishra-a05679294
- **GitHub:** github.com/Ma-nas
- **Location:** Bengaluru, India

### Education
- **Degree:** B.Tech in Computer Science Engineering (AI & ML)
- **University:** Jain University, Faculty of Engineering & Technology
- **Period:** 2023 – 2027 (Expected)
- **Coursework:** Machine Learning, Deep Learning, NLP, DSA, Computer Vision, Linear Algebra, Probability & Statistics, OOP, DBMS, OS, Time Series Forecasting, Numerical Optimization, DevOps, UI/UX Design, Research Methodology

### Experience
| Role | Company | Period |
|------|---------|--------|
| Machine Learning Intern | CodSoft | June 2025 – July 2025 |

### Projects (6 total)
| # | Project | Tech Stack | Link |
|---|---------|-----------|------|
| 1 | **EvalForge** — LLM Evaluation & Hallucination Detection | Python, FastAPI, React, SQLite, Sentence Transformers | github.com/Ma-nas/EvalForge |
| 2 | **TourismCo. AI** — AI Travel Planning Platform | React, TypeScript, Node.js, Socket.IO, Gemini API, RAG | tourism-co.vercel.app |
| 3 | **Adaptive Proximal Gradient Research** — Optimization Algorithm | Python, NumPy, scikit-learn, Flask, Matplotlib | github.com/Ma-nas/Mini_project |
| 4 | **AI Test Case Generator** — Automated pytest Suite Generator | Python, Gemini API, pytest, AST | github.com/Ma-nas/Ai-test-case-generator |
| 5 | **Demand Forecasting System** — Time-Series Inventory Optimization | Python, scikit-learn, Pandas, Matplotlib, Time Series | github.com/Ma-nas |
| 6 | **WanderChat** — AI Travel Companion Chatbot | Python, Streamlit, Gemini API, NLP | github.com/Ma-nas |

### Skills
| Category | Technologies |
|----------|-------------|
| Languages | Python, Java, JavaScript, TypeScript, SQL, HTML/CSS, LaTeX |
| AI/ML | PyTorch, TensorFlow, scikit-learn, NumPy, Pandas, OpenCV, Matplotlib, Sentence Transformers, Hugging Face |
| LLM & NLP | Google Gemini API, OpenAI API, RAG Pipelines, Prompt Engineering, Hallucination Detection |
| Web Development | React, Node.js, FastAPI, Flask, Streamlit, Socket.IO, Tailwind CSS, Vite |
| Databases | MySQL, MongoDB, SQLite |
| Tools & Infra | Git, Docker, Jupyter, Anaconda, Vercel, Figma, Linux |

### Certifications (8 total)
1. Introduction to Transformer-Based NLP — NVIDIA (June 2025)
2. NVIDIA Deep Learning — NVIDIA (2025)
3. Natural Language Processing Specialization — Coursera/NVIDIA (2025)
4. Deep Learning with Python: Optimizing Deep Learning Models — LinkedIn Learning (April 2026)
5. Introduction to DevOps — Online (2025)
6. Figma for UX Design — LinkedIn Learning (April 2026)
7. Fundamentals of Git & GitHub — Microsoft Learn Student Ambassador
8. Code Relay 2025 — Participation — Jain University FET (March 2025)

### Target Roles
AI Engineer, ML Engineer, Data Scientist, Full Stack AI Developer

### Preferred Domains
AI, NLP, Computer Vision, Data Science, Full Stack AI

---

## 5. TECHNICAL ARCHITECTURE

### Data Flow
```
┌─────────────────────────────────────────────────────────────┐
│                        Browser (Client)                      │
│                                                              │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────────┐  │
│  │  User     │───▶│ buildResume  │───▶│  callGemini()     │  │
│  │  pastes   │    │ Prompt(jd)   │    │  (REST API call)  │  │
│  │  JD text  │    │              │    │                   │  │
│  └──────────┘    │  Injects:    │    │  Model fallback:  │  │
│                  │  • PROFILE   │    │  1. flash-lite    │  │
│                  │  • JD text   │    │  2. 1.5-flash     │  │
│                  │  • 12 rules  │    │  3. 2.0-flash     │  │
│                  └──────────────┘    └────────┬──────────┘  │
│                                               │              │
│  ┌──────────────────────────────────────────────┐           │
│  │              parseGeminiResponse()            │           │
│  │  Strips code fences → JSON.parse → validate   │           │
│  └──────────────────┬───────────────────────────┘           │
│                     │                                        │
│  ┌─────────────┐  ┌─┴──────────┐  ┌──────────────────┐     │
│  │  ATS Score  │  │ LaTeX Code │  │ Project Suggest.  │     │
│  │  Ring + %   │  │ Copy/DL    │  │ Title/Desc/Tech   │     │
│  └─────────────┘  └────────────┘  └──────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                         │
                    ┌────┴────┐
                    │ Gemini  │
                    │ REST    │
                    │ API     │
                    └─────────┘
```

### State Management
- **No framework state** — all state is in DOM + 1 variable (`currentLatex`)
- **API key** — `localStorage` (key: `gemini_api_key_resume_gen`)
- **Loading state** — `.loading` class on button, `.visible` class on output cards
- **Modal state** — `.active` class on `#modal-overlay`
- **Toast** — `.visible` class with 3-second auto-hide timeout

### API Configuration
| Parameter | Value |
|-----------|-------|
| Endpoint | `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent` |
| Auth | API key as query param `?key=...` |
| Temperature | 0.7 |
| Top P | 0.9 |
| Max Output Tokens | 8192 |
| Response Path | `data.candidates[0].content.parts[0].text` |

---

## 6. DESIGN SYSTEM REFERENCE

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#020408` | Page background |
| `--bg-panel` | `rgba(5,15,30,0.85)` | Card/panel backgrounds |
| `--neon-cyan` | `#00f0ff` | Primary accent, borders, headings |
| `--neon-magenta` | `#ff00aa` | Secondary accent, corner decorations |
| `--neon-yellow` | `#ffe600` | Highlights (player level, project titles) |
| `--neon-green` | `#00ff6a` | Success states, ATS score, status dot |
| `--neon-red` | `#ff2244` | Errors |
| `--neon-purple` | `#b44aff` | Tertiary accent |

### Typography
| Token | Font | Usage |
|-------|------|-------|
| `--font-hud` | Orbitron | Titles, labels, buttons, HUD elements |
| `--font-body` | Rajdhani | Body text, descriptions |
| `--font-mono` | JetBrains Mono | Code, data, char count |

### Google Fonts Import
```
Orbitron:wght@400;500;600;700;800;900
Rajdhani:wght@300;400;500;600;700
JetBrains+Mono:wght@400;500;600
```

### Visual Effects
1. **Scanlines** — Repeating horizontal gradient overlay (z-index: 9999)
2. **Grid overlay** — 40px × 40px subtle cyan grid that slowly drifts diagonally
3. **Radial glows** — Background nebula-like cyan/magenta gradients
4. **Clip paths** — All panels have angular cut corners (polygon clip-path)
5. **Neon glow shadows** — `box-shadow` with multiple layers of colored light
6. **Corner decorations** — `::after` (top-left cyan) and `.panel-corner-br` (bottom-right magenta)

### Responsive Breakpoints
| Breakpoint | Changes |
|-----------|---------|
| ≤ 960px | Grid → single column |
| ≤ 768px | Top bar stacks, status hidden, smaller textarea/code area |
| ≤ 480px | Action buttons stack, smaller logo |

---

## 7. HOW TO MODIFY

### To Update Profile Data
Edit the `PROFILE` object in `app.js` (lines 7–149). All fields use LaTeX-escaped strings where needed (`\\&` for `&`, `\\_` for `_`, `---` for em-dash).

### To Add a New Project
Add to the `projects` array in PROFILE:
```javascript
{
  name: "Project Name",
  subtitle: "Short Description",
  link: "github.com/...",
  period: "2025",
  tech: ["Tech1", "Tech2"],
  bullets: [
    "Bullet point 1 with action verb and metrics.",
    "Bullet point 2.",
    "Bullet point 3."
  ]
}
```
Then update:
1. Player level in `index.html` (line 57) — increment the number
2. Prompt instruction in `app.js` — update "not all X" count
3. XP bar width in `index.css` (line 298) — adjust percentage

### To Change AI Model
Edit the `GEMINI_MODELS` array in `app.js` (line 167). Models are tried in order.

### To Change Prompt
Edit `buildResumePrompt()` in `app.js` (lines 237–301). The prompt has clear sections:
- Resume instructions (12 rules)
- Project suggestion instructions
- Output format (strict JSON schema)

### To Change Design Theme
All design tokens are in `:root` in `index.css` (lines 9–48). Change colors, fonts, or clip-paths there.

### To Switch to a Different LLM API
Replace the `callGemini()` function (lines 173–235). The function must:
1. Accept a `prompt` string
2. Return a raw text string
3. Handle errors with appropriate messages

The rest of the pipeline (`buildResumePrompt`, `parseGeminiResponse`, UI rendering) works independently of the specific LLM API.

---

## 8. KNOWN LIMITATIONS & FUTURE IMPROVEMENTS

### Current Limitations
- **Single user only** — PROFILE is hardcoded for Manas Mishra
- **No backend** — Everything runs in the browser; no server needed but also no persistence
- **Offline fallback is keyword-based** — When API quota is exhausted, the local generator uses keyword matching instead of AI rewriting (bullet points are not tailored)
- **LaTeX compilation** — App generates .tex source but doesn't compile it to PDF (user must use Overleaf or local LaTeX)
- **No version history** — Previously generated resumes are not saved

### Potential Enhancements
- Add PDF preview using a client-side LaTeX renderer
- Support multiple user profiles
- Add JD parsing to show keyword match analysis
- Save generation history to localStorage or IndexedDB
- Add template selection (different LaTeX resume templates)
- Add a "skills gap analysis" visualization
- Support for OpenAI / Anthropic / local LLMs as alternatives
- Export to DOCX format alongside LaTeX

---

## 9. RUNNING THE APP

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- A Google Gemini API key (free at https://aistudio.google.com/app/apikey)

### Steps
1. Open `index.html` in your browser (just double-click it)
2. Enter your Gemini API key in the modal that appears
3. Paste a Job Description into the text area
4. Click **Execute Mission** (or press `Ctrl+Enter`)
5. Wait ~10-20 seconds for the AI to generate your resume
6. Copy the LaTeX code or download as `.tex` file
7. Paste into [Overleaf](https://overleaf.com) to compile to PDF

---

## 10. CHANGELOG

| Date | Changes |
|------|---------|
| 2026-06-29 | Initial build: HTML + CSS + JS, Gemini integration, basic UI |
| 2026-06-29 | Added model fallback (3 Gemini models) |
| 2026-06-29 | Redesigned UI → cyberpunk gaming HUD theme |
| 2026-06-29 | Created read_excel.ps1 to extract data from Manas_gpt_Dataset.xlsx |
| 2026-06-30 | Integrated all Excel data into PROFILE: +2 projects, expanded skills, coursework, certifications |
| 2026-06-30 | Updated player level to LV 6, XP bar to 85% |
| 2026-06-30 | Created this context file |
| 2026-06-30 | **Reliability overhaul**: 7 Gemini models, retry with backoff, offline fallback generator |
| 2026-06-30 | Live status updates on button during generation (model name, retry status) |
| 2026-06-30 | Updated CONTEXT.md with all reliability changes |
| 2026-07-01 | **Recruiter Logic Pipeline (v3.0)**: Added dynamic project scoring/replacement, JD Intelligence panel, Project selection visualization, clickable LaTeX contact hyperlinks, and full repository documentation files (README, LICENSE, CONTRIBUTING, CHANGELOG, CoC, SECURITY, Issue/PR Templates). |
| 2026-07-01 | Updated CONTEXT.md with all v3.0 updates |
