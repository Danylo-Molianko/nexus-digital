import { promises as fs } from 'fs';
import path from 'path';

const root = path.resolve('.');
const targets = [
  'src/components/layout/AuroraBackground.jsx',
  'src/components/layout/RealityBackground.jsx',
  'src/components/layout/CursorGlow.jsx',
  'src/components/DigitalCanvas.jsx',
  'src/components/Navbar.jsx',
  'src/pages/Home.jsx',
  'src/pages/Services.jsx',
  'src/pages/About.jsx',
  'src/pages/Contact.jsx',
];

async function removeIfExists(p) {
  const abs = path.join(root, p);
  try {
    await fs.access(abs);
  } catch {
    console.log(`[skip] ${p} (not found)`);
    return;
  }
  try {
    await fs.rm(abs, { force: true });
    console.log(`[removed] ${p}`);
  } catch (err) {
    console.error(`[error] ${p}:`, err?.message || err);
  }
}

(async () => {
  for (const t of targets) {
    await removeIfExists(t);
  }
})();
