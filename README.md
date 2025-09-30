# nexus-digital

Проєкт створено для початкової структури сайту.

Quick checklist:
- Run Lighthouse (Performance, Accessibility, SEO).
- Ensure images optimized (WebP/AVIF), use srcset/picture.
- Add `og:image` (1200x630) and structured data.
- Preconnect to fonts, preload critical assets.
- Test on real devices and browsers.
- Deploy to GitHub Pages or static host; ensure assets pushed to the deployed branch.

Structure:
- index.html — головна
- assets/css/style.css — стилі
- assets/js/main.js — скрипти
- assets/images/* — медіа

How to run locally:
1. Open folder in VS Code
2. Serve via Live Server or simple static server (e.g., `npx http-server`)
3. Run Lighthouse and address issues.

Adding the portrait photos and updated about teaser
1. Place the image files at:
   - c:\Users\sdank\Desktop\nexus-digital\assets\images\foto-by-oleksandr-1.webp
   - c:\Users\sdank\Desktop\nexus-digital\assets\images\foto-by-oleksandr-1.png (fallback optional)
   - c:\Users\sdank\Desktop\nexus-digital\assets\images\foto-by-daniel-2.webp
   - c:\Users\sdank\Desktop\nexus-digital\assets\images\foto-by-daniel-2.png (fallback optional)

Images are 1080×1600px (portrait). Use WebP/AVIF for best perf, keep PNG fallback if needed.

2. Replace (or update) your about teaser section in index.html with this HTML snippet (uses .photo-frame):

```html
<!-- filepath: c:\Users\sdank\Desktop\nexus-digital\index.html -->
<section class="section about-teaser light-section" data-aos="fade-up">
  <div class="container about-grid">

    <!-- Left portrait -->
    <div class="about-grid__media">
      <div class="photo-frame" aria-hidden="true">
        <picture>
          <source srcset="assets/images/foto-by-oleksandr-1.avif" type="image/avif">
          <source srcset="assets/images/foto-by-oleksandr-1.webp" type="image/webp">
          <img src="assets/images/foto-by-oleksandr-1.png" alt="Фото Олександра — команда Nexus Studio" loading="lazy">
        </picture>
      </div>
    </div>

    <!-- Middle portrait -->
    <div class="about-grid__media">
      <div class="photo-frame" aria-hidden="true">
        <picture>
          <source srcset="assets/images/foto-by-daniel-2.avif" type="image/avif">
          <source srcset="assets/images/foto-by-daniel-2.webp" type="image/webp">
          <img src="assets/images/foto-by-daniel-2.png" alt="Фото Даніеля — команда Nexus Studio" loading="lazy">
        </picture>
      </div>
    </div>

    <!-- Content (right column on desktop) -->
    <div class="about-grid__content">
      <h2>Працюйте напряму з партнерами</h2>
      <p>На відміну від великих агенцій, кожен проєкт ведуть засновники. Данило відповідає за бізнес-стратегію, а Олександр — за технології та інновації.</p>
      <a class="btn btn-secondary" href="about.html">Дізнатися більше</a>
    </div>

  </div>
</section>```

3. After placing images: clear cache (Ctrl+F5) and test on desktop/mobile. If you prefer different ordering (e.g., image + content + image) adjust order in markup or use CSS order.