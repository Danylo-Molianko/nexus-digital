Video assets

Placement
- Put production video files in this folder to serve them as static assets:
  - MP4 (H.264) for broad support: /videos/<name>.mp4
  - Optional WebM for size/quality: /videos/<name>.webm
  - Poster image for fast first paint: /videos/<name>-poster.jpg (or .png/webp)

Usage
- Reference by absolute path from the public root:
  - <source src="/videos/hero.mp4" type="video/mp4" />
  - <img src="/videos/hero-poster.jpg" alt="" />
- Or import via Vite from src/assets if you need hashing and tree-shaking:
  - Place under src/assets/videos/
  - import heroMp4 from '@/assets/videos/hero.mp4'

Best practices
- Keep under ~10–20MB per video; compress with HandBrake or ffmpeg
- Provide both MP4 and WebM when possible
- Always include a poster image
- Use preload="metadata" for non-critical videos (saves bandwidth)
- For hero loops: autoPlay, muted, loop, playsInline, and no controls
- Consider a CDN for larger media or high-traffic pages
