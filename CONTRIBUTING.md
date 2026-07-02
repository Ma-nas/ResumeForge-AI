# Contributing to ResumeForge AI

Thank you for your interest in contributing to ResumeForge AI! We welcome contributions from developers, recruiters, designers, and AI enthusiasts to make this the ultimate resume generation assistant.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs
- Search existing issues to verify the bug has not already been reported.
- If it hasn't, open a new issue using our **Bug Report Template**.
- Include clear steps to reproduce the bug, expected vs actual behavior, and console logs/screenshots.

### Suggesting Enhancements
- Open an issue using our **Feature Request Template**.
- Clearly explain the use case, why this feature would be valuable, and how it aligns with the project goals.

### Submitting Pull Requests
1. **Fork** the repository and clone it locally.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
3. Implement your changes following our coding standards.
4. Test your changes in a modern browser by opening `index.html`.
5. Commit your changes using descriptive commit messages following the Conventional Commits specification:
   - `feat: add PDF preview panel`
   - `fix: correct LaTeX escape character for ampersand`
6. Push to your branch and open a Pull Request against the `main` branch.

## Coding Standards

- **Zero External Dependencies**: Keep the application build-free and lightweight. Use only vanilla HTML, CSS, and JavaScript.
- **HUD Theme Style**: All CSS changes must strictly follow the cyberpunk gaming HUD theme and variables defined in `index.css`.
- **ATS and LaTeX Best Practices**: Any adjustments to LaTeX generation must yield fully compilable and standard code using the Jake Ryan template format.

## Get in Touch

If you have any questions, feel free to open a discussion issue on GitHub.
