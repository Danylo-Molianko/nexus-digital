# Nexus Digital — Cleanup Report (Phase 1)

This document records the results of the first-pass repository audit and proposes a safe-delete plan. Files are grouped by status.

## Summary
- Focus: remove dead/unreferenced UI and legacy pages; keep only the current routed pages and layout.
- Outcome: Identified 9 redundant files (old backgrounds, old navbar, legacy page variants, 3D canvas).
- Risk: Low — none of these files are imported by the app routes or layouts.

## Candidates for deletion (unreferenced)
1. src/components/layout/AuroraBackground.jsx — legacy animated background (commented-out and not imported)
2. src/components/layout/RealityBackground.jsx — subtle gradient layers (commented-out and not imported)
3. src/components/layout/CursorGlow.jsx — global cursor glow (removed from layout, not imported)
4. src/components/DigitalCanvas.jsx — 3D scene using @react-three/* (3D deps removed from package.json)
5. src/components/Navbar.jsx — old navigation, superseded by Header.jsx
6. src/pages/Home.jsx — legacy home page, superseded by HomePage.jsx
7. src/pages/Services.jsx — legacy services page, superseded by ServicesPage.jsx
8. src/pages/About.jsx — legacy about page, superseded by AboutPage.jsx
9. src/pages/Contact.jsx — legacy contact page, superseded by ContactPage.jsx

Verification:
- App.jsx routes reference HomePage, ServicesPage, ProjectsPage, AboutPage, ContactPage only.
- MainLayout.jsx references Header/Footer only; background components are commented out.
- Grep search shows no active imports of the above candidates.

## Actions proposed
- Physically delete the 9 files above to reduce bundle scanning, editor noise, and potential confusion.
- Optional: remove the unused `.cursor-glow` CSS block from `src/index.css` in a later phase.

## Additional improvements (Phase 1 extras)
- Added dev dependency "chokidar@^3.6.0" to support `smart-server.js` used by `start-guaranteed.*` scripts on Windows.

## Next steps
- Phase 2: media audit (convert large images to AVIF/WebP, introduce <picture> with sizes for hero assets).
- Phase 3: LCP reduction: consider pre-rendering home (SSG/SSR), inline critical CSS, and preloading critical fonts/assets.

