// ============================================================
// JD-to-Resume Generator — Core Application Logic
// Profile data, Gemini integration, LaTeX generation
// ============================================================

// ─── Manas Mishra's Complete Profile Data ────────────────────
const PROFILE = {
  name: "Manas Mishra",
  email: "manasmishra131005@gmail.com",
  phone: "+91 6363824224",
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
const GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite'
];

async function callGemini(prompt, onStatusUpdate) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('No API key configured');

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    let retries = 0;
    const maxRetries = 2;
    
    while (retries <= maxRetries) {
      try {
        if (onStatusUpdate) {
          const retryText = retries > 0 ? ` (Retry ${retries})` : '';
          onStatusUpdate(`Trying ${model}${retryText}...`);
        }
        
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
                maxOutputTokens: 32768,
                thinkingConfig: { thinkingBudget: 0 }
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
            break; // Move to next model
          }

          // If quota exceeded or rate limited
          if (response.status === 429 || errMsg.toLowerCase().includes('quota')) {
            lastError = new Error(`Quota exceeded for ${model}`);
            if (retries < maxRetries) {
              retries++;
              const backoffMs = retries === 1 ? 2000 : 4000;
              if (onStatusUpdate) onStatusUpdate(`Rate limit on ${model}. Waiting ${backoffMs/1000}s...`);
              await new Promise(r => setTimeout(r, backoffMs));
              continue;
            }
            break; // Max retries reached, move to next model
          }

          if (response.status === 401 || response.status === 403) {
            throw new Error('Invalid or unauthorized API key. Please check your Gemini API key in settings.');
          }
          throw new Error(errMsg || `API error: ${response.status}`);
        }

        const data = await response.json();
        const candidate = data.candidates?.[0];
        const text = candidate?.content?.parts?.[0]?.text;
        
        if (!text) {
          lastError = new Error(`Empty response from ${model}`);
          break; // Try next model
        }
        if (candidate?.finishReason === 'MAX_TOKENS') {
          console.warn(`⚠️ ${model} got cut off (MAX_TOKENS) — treating as a failure, trying next model`);
          lastError = new Error(`${model} response was truncated`);
          break; // Move to next model
        }
        console.log(`✅ Used model: ${model}`);
        return text;

      } catch (err) {
        if (err.message.includes('Invalid or unauthorized API key')) throw err;
        lastError = err;
        console.warn(`⚠️ Model ${model} attempt ${retries + 1} failed:`, err.message);
        
        if (retries < maxRetries && !err.message.includes('not found')) {
          retries++;
          const backoffMs = retries === 1 ? 2000 : 4000;
          if (onStatusUpdate) onStatusUpdate(`Error on ${model}. Retrying in ${backoffMs/1000}s...`);
          await new Promise(r => setTimeout(r, backoffMs));
          continue;
        }
        break; // Break the while loop to move to the next model
      }
    }
  }

  throw new Error(
    lastError?.message?.includes('quota') || lastError?.message?.includes('Quota') || lastError?.message?.includes('Rate')
      ? 'All model quotas exceeded. Please wait a few minutes or upgrade your Gemini API plan at ai.google.dev.'
      : (lastError?.message || 'All models failed. Please try again.')
  );
}

// ─── Groq API Key & Model Management ─────────────────────────
const GROQ_API_KEY_STORAGE = 'groq_api_key_resume_gen';
const getGroqApiKey = () => localStorage.getItem(GROQ_API_KEY_STORAGE) || '';
const setGroqApiKey = (key) => localStorage.setItem(GROQ_API_KEY_STORAGE, key.trim());
const hasGroqApiKey = () => getGroqApiKey().length > 10;

const GROQ_MODELS = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];

async function callGroq(prompt, onStatusUpdate) {
  const apiKey = getGroqApiKey();
  if (!apiKey) throw new Error('No Groq API key configured');
  let lastError = null;

  for (const model of GROQ_MODELS) {
    try {
      if (onStatusUpdate) onStatusUpdate(`Trying Groq: ${model}...`);
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 8192
        })
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        if (response.status === 401 || response.status === 403) {
          throw new Error('Invalid Groq API key.');
        }
        lastError = new Error(err.error?.message || `Groq error ${response.status}`);
        continue;
      }
      const data = await response.json();
      const choice = data.choices?.[0];
      const text = choice?.message?.content;
      if (!text) { lastError = new Error(`Empty response from ${model}`); continue; }
      if (choice?.finish_reason === 'length') {
        console.warn(`⚠️ Groq ${model} got cut off (length) — treating as a failure`);
        lastError = new Error(`${model} response was truncated`);
        continue;
      }
      console.log(`✅ Used Groq model: ${model}`);
      return text;
    } catch (err) {
      if (err.message.includes('Invalid Groq')) throw err;
      lastError = err;
    }
  }
  throw new Error(lastError?.message || 'All Groq models failed.');
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
5. **Project Insertion**: The resume MUST contain EXACTLY three projects: the top 2 selected existing projects, plus the 1 generated project. You MUST insert the generated project directly into the LaTeX resume with 2-3 detailed bullet points describing its technical implementation and impact, and also provide details in the JSON response.
6. **Skills Filtering & Ordering**: Never invent skills. Only reorder categories and specific skills within the PROFILE so that technologies mentioned in the JD are highlighted first.
7. **Certification Selection**: Select up to a maximum of 3 certifications from the profile, ranked by relevance to the JD (e.g., NVIDIA/Deep Learning/NLP certs prioritized for AI/ML roles; Figma/Git for design/UI roles).
8. **Experience & Project Rewriting**: Rewrite experience and existing project bullets using the Bullet Formula: [Action Verb] + [Technology used] + [Business Impact] + [Metric if possible]. Tailor existing bullets to strongly match JD keywords. Never hallucinate company, dates, or titles. Ensure 100% factual accuracy.
9. **Hyperlinked Contact Header**: Use 'hyperref' and 'fontawesome5'. The VISIBLE TEXT must be short labels, never raw URLs:
   - Phone: \\href{tel:${PROFILE.phone}}{\\faPhone\\ ${PROFILE.phone}}
   - Email: \\href{mailto:${PROFILE.email}}{\\faEnvelope\\ ${PROFILE.email}}
   - GitHub: \\href{https://${PROFILE.github}}{\\faGithub\\ GitHub}
   - LinkedIn: \\href{https://${PROFILE.linkedin}}{\\faLinkedin\\ LinkedIn}
   Apply the same rule to every project link — show \\href{URL}{\\faGithub\\ Repo} or \\href{URL}{\\faExternalLinkAlt\\ Live Demo}, NEVER the bare URL text. This applies with no exceptions.
10. **ATS Validation**: Ensure the generated LaTeX resume compiles perfectly, contains exactly 1 page, uses the Jake Ryan template, contains exactly 3 projects (including the generated one), MUST include a "Professional Summary" section at the top tailored to the JD, and targets an ATS score of > 90. TO ENSURE IT STRICTLY FITS ON 1 PAGE, limit all experience and project sections to a maximum of 3 concise bullet points each.

═══════════════════════════════════════════════════
CANDIDATE PROFILE DATA:
═══════════════════════════════════════════════════
${profileStr}

═══════════════════════════════════════════════════
JOB DESCRIPTION:
═══════════════════════════════════════════════════
${jd}

═══════════════════════════════════════════════════
RESUME FORMAT RULES (MANDATORY — USE THESE EXACT MACROS):
═══════════════════════════════════════════════════
You MUST use this exact preamble and these exact custom commands. Do NOT invent your own spacing or use plain itemize for section content — use resumeItem/resumeSubheading/resumeProjectHeading for every single entry. This is what makes the layout fit one page.

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
\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.6in}
\\addtolength{\\textwidth}{1.2in}
\\addtolength{\\topmargin}{-.6in}
\\addtolength{\\textheight}{1.2in}
\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}
\\titleformat{\\section}{\\vspace{-5pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-6pt}]
\\newcommand{\\resumeItem}[1]{\\item\\small{#1 \\vspace{-2pt}}}
\\newcommand{\\resumeSubheading}[4]{\\vspace{-2pt}\\item
  \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\ \\textit{\\small#3} & \\textit{\\small #4} \\\\
  \\end{tabular*}\\vspace{-7pt}}
\\newcommand{\\resumeProjectHeading}[2]{\\item
  \\begin{tabular*}{0.98\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\small#1 & #2 \\\\
  \\end{tabular*}\\vspace{-7pt}}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=0.15in]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

ADDITIONAL SPACE-SAVING RULES:
- Professional Summary: ONE unbulleted paragraph, max 2 lines. Do NOT use 3 bullet points for the summary — that alone was costing 5+ lines in prior output.
- Every experience/project bullet must be ONE line if possible, max two. No filler clauses.
- Use \\resumeProjectHeading for every project title line (never a bare tabularx block).
- Use \\resumeItem inside \\resumeItemListStart/End for every bullet — never plain \\item.
- Coursework line: max 6 courses, comma separated, no line break.

Include sections: Professional Summary, Education, Experience, Projects (exactly 3), Skills, Certifications (max 3).
Ensure exactly 1 page length.

CRITICAL INSTRUCTION FOR TOKEN BUDGET: Keep 'ats_feedback' and all 'reason' / 'why' fields in the JSON concise — 1 sentence, max ~25 words each. Do not write long justifications. You must save your token budget for the complete LaTeX output!

CRITICAL INSTRUCTION FOR LATEX: You MUST generate the ENTIRE, COMPLETE LaTeX document from \\documentclass all the way to \\end{document}. Do NOT use abbreviations, placeholders, or comments like "% ... (setup packages)". You must write out every single section, including the full contact header, summary, education, full experience list, all 3 projects, skills, and certifications. If you cut it short, the compiler will fail!

═══════════════════════════════════════════════════
OUTPUT FORMAT:
═══════════════════════════════════════════════════
You MUST respond with exactly two parts:
1. A JSON object enclosed in a \`\`\`json codeblock containing your analysis.
2. The complete LaTeX code enclosed in a \`\`\`latex codeblock. Do NOT put the LaTeX code inside the JSON.

Example Response Structure:
\`\`\`json
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
      "name": "Automated MLOps Pipeline",
      "score": 100,
      "reason": "Fills the MLOps gap.",
      "generated": true,
      "fills_gap": "MLOps",
      "description": "A production-grade pipeline solving the MLOps gap.",
      "bullets": ["Architected a scalable MLOps pipeline using Docker and Kubernetes, reducing deployment time by 40%.", "Implemented automated CI/CD for model retraining."],
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
    "WanderChat": 45,
    "Automated MLOps Pipeline": 100
  },
  "skills_emphasized": ["Python", "PyTorch"],
  "certifications_used": ["NVIDIA Deep Learning"]
}
\`\`\`
\`\`\`latex
\\documentclass[letterpaper,11pt]{article}
%% [CRITICAL: DO NOT OUTPUT THIS COMMENT. YOU MUST WRITE OUT ALL REQUIRED PACKAGES AND FULL CONTACT HEADER HERE]

\\section{Professional Summary}
%% [CRITICAL: DO NOT OUTPUT THIS COMMENT. WRITE A REAL 3-SENTENCE SUMMARY HERE WITHOUT BULLETS]

\\section{Projects}
  \\resumeSubHeadingListStart
    \\resumeProjectHeading
      {\\textbf{Generated Project Name} $|$ \\emph{Tech Stack}}{}
      \\resumeItemListStart
        \\resumeItem{Bullet point 1 from your JSON analysis.}
        \\resumeItem{Bullet point 2 from your JSON analysis.}
      \\resumeItemListEnd
% ... other projects ...
  \\resumeSubHeadingListEnd
\\end{document}
\`\`\`
`;
}

// ─── Parse Gemini Response ───────────────────────────────────
function parseGeminiResponse(rawText) {
  let jsonStr = '';
  let latexStr = '';

  const jsonMatch = rawText.match(/```json\s*([\s\S]*?)\s*```/i);
  if (jsonMatch) {
    jsonStr = jsonMatch[1];
  } else {
    // fallback if no json code block
    const firstBrace = rawText.indexOf('{');
    const lastBrace = rawText.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      jsonStr = rawText.substring(firstBrace, lastBrace + 1);
    }
  }

  const latexMatch = rawText.match(/```(?:latex|tex)\s*([\s\S]*?)\s*```/i);
  if (latexMatch) {
    latexStr = latexMatch[1];
  } else {
    // fallback if no latex code block
    const docClassIdx = rawText.indexOf('\\documentclass');
    if (docClassIdx !== -1) {
      latexStr = rawText.substring(docClassIdx);
      const endDocIdx = latexStr.indexOf('\\end{document}');
      if (endDocIdx !== -1) {
         latexStr = latexStr.substring(0, endDocIdx + 14);
      }
    }
  }

  let result;
  try {
    result = JSON.parse(jsonStr);
  } catch (e) {
    // Attempt to fix common JSON issues
    const fixedStr = jsonStr.replace(/\\([^"\\/bfnrtu])/g, '\\\\$1').replace(/\n/g, '\\n');
    try {
      result = JSON.parse(fixedStr);
    } catch (e2) {
      console.error("JSON Parsing failed after cleaning. Error:", e);
      throw new Error('Failed to parse AI response. Please try again.');
    }
  }

  if (latexStr) {
    result.latex = latexStr.trim();
    if (!result.latex.includes('\\end{document}')) {
      const beginCount = (result.latex.match(/\\begin\{itemize\}|\\resumeItemListStart|\\resumeSubHeadingListStart/g) || []).length;
      const endCount = (result.latex.match(/\\end\{itemize\}|\\resumeItemListEnd|\\resumeSubHeadingListEnd/g) || []).length;
      for (let i = 0; i < beginCount - endCount; i++) {
        result.latex += '\n\\end{itemize}';
      }
      result.latex += '\n\\end{document}';
    }
  } else if (!result.latex) {
    throw new Error('No LaTeX code found in response.');
  }

  return result;
}

// ─── Offline Fallback Generator ──────────────────────────────
async function generateOfflineResume(jd) {
  const lowerJd = jd.toLowerCase();
  const techKeywords = ['python', 'java', 'react', 'node', 'sql', 'machine learning', 'deep learning', 'nlp', 'aws', 'docker', 'kubernetes', 'tensorflow', 'pytorch', 'javascript', 'typescript', 'mongodb', 'fastapi', 'flask'];
  
  const foundTech = techKeywords.filter(k => lowerJd.includes(k));
  const reqTech = foundTech.slice(0, 5).map(t => t.charAt(0).toUpperCase() + t.slice(1));
  
  // Select top 2 projects
  const selectedProjects = PROFILE.projects.slice(0, 2).map((p, i) => ({
    name: p.name,
    score: 85 - i * 5,
    reason: "Selected as strong match based on profile.",
    generated: false
  }));

  // Generate 1 project based on heuristic
  let generatedProject = {
    name: "AI Microservices Pipeline",
    score: 90,
    reason: "Generated to fill gap in scalable AI deployments.",
    generated: true,
    description: "End-to-end scalable ML pipeline for automated inference and model retraining.",
    tech_stack: ["Python", "Docker", "FastAPI", "Kubernetes"],
    why: "The job description strongly hints at deploying and scaling AI models."
  };

  if (lowerJd.includes('data') || lowerJd.includes('sql')) {
    generatedProject = {
      name: "Automated Data Processing Engine",
      score: 92,
      reason: "Generated to fill data engineering gap.",
      generated: true,
      description: "Distributed data processing engine handling 1M+ records/day.",
      tech_stack: ["Python", "SQL", "Pandas", "Apache Airflow"],
      why: "The job focuses heavily on data manipulation and ETL."
    };
  } else if (lowerJd.includes('react') || lowerJd.includes('web') || lowerJd.includes('javascript')) {
    generatedProject = {
      name: "Full-Stack AI Dashboard",
      score: 95,
      reason: "Generated to fill full-stack development gap.",
      generated: true,
      description: "Real-time AI monitoring dashboard with interactive visualizations.",
      tech_stack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      why: "The job emphasizes full-stack and front-end technologies."
    };
  }

  selectedProjects.push(generatedProject);

  const replacedProject = {
    name: PROFILE.projects[PROFILE.projects.length - 1].name,
    score: 50,
    reason: "Weakest match for the targeted job role."
  };

  const projectScores = {};
  PROFILE.projects.forEach(p => {
    projectScores[p.name] = 60 + Math.floor(Math.random() * 20);
  });
  selectedProjects.forEach(p => {
    projectScores[p.name] = p.score;
  });

  const atsScore = Math.min(95, 60 + (foundTech.length * 5));

  const latex = `
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

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}
\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{\\vspace{-4pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape ${PROFILE.name}} \\\\ \\vspace{1pt}
    \\small
    \\faIcon{phone} ${PROFILE.phone} $|$
    \\href{mailto:${PROFILE.email}}{\\faIcon{envelope} \\underline{${PROFILE.email}}} $|$
    \\href{https://${PROFILE.linkedin}}{\\faIcon{linkedin} \\underline{${PROFILE.linkedin}}} $|$
    \\href{https://${PROFILE.github}}{\\faIcon{github} \\underline{${PROFILE.github}}}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\begin{itemize}[leftmargin=0.15in, label={}]
    \\item
      \\begin{tabularx}{\\textwidth}{X r}
        \\textbf{${PROFILE.education.institution}} & ${PROFILE.education.location} \\\\
        \\textit{${PROFILE.education.degree}} & ${PROFILE.education.period} \\\\
      \\end{tabularx}
  \\end{itemize}

%-----------EXPERIENCE-----------
\\section{Experience}
  \\begin{itemize}[leftmargin=0.15in, label={}]
    ${PROFILE.experience.map(exp => `
    \\item
      \\begin{tabularx}{\\textwidth}{X r}
        \\textbf{${exp.title}} & ${exp.period} \\\\
        \\textit{${exp.company}} & \\\\
      \\end{tabularx}
      \\vspace{-2pt}
      \\begin{itemize}
        ${exp.bullets.map(b => `\\item ${b}`).join('\\n        ')}
      \\end{itemize}
    `).join('')}
  \\end{itemize}

%-----------PROJECTS-----------
\\section{Projects}
  \\begin{itemize}[leftmargin=0.15in, label={}]
    ${selectedProjects.map(p => {
      if (p.generated) {
        return `
    \\item
      \\begin{tabularx}{\\textwidth}{X r}
        \\textbf{${p.name}} $|$ \\emph{${p.tech_stack.join(', ')}} & \\\\
      \\end{tabularx}
      \\vspace{-2pt}
      \\begin{itemize}
        \\item ${p.description}
      \\end{itemize}
        `;
      }
      const orig = PROFILE.projects.find(x => x.name === p.name);
      if (!orig) return '';
      return `
    \\item
      \\begin{tabularx}{\\textwidth}{X r}
        \\textbf{${orig.name}} $|$ \\emph{${orig.tech.join(', ')}} & \\\\
      \\end{tabularx}
      \\vspace{-2pt}
      \\begin{itemize}
        ${orig.bullets.map(b => `\\item ${b}`).join('\\n        ')}
      \\end{itemize}
      `;
    }).join('')}
  \\end{itemize}

%-----------SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     ${Object.entries(PROFILE.skills).map(([cat, skills]) => `\\textbf{${cat}}{: ${skills.join(', ')}}`).join(' \\\\ ')}
    }}
 \\end{itemize}
 
\\end{document}
`.trim();

  await new Promise(r => setTimeout(r, 1500));

  return {
    _offline: true,
    ats_score: atsScore,
    ats_feedback: "Locally generated fallback match analysis.",
    jd_analysis: {
      target_role: "Software / AI Engineer",
      required_technologies: reqTech,
      preferred_technologies: ["Git", "Linux"],
      key_responsibilities: ["Develop and maintain scalable software applications", "Collaborate with cross-functional teams"],
      missing_skills: []
    },
    selected_projects: selectedProjects,
    replaced_project: replacedProject,
    project_scores: projectScores,
    skills_emphasized: reqTech,
    certifications_used: PROFILE.certifications.slice(0, 3).map(c => c.name),
    latex: latex
  };
}

// ─── Main Generate Function ──────────────────────────────────
async function generateResume(jd, onStatusUpdate) {
  if (!jd || jd.trim().length < 50) {
    throw new Error('Please paste a complete Job Description (at least 50 characters).');
  }
  if (!hasApiKey() && !hasGroqApiKey()) {
    throw new Error('API_KEY_MISSING');
  }

  const prompt = buildResumePrompt(jd);
  let rawResponse = null;

  if (hasApiKey()) {
    try { rawResponse = await callGemini(prompt, onStatusUpdate); }
    catch (err) { console.warn('Gemini failed:', err.message); }
  }

  if (!rawResponse && hasGroqApiKey()) {
    try {
      if (onStatusUpdate) onStatusUpdate('Gemini unavailable — switching to Groq...');
      rawResponse = await callGroq(prompt, onStatusUpdate);
    } catch (err) { console.warn('Groq failed:', err.message); }
  }

  if (!rawResponse) return await generateOfflineResume(jd);

  try {
    const result = parseGeminiResponse(rawResponse);
    if (!result.latex || !result.selected_projects || !result.jd_analysis || !result.project_scores) {
      return await generateOfflineResume(jd);
    }
    return result;
  } catch (err) {
    console.warn('Parsing failed, using offline generator:', err.message);
    return await generateOfflineResume(jd);
  }
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
  const modalGroqInput = document.getElementById('modal-groq-key');
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
  if (!hasApiKey() && !hasGroqApiKey()) {
    showModal();
  }

  // ── Modal Controls ──
  function showModal() {
    modalOverlay.classList.add('active');
    modalInput.value = getApiKey();
    modalGroqInput.value = getGroqApiKey();
    modalError.classList.remove('visible');
    setTimeout(() => modalInput.focus(), 300);
  }

  function hideModal() {
    modalOverlay.classList.remove('active');
  }

  settingsBtn.addEventListener('click', showModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay && (hasApiKey() || hasGroqApiKey())) {
      hideModal();
    }
  });

  modalSaveBtn.addEventListener('click', () => {
    const geminiKey = modalInput.value.trim();
    const groqKey = modalGroqInput.value.trim();
    
    if ((!geminiKey || geminiKey.length < 10) && (!groqKey || groqKey.length < 10)) {
      modalError.textContent = 'Please enter at least one valid API key (Gemini or Groq).';
      modalError.classList.add('visible');
      return;
    }
    
    if (geminiKey) setApiKey(geminiKey);
    if (groqKey) setGroqApiKey(groqKey);
    
    modalError.classList.remove('visible');
    hideModal();
    showToast('✅', 'API keys saved successfully');
  });

  modalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') modalSaveBtn.click();
  });
  modalGroqInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') modalSaveBtn.click();
  });

  // ── Generate Resume ──
  generateBtn.addEventListener('click', async () => {
    const jd = jdInput.value.trim();

    if (!jd || jd.length < 50) {
      showToast('⚠️', 'Please paste a complete Job Description');
      return;
    }

    if (!hasApiKey() && !hasGroqApiKey()) {
      showModal();
      return;
    }

    // Set loading state
    generateBtn.classList.add('loading');
    generateBtn.disabled = true;
    emptyState.style.display = 'none';
    
    const btnText = generateBtn.querySelector('.btn-text');
    const originalBtnText = btnText ? btnText.textContent : 'Execute Mission';

    // Show shimmer loading
    atsCard.classList.remove('visible');
    jdAnalysisCard.classList.remove('visible');
    projectSelectionCard.classList.remove('visible');
    latexCard.classList.remove('visible');
    projectCard.classList.remove('visible');

    try {
      const result = await generateResume(jd, (status) => {
        if (btnText) btnText.textContent = status;
      });

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

      if (result._offline) {
        showToast('📡', 'Generated locally via Offline Fallback');
      } else {
        showToast('🎉', 'Resume generated successfully!');
      }

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
      if (btnText) btnText.textContent = originalBtnText;
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
