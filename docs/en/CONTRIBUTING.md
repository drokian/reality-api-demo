# CONTRIBUTING

Thanks for your interest in Reality API Demo.
This repository is the public read-only showcase of the project.

## How to Contribute

- Open an issue for bugs, typos, broken links, or clarity problems.
- Propose docs improvements through pull requests.
- Keep changes focused, minimal, and reviewable.

## Contribution Areas

- Documentation quality and readability
- UX polish for public pages
- Accessibility improvements
- Internationalization consistency (EN/TR)
- Build and deployment reliability

## Non-Goals in Demo Repo

- Adding write-enabled features
- Adding admin panels
- Adding runtime database dependencies
- Adding private or sensitive data

## Content Rules

- Respect bilingual structure: EN and TR should be updated together.
- Keep scientific tone careful and falsifiable.
- Clearly distinguish observation, hypothesis, and interpretation.
- Avoid overclaiming conclusions.

## Technical Rules

- Keep static-export compatibility (`output: "export"`).
- Preserve GitHub Pages deploy assumptions (`basePath`, `assetPrefix`).
- Validate local build before PR.

## Local Validation

```bash
npm install
npm run build
npm run start
```

## Pull Request Checklist

- [ ] Scope is limited and clear
- [ ] EN/TR content parity is preserved
- [ ] `npm run build` passes
- [ ] Public links work
- [ ] No private data introduced
