# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-07-01

### Added
- **Recruiter Decision Pipeline**: Added JD analysis (target role, required vs preferred tech, key responsibilities, and missing skills) to the prompt and UI.
- **Dynamic Project Selection & Scoring**: Scores all 6 projects dynamically based on Technology, Keywords, Domain, and Business Impact. Selects the top 2 and replaces the weakest with a generated project.
- **In-Resume AI Project Generation**: The generated missing-gap project is now generated directly inside the LaTeX payload rather than just appearing in the sidebar.
- **Interactive Decision Panels**: Added **JD Intelligence** and **Project Selection Optimization** visualization cards in the UI control panel.
- **Hyperlinked Contact Header**: Clickable links for Phone (`tel:`), Email (`mailto:`), LinkedIn, and GitHub using `fontawesome5` and `hyperref` LaTeX packages.
- **Clickable Project Links**: Made project URLs compilable as active links in LaTeX.

### Changed
- Refactored `app.js` with a deterministic, structured system prompt for Google Gemini to prevent advisory output.
- Updated dashboard headers and layout for Mission Control v3.0.
- Stored phone number directly in PROFILE for ATS header completeness.

## [2.0.0] - 2026-06-30

### Added
- Cyberpunk / Sci-Fi Gaming HUD theme with neon colors, scanlines, and CSS clip paths.
- Interactive settings menu for Gemini API Key management via LocalStorage.
- Reliable fallback mechanism testing up to 7 Gemini models in sequence with exponential backoff.
- Local/Offline keyword matching fallback resume generator.
- Sound notifications and toast popups for mission generation statuses.

## [1.0.0] - 2026-06-29

### Added
- Initial project structure: `index.html` + `index.css` + `app.js`.
- Basic client-side integration with Google Gemini API.
- Jake Ryan LaTeX template generator.
