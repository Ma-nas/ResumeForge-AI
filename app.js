// ============================================================
// JD-to-Resume Generator — Core Application Logic
// Profile data, Gemini integration, LaTeX generation
// ============================================================

// ─── Manas Mishra's Complete Profile Data ────────────────────
const PROFILE = {
  name: "Manas Mishra",
  email: "manasmishra131005@gmail.com",
  phone: "+91-XXXXXXXXXX",
  linkedin: "linkedin.com/in/manas-mishra-a05679294",
  github: "github.com/Ma-nas",
  location: "Bengaluru, India",
  targetRoles: ["AI Engineer", "ML Engineer", "Data Scientist", "Full Stack AI Developer"],

  education: {
    degree: "Bachelor of Technology in Computer Science Engineering (AI \\& ML)",
    institution: "Jain University, Faculty of Engineering \\& Technology",
    location: "Bengaluru, India",
    period: "2023 -- 2027 (Expected)",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Structures \\& Algorithms",
      "Computer Vision",
      "Linear Algebra",
      "Probability \\& Statistics",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Time Series Forecasting",
      "Numerical Optimization",
      "DevOps",
      "UI/UX Design",
      "Research Methodology"
    ]
  },

  experience: [
    {
      title: "Machine Learning Intern",
      company: "CodSoft",
      period: "June 2025 -- July 2025",
      bullets: [
        "Developed and deployed classification and regression ML models using scikit-learn and Python, achieving measurable accuracy improvements on structured datasets.",
        "Engineered end-to-end data pipelines including feature engineering, data preprocessing, and model evaluation using Pandas and NumPy.",
        "Implemented and benchmarked multiple algorithms (Random Forest, SVM, Logistic Regression) with hyperparameter tuning via GridSearchCV."
      ]
    }
  ],

  projects: [
    {
      name: "EvalForge",
      subtitle: "LLM Evaluation \\& Hallucination Detection Platform",
      link: "github.com/Ma-nas/EvalForge",
      period: "2025",
      tech: ["Python", "FastAPI", "React", "SQLite", "Sentence Transformers"],
      bullets: [
        "Built a production-grade LLM evaluation platform with automated hallucination detection using semantic similarity scoring via Sentence Transformers.",
        "Designed a multi-model benchmarking engine supporting side-by-side comparisons across GPT, Gemini, and open-source LLMs with quantitative metrics.",
        "Implemented a full-stack React dashboard with real-time evaluation results, SQLite persistence, and RESTful FastAPI backend."
      ]
    },
    {
      name: "TourismCo. AI",
      subtitle: "AI-Powered Travel Planning Platform",
      link: "tourism-co.vercel.app",
      period: "2025",
      tech: ["React", "TypeScript", "Node.js", "Socket.IO", "Gemini API", "RAG"],
      bullets: [
        "Architected an AI-powered travel planning OS with a RAG pipeline grounded in official Uttar Pradesh tourism data for factually accurate itineraries.",
        "Engineered a real-time conversational interface using Socket.IO, generating budget-optimized multi-city travel plans with dynamic cost breakdowns.",
        "Deployed a production React/TypeScript frontend on Vercel with server-side Node.js API handling Gemini-powered generation and context retrieval."
      ]
    },
    {
      name: "Adaptive Proximal Gradient Research",
      subtitle: "Novel Optimization Algorithm for High-Dimensional Regression",
      link: "github.com/Ma-nas/Mini\\_project",
      period: "2025",
      tech: ["Python", "NumPy", "scikit-learn", "Flask", "Matplotlib"],
      bullets: [
        "Developed a novel APG-DST (Adaptive Proximal Gradient with Dynamic Step-size Tuning) optimizer for high-dimensional sparse regression tasks.",
        "Benchmarked APG-DST against Ridge, LASSO, and Elastic Net regression, demonstrating competitive performance with improved convergence properties.",
        "Built an interactive Flask dashboard for real-time visualization of optimizer convergence, coefficient paths, and performance metrics."
      ]
    },
    {
      name: "AI Test Case Generator",
      subtitle: "Automated pytest Suite Generator",
      link: "github.com/Ma-nas/Ai-test-case-generator",
      period: "2025",
      tech: ["Python", "Gemini API", "pytest", "AST"],
      bullets: [
        "Created a CLI tool that leverages Google Gemini to auto-generate comprehensive pytest test suites from Python source files or natural language function descriptions.",
        "Implemented AST-based code parsing to extract function signatures, docstrings, and type hints for context-aware test generation.",
        "Achieved high-coverage test generation with edge case detection, parametrized tests, and fixture-based setup patterns."
      ]
    },
    {
      name: "Demand Forecasting System",
      subtitle: "Time-Series Inventory Optimization",
      link: "github.com/Ma-nas",
      period: "2025",
      tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Time Series"],
      bullets: [
        "Built a time-series based demand forecasting system for inventory optimization using statistical and ML models.",
        "Implemented ARIMA, Prophet, and LSTM-based forecasting pipelines with automated hyperparameter tuning for multi-product prediction.",
        "Engineered feature pipelines incorporating seasonality, trend decomposition, and external variables to improve forecast accuracy."
      ]
    },
    {
      name: "WanderChat",
      subtitle: "AI Travel Companion Chatbot",
      link: "github.com/Ma-nas",
      period: "2025",
      tech: ["Python", "Streamlit", "Gemini API", "NLP"],
      bullets: [
        "Developed an AI-powered travel companion chatbot using Google Gemini API with context-aware multi-turn conversations.",
        "Implemented natural language understanding for travel queries including destination recommendations, itinerary planning, and local insights.",
        "Built an interactive Streamlit interface with session management and conversation history persistence."
      ]
    }
  ],

  skills: {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "LaTeX"],
    "AI/ML": ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "OpenCV", "Matplotlib", "Sentence Transformers", "Hugging Face"],
    "LLM \\& NLP": ["Google Gemini API", "OpenAI API", "RAG Pipelines", "Prompt Engineering", "Hallucination Detection"],
    "Web Development": ["React", "Node.js", "FastAPI", "Flask", "Streamlit", "Socket.IO", "Tailwind CSS", "Vite"],
    "Databases": ["MySQL", "MongoDB", "SQLite"],
    "Tools \\& Infrastructure": ["Git", "Docker", "Jupyter", "Anaconda", "Vercel", "Figma", "Linux"]
  },

  certifications: [
    { name: "Introduction to Transformer-Based NLP", issuer: "NVIDIA", date: "June 2025" },
    { name: "NVIDIA Deep Learning", issuer: "NVIDIA", date: "2025" },
    { name: "Natural Language Processing Specialization", issuer: "Coursera/NVIDIA", date: "2025" },
    { name: "Deep Learning with Python: Optimizing Deep Learning Models", issuer: "LinkedIn Learning", date: "April 2026" },
    { name: "Introduction to DevOps", issuer: "Online", date: "2025" },
    { name: "Figma for UX Design", issuer: "LinkedIn Learning", date: "April 2026" },
    { name: "Fundamentals of Git \\& GitHub", issuer: "Microsoft Learn Student Ambassador", date: "" },
    { name: "Code Relay 2025 --- Participation", issuer: "Jain University FET", date: "March 2025" }
  ],

  preferredDomains: ["AI", "NLP", "Computer Vision", "Data Science", "Full Stack AI"]
};

// ─── API Key Management ──────────────────────────────────────
const API_KEY_STORAGE = 'gemini_api_key_resume_gen';

function getApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

function setApiKey(key) {
  localStorage.setItem(API_KEY_STORAGE, key.trim());
}

function hasApiKey() {
  return getApiKey().length > 10;
}

// ─── Gemini API Call with Model Fallback ─────────────────────
// NOTE (2026-06-30): gemini-2.0-flash, gemini-2.0-flash-lite, and all
// gemini-1.5-* models were shut down by Google and now 404. Updated to
// the current live model lineup (gemini-3.5-flash family / 2.5 fallback).
const GEMINI_MODELS = [
  'gemini-flash-latest',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
];

async function callGemini(prompt) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('No API key configured');

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    try {
      // NOTE (2026-06-30): Google is migrating from "standard" API keys
      // (AIzaSy...) sent as a ?key= query param to "auth keys" (AQ.Ab...)
      // which must be sent via the x-goog-api-key header instead.
      // The header works for both key types, so this is the safe default.
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              topP: 0.9,
              maxOutputTokens: 8192,
              responseMimeType: 'application/json',
            }
          })
        }
      );

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        const errMsg = err.error?.message || '';

        // Model not found / retired — try next model, don't treat as a key error
        if (response.status === 404) {
          lastError = new Error(`Model ${model} not found (may be retired)`);
          continue;
        }

        // If quota exceeded, try next model
        if (response.status === 429 || errMsg.toLowerCase().includes('quota')) {
          lastError = new Error(`Quota exceeded for ${model}`);
          continue;
        }

        if (response.status === 401 || response.status === 403) {
          throw new Error('Invalid or unauthorized API key. Please check your Gemini API key in settings.');
        }
        throw new Error(errMsg || `API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        lastError = new Error(`Empty response from ${model}`);
        continue;
      }
      console.log(`✅ Used model: ${model}`);
      return text;

    } catch (err) {
      if (err.message.includes('Invalid or unauthorized API key')) throw err;
      lastError = err;
      console.warn(`⚠️ Model ${model} failed:`, err.message);
      continue;
    }
  }

  throw new Error(
    lastError?.message?.includes('quota') || lastError?.message?.includes('Quota')
      ? 'All model quotas exceeded. Please wait a few minutes or upgrade your Gemini API plan at ai.google.dev.'
      : (lastError?.message || 'All models failed. Please try again.')
  );
}

// ─── Build the System Prompt ─────────────────────────────────
function buildResumePrompt(jd) {
  const profileStr = JSON.stringify(PROFILE, null, 2);

  return `You are an expert AI Resume Strategist and recruiter with deep expertise in Applicant Tracking Systems (ATS) and professional LaTeX formatting.
Your task is to analyze the provided Job Description (JD) and the candidate profile data, and perform a highly tailored, deterministic resume rewrite that will land the candidate an interview.

You MUST follow this 10-stage execution pipeline:
1. **JD Analysis**: Extract target role, industry, responsibilities, required and preferred technologies, programming languages, frameworks, AI/ML, cloud, databases, DevOps, soft skills, and domain knowledge.
2. **Project Scoring**: Calculate a score (0 to 100) for all 6 projects in the profile using:
   - Technology Match: 40 points maximum
   - Keyword Match: 25 points maximum
   - Domain Match: 20 points maximum
   - Business Impact: 15 points maximum
3. **Project Selection**: Select the best 2 existing projects based on their scores.
4. **Project Generation**: Identify the largest technology/domain gap between the candidate's portfolio and the JD requirements. Generate a production-quality, resume-ready project to fill this gap. Replace the weakest scoring existing project with this generated project.
5. **Project Insertion**: The resume MUST contain EXACTLY three projects: the top 2 selected existing projects, plus the 1 generated project. You MUST insert the generated project directly into the LaTeX resume, and also details of it in the JSON response.
6. **Skills Filtering & Ordering**: Never invent skills. Only reorder categories and specific skills within the PROFILE so that technologies mentioned in the JD are highlighted first.
7. **Certification Selection**: Select up to a maximum of 3 certifications from the profile, ranked by relevance to the JD (e.g., NVIDIA/Deep Learning/NLP certs prioritized for AI/ML roles; Figma/Git for design/UI roles).
8. **Experience Rewriting**: Rewrite experience bullets using the Bullet Formula: [Action Verb] + [Technology used] + [Business Impact] + [Metric if possible]. Never hallucinate company, dates, or titles. Ensure 100% factual accuracy.
9. **Hyperlinked Contact Header**: Use the 'hyperref' and 'fontawesome5' LaTeX packages. Make all contact fields clickable:
   - Phone: \\href{tel:+91-XXXXXXXXXX}{\\faPhone\\ +91-XXXXXXXXXX}
   - Email: \\href{mailto:manasmishra131005@gmail.com}{\\faEnvelope\\ manasmishra131005@gmail.com}
   - GitHub: \\href{https://github.com/Ma-nas}{\\faGithub\\ github.com/Ma-nas}
   - LinkedIn: \\href{https://linkedin.com/in/manas-mishra-a05679294}{\\faLinkedin\\ linkedin.com/in/manas-mishra-a05679294}
   Ensure there are no plain text links.
10. **ATS Validation**: Ensure the generated LaTeX resume compiles perfectly, contains exactly 1 page, uses the Jake Ryan template, contains exactly 3 projects (including the generated one), has no summary section, and targets an ATS score of > 90.

═══════════════════════════════════════════════════
CANDIDATE PROFILE DATA:
═══════════════════════════════════════════════════
${profileStr}

═══════════════════════════════════════════════════
JOB DESCRIPTION:
═══════════════════════════════════════════════════
${jd}

═══════════════════════════════════════════════════
RESUME FORMAT RULES (JAKE RYAN TEMPLATE):
═══════════════════════════════════════════════════
Ensure standard Jake Ryan LaTeX structure, including packages:
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\input{glyphtounicode}
% ... set page margins, headings formatting, subheadings format, etc.
Include sections: Education, Experience, Projects (exactly 3), Skills, Certifications (max 3).
Ensure exactly 1 page length.

═══════════════════════════════════════════════════
OUTPUT FORMAT (STRICT JSON):
═══════════════════════════════════════════════════
You MUST respond with a single JSON object (and nothing else). No markdown, no backticks, no code fences.
The response must follow this JSON schema exactly, but with real values matching your analysis:

{
  "ats_score": 95,
  "ats_feedback": "Explain why this score was given.",
  "jd_analysis": {
    "target_role": "Machine Learning Engineer",
    "required_technologies": ["Python", "PyTorch"],
    "preferred_technologies": ["Docker"],
    "key_responsibilities": ["Build training pipelines"],
    "missing_skills": ["MLOps"]
  },
  "selected_projects": [
    {
      "name": "EvalForge",
      "score": 95,
      "reason": "Direct match for PyTorch.",
      "generated": false
    },
    {
      "name": "TourismCo. AI",
      "score": 90,
      "reason": "Uses generative AI APIs.",
      "generated": false
    },
    {
      "name": "Automated MLOps Pipeline",
      "score": 100,
      "reason": "Fills the MLOps gap.",
      "generated": true,
      "fills_gap": "MLOps",
      "description": "A production-grade pipeline.",
      "tech_stack": ["Docker", "Git"],
      "why": "Demonstrates deployment."
    }
  ],
  "replaced_project": {
    "name": "WanderChat",
    "score": 45,
    "reason": "Weakest technical match."
  },
  "project_scores": {
    "EvalForge": 95,
    "TourismCo. AI": 90,
    "Adaptive Proximal Gradient Research": 70,
    "AI Test Case Generator": 80,
    "Demand Forecasting System": 60,
    "WanderChat": 45,
    "Automated MLOps Pipeline": 100
  },
  "skills_emphasized": ["Python", "PyTorch"],
  "certifications_used": ["NVIDIA Deep Learning"],
  "latex": "%% Compilable LaTeX code here..."
}

CRITICAL: Every single backslash in the LaTeX code MUST be escaped as a double backslash (\\) so it is a valid JSON string value (e.g., use \\documentclass, \\begin, \\item). All double quotes inside the LaTeX code MUST be escaped as \". Return ONLY the JSON object. Do not wrap it in \`\`\`json \`\`\` blocks.\`\`\``;
}

// ─── Parse Gemini Response ───────────────────────────────────
function parseGeminiResponse(rawText) {
  let cleaned = rawText.trim();
  
  // Strip markdown code fences if present
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  cleaned = cleaned.trim();

  let jsonStr = cleaned;
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    jsonStr = cleaned.substring(firstBrace, lastBrace + 1);
  }

  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    // If standard parsing fails (e.g. unescaped backslashes in LaTeX), attempt to fix it
    try {
      // Escape any backslash that isn't already escaping a valid JSON character
      const fixedStr = jsonStr.replace(/\\([^"\\/bfnrtu])/g, '\\\\$1');
      return JSON.parse(fixedStr);
    } catch (e2) {
      console.error("JSON Parsing failed after cleaning. Error:", e);
      console.error("Raw response was:", rawText);
      throw new Error('Failed to parse AI response. Please try again.');
    }
  }
}

// ─── Main Generate Function ──────────────────────────────────
async function generateResume(jd) {
  if (!jd || jd.trim().length < 50) {
    throw new Error('Please paste a complete Job Description (at least 50 characters).');
  }

  if (!hasApiKey()) {
    throw new Error('API_KEY_MISSING');
  }

  const prompt = buildResumePrompt(jd);
  const rawResponse = await callGemini(prompt);
  const result = parseGeminiResponse(rawResponse);

  // Validate result structure
  if (!result.latex || !result.selected_projects || !result.jd_analysis || !result.project_scores) {
    throw new Error('Incomplete response from AI. Please try again.');
  }

  return result;
}

// ─── UI Controller ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const jdInput = document.getElementById('jd-input');
  const charCount = document.getElementById('char-count');
  const generateBtn = document.getElementById('btn-generate');
  const outputPanel = document.getElementById('output-panel');
  const emptyState = document.getElementById('empty-state');
  const atsCard = document.getElementById('ats-card');
  const latexCard = document.getElementById('latex-card');
  const projectCard = document.getElementById('project-card');
  const latexOutput = document.getElementById('latex-output');
  const atsRingProgress = document.getElementById('ats-ring-progress');
  const atsValue = document.getElementById('ats-value');
  const atsTitle = document.getElementById('ats-title');
  const atsFeedback = document.getElementById('ats-feedback');
  const projectTitle = document.getElementById('project-title');
  const projectDesc = document.getElementById('project-desc');
  const projectTech = document.getElementById('project-tech');
  const projectWhy = document.getElementById('project-why');
  const btnCopy = document.getElementById('btn-copy');
  const btnDownload = document.getElementById('btn-download');
  const settingsBtn = document.getElementById('btn-settings');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalInput = document.getElementById('modal-api-key');
  const modalError = document.getElementById('modal-error');
  const modalSaveBtn = document.getElementById('modal-save');
  const toast = document.getElementById('toast');

  // New UI Elements for JD Analysis & Project Selection
  const jdAnalysisCard = document.getElementById('jd-analysis-card');
  const jdTargetRole = document.getElementById('jd-target-role');
  const jdRequiredTech = document.getElementById('jd-required-tech');
  const jdPreferredTech = document.getElementById('jd-preferred-tech');
  const jdResponsibilities = document.getElementById('jd-responsibilities');
  const jdMissingSkills = document.getElementById('jd-missing-skills');
  const missingSkillsSection = document.getElementById('missing-skills-section');

  const projectSelectionCard = document.getElementById('project-selection-card');
  const projectScoresBars = document.getElementById('project-scores-bars');
  const selectedProjectsList = document.getElementById('selected-projects-list');
  const replacedProjectDetails = document.getElementById('replaced-project-details');

  let currentLatex = '';

  // ── Character Count ──
  jdInput.addEventListener('input', () => {
    const len = jdInput.value.length;
    charCount.textContent = `${len.toLocaleString()} chars`;
  });

  // ── Check API Key on Load ──
  if (!hasApiKey()) {
    showModal();
  }

  // ── Modal Controls ──
  function showModal() {
    modalOverlay.classList.add('active');
    modalInput.value = getApiKey();
    modalError.classList.remove('visible');
    setTimeout(() => modalInput.focus(), 300);
  }

  function hideModal() {
    modalOverlay.classList.remove('active');
  }

  settingsBtn.addEventListener('click', showModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay && hasApiKey()) {
      hideModal();
    }
  });

  modalSaveBtn.addEventListener('click', () => {
    const key = modalInput.value.trim();
    if (!key || key.length < 10) {
      modalError.textContent = 'Please enter a valid Gemini API key.';
      modalError.classList.add('visible');
      return;
    }
    setApiKey(key);
    modalError.classList.remove('visible');
    hideModal();
    showToast('✅', 'API key saved successfully');
  });

  modalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') modalSaveBtn.click();
  });

  // ── Generate Resume ──
  generateBtn.addEventListener('click', async () => {
    const jd = jdInput.value.trim();

    if (!jd || jd.length < 50) {
      showToast('⚠️', 'Please paste a complete Job Description');
      return;
    }

    if (!hasApiKey()) {
      showModal();
      return;
    }

    // Set loading state
    generateBtn.classList.add('loading');
    generateBtn.disabled = true;
    emptyState.style.display = 'none';

    // Show shimmer loading
    atsCard.classList.remove('visible');
    jdAnalysisCard.classList.remove('visible');
    projectSelectionCard.classList.remove('visible');
    latexCard.classList.remove('visible');
    projectCard.classList.remove('visible');

    try {
      const result = await generateResume(jd);

      // Update ATS Score
      const score = Math.min(100, Math.max(0, result.ats_score || 75));
      const circumference = 157;
      const offset = circumference - (circumference * score / 100);
      atsRingProgress.style.strokeDashoffset = offset;
      atsValue.textContent = `${score}%`;
      atsTitle.textContent = score >= 80 ? 'Excellent Match' : score >= 60 ? 'Good Match' : 'Fair Match';
      atsFeedback.textContent = result.ats_feedback || 'Resume tailored to match the JD requirements.';

      // Render JD Analysis
      jdTargetRole.textContent = result.jd_analysis.target_role || 'N/A';
      jdRequiredTech.innerHTML = (result.jd_analysis.required_technologies || [])
        .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
        .join('');
      jdPreferredTech.innerHTML = (result.jd_analysis.preferred_technologies || [])
        .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
        .join('');
      jdResponsibilities.innerHTML = (result.jd_analysis.key_responsibilities || [])
        .map(r => `<li>${escapeHtml(r)}</li>`)
        .join('');
      if (result.jd_analysis.missing_skills && result.jd_analysis.missing_skills.length > 0) {
        jdMissingSkills.innerHTML = result.jd_analysis.missing_skills
          .map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`)
          .join('');
        missingSkillsSection.style.display = 'block';
      } else {
        missingSkillsSection.style.display = 'none';
      }

      // Render Project Selection Scoring Bars
      projectScoresBars.innerHTML = Object.entries(result.project_scores || {}).map(([name, pScore]) => {
        const isGenerated = result.selected_projects.find(p => p.name === name)?.generated;
        const isReplaced = result.replaced_project?.name === name;
        const typeClass = isGenerated ? 'generated' : isReplaced ? 'replaced' : 'normal';
        return `
          <div class="score-bar-row">
            <div class="score-bar-name" title="${escapeHtml(name)}">${escapeHtml(name)}</div>
            <div class="score-bar-track">
              <div class="score-bar-fill ${typeClass}" style="width: ${pScore}%"></div>
            </div>
            <div class="score-bar-val ${typeClass}">${pScore}%</div>
          </div>
        `;
      }).join('');

      // Render Selected Projects details
      selectedProjectsList.innerHTML = (result.selected_projects || []).map(p => {
        const isGenerated = p.generated;
        const itemClass = isGenerated ? 'generated-item' : '';
        const nameClass = isGenerated ? 'generated-name' : '';
        const scoreClass = isGenerated ? 'generated' : 'normal';
        const namePrefix = isGenerated ? '✨ [Generated] ' : '📁 ';
        return `
          <div class="project-detail-item ${itemClass}">
            <div class="project-detail-header">
              <span class="project-detail-name ${nameClass}">${namePrefix}${escapeHtml(p.name)}</span>
              <span class="project-detail-score ${scoreClass}">Score: ${p.score}</span>
            </div>
            <p class="project-detail-desc">${escapeHtml(p.reason || p.why || '')}</p>
          </div>
        `;
      }).join('');

      // Render Replaced Project details
      if (result.replaced_project && result.replaced_project.name) {
        replacedProjectDetails.innerHTML = `
          <div class="replaced-project-header">
            <span class="replaced-project-name">📁 ${escapeHtml(result.replaced_project.name)}</span>
            <span class="replaced-project-score">Score: ${result.replaced_project.score}</span>
          </div>
          <p class="replaced-project-desc">${escapeHtml(result.replaced_project.reason || 'Replaced by generated project to address technology gap.')}</p>
        `;
      } else {
        replacedProjectDetails.innerHTML = `<p class="replaced-project-desc">No project was replaced.</p>`;
      }

      // Update LaTeX output
      currentLatex = result.latex;
      latexOutput.textContent = result.latex;

      // Update Project Suggestion Card (Side Panel)
      const proj = result.selected_projects.find(p => p.generated) || {};
      projectTitle.textContent = proj.name || 'Suggested Project';
      projectDesc.textContent = proj.description || '';
      projectTech.innerHTML = (proj.tech_stack || [])
        .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
        .join('');
      projectWhy.innerHTML = `<strong>Why this project?</strong> ${escapeHtml(proj.why || '')}`;

      // Animate cards in
      setTimeout(() => atsCard.classList.add('visible'), 100);
      setTimeout(() => jdAnalysisCard.classList.add('visible'), 200);
      setTimeout(() => projectSelectionCard.classList.add('visible'), 300);
      setTimeout(() => latexCard.classList.add('visible'), 400);
      setTimeout(() => projectCard.classList.add('visible'), 500);

      showToast('🎉', 'Resume generated successfully!');

    } catch (err) {
      if (err.message === 'API_KEY_MISSING') {
        showModal();
      } else {
        showToast('❌', err.message);
        emptyState.style.display = '';
      }
    } finally {
      generateBtn.classList.remove('loading');
      generateBtn.disabled = false;
    }
  });

  // ── Copy LaTeX ──
  btnCopy.addEventListener('click', async () => {
    if (!currentLatex) return;
    try {
      await navigator.clipboard.writeText(currentLatex);
      btnCopy.classList.add('copied');
      btnCopy.innerHTML = '✓ Copied!';
      showToast('📋', 'LaTeX copied to clipboard');
      setTimeout(() => {
        btnCopy.classList.remove('copied');
        btnCopy.innerHTML = '📋 Copy LaTeX';
      }, 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = currentLatex;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btnCopy.classList.add('copied');
      btnCopy.innerHTML = '✓ Copied!';
      setTimeout(() => {
        btnCopy.classList.remove('copied');
        btnCopy.innerHTML = '📋 Copy LaTeX';
      }, 2000);
    }
  });

  // ── Download .tex ──
  btnDownload.addEventListener('click', () => {
    if (!currentLatex) return;
    const blob = new Blob([currentLatex], { type: 'application/x-tex' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Manas_Mishra_Resume.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('💾', 'Resume downloaded as .tex file');
  });

  // ── Toast ──
  let toastTimeout;
  function showToast(icon, message) {
    const toastIcon = toast.querySelector('.toast-icon');
    const toastText = toast.querySelector('.toast-text');
    toastIcon.textContent = icon;
    toastText.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3000);
  }

  // ── Utility ──
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ── Keyboard shortcut: Ctrl+Enter to generate ──
  jdInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      generateBtn.click();
    }
  });
});
