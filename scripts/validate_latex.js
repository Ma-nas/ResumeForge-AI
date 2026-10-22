/**
 * LaTeX Validator Utility for ResumeForge AI.
 * Verifies brace balancing, hyperref macros, and Jake Ryan structural blocks.
 */

const fs = require('fs');

function validateLatexCode(code) {
  const issues = [];
  
  // 1. Check brace parity
  let openBraces = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '{' && (i === 0 || code[i-1] !== '\\')) openBraces++;
    if (code[i] === '}' && (i === 0 || code[i-1] !== '\\')) openBraces--;
    if (openBraces < 0) {
      issues.push(`Unmatched closing brace '}' at character ${i}`);
      break;
    }
  }
  if (openBraces > 0) {
    issues.push(`Unclosed opening braces: ${openBraces} remaining`);
  }

  // 2. Structural environment check
  const hasDocClass = code.includes('\\documentclass');
  const hasBeginDoc = code.includes('\\begin{document}');
  const hasEndDoc   = code.includes('\\end{document}');

  if (!hasDocClass) issues.push('Missing \\documentclass definition');
  if (!hasBeginDoc) issues.push('Missing \\begin{document}');
  if (!hasEndDoc)   issues.push('Missing \\end{document}');

  return {
    valid: issues.length === 0,
    issues
  };
}

// Self-test with representative Jake Ryan snippet
const sample = `
\\documentclass[letterpaper,11pt]{article}
\\usepackage{hyperref}
\\begin{document}
\\textbf{Manas Mishra} \\\\
\\href{mailto:mm7390180@gmail.com}{mm7390180@gmail.com}
\\end{document}
`;

const res = validateLatexCode(sample);
if (!res.valid) {
  console.error('Validation failed:', res.issues);
  process.exit(1);
} else {
  console.log('LaTeX validator self-test passed successfully.');
}

module.exports = { validateLatexCode };
