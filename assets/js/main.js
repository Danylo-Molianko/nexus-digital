document.addEventListener('DOMContentLoaded', function(){

	// --- existing behavior: menu-toggle (legacy) ---
	const toggle = document.querySelector('.menu-toggle');
	const siteNav = document.querySelector('.site-nav');
	if(toggle && siteNav){
		toggle.addEventListener('click', () => {
			siteNav.classList.toggle('open');
			toggle.classList.toggle('open');
		});
	}

	// Burger menu toggle (mobile) — accessible
	const burger = document.querySelector('.burger-menu');
	const mobileNav = document.querySelector('.site-nav');
	const header = document.querySelector('.header');

	if (burger && mobileNav) {
		burger.setAttribute('aria-expanded', 'false');
		burger.addEventListener('click', () => {
			mobileNav.classList.toggle('mobile');
			mobileNav.classList.toggle('open');
			burger.classList.toggle('is-open');
			// sync aria
			const expanded = burger.getAttribute('aria-expanded') === 'true';
			burger.setAttribute('aria-expanded', String(!expanded));
			// prevent body scroll when menu open
			document.body.classList.toggle('no-scroll');
		});
	}

	// Header elevation on scroll
	if (header) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 8) header.classList.add('header--elevated');
			else header.classList.remove('header--elevated');
		});
	}

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				const id = href.slice(1);
				const el = document.getElementById(id);
				if(el) el.scrollIntoView({behavior:'smooth'});
				// close mobile nav after click
				if (nav && nav.classList.contains('is-open')) {
					nav.classList.remove('is-open');
					if (burger) burger.classList.remove('is-open');
					document.body.classList.remove('no-scroll');
				}
			}
		});
	});

		// Make service cards clickable and keyboard-accessible (uses data-href)
		document.querySelectorAll('.service-card[data-href]').forEach(card => {
			// ensure keyboard focus
			if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
			card.addEventListener('click', (e) => {
				// ignore clicks on inner interactive controls (links, buttons)
				if (e.target.closest('a') || e.target.closest('button')) return;
				const href = card.dataset.href;
				if (href) window.location.href = href;
			});
			card.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					const href = card.dataset.href;
					if (href) window.location.href = href;
				}
			});
		});

	// Accordion behavior (services)
	document.querySelectorAll('.accordion__header').forEach(headerBtn => {
		headerBtn.addEventListener('click', () => {
			const item = headerBtn.closest('.accordion__item');
			const content = headerBtn.nextElementSibling;
			const isOpen = item.classList.contains('open');

			if (isOpen) {
				item.classList.remove('open');
				headerBtn.setAttribute('aria-expanded', 'false');
				content.style.maxHeight = null;
			} else {
				const parent = headerBtn.closest('.accordion');
				if (parent) {
					parent.querySelectorAll('.accordion__item.open').forEach(openItem => {
						openItem.classList.remove('open');
						const openContent = openItem.querySelector('.accordion__content');
						if (openContent) openContent.style.maxHeight = null;
						const openHeader = openItem.querySelector('.accordion__header');
						if (openHeader) openHeader.setAttribute('aria-expanded', 'false');
					});
				}
				item.classList.add('open');
				headerBtn.setAttribute('aria-expanded', 'true');
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		});
		if (!headerBtn.hasAttribute('aria-expanded')) headerBtn.setAttribute('aria-expanded', 'false');
	});

	// ensure opened items restore proper maxHeight on load
	document.querySelectorAll('.accordion__item.open .accordion__content').forEach(c => {
		c.style.maxHeight = c.scrollHeight + 'px';
	});


	// -----------------------
	// Asset resolution helpers
	// -----------------------
	async function existsHead(url) {
		try {
			const res = await fetch(url, { method: 'HEAD' });
			return res.ok;
		} catch (e) {
			// network/file protocol may disallow HEAD - try GET as last resort
			try {
				const r2 = await fetch(url, { method: 'GET' });
				return r2.ok;
			} catch (_) {
				return false;
			}
		}
	}

	async function findFirstAvailable(candidates) {
		for (const p of candidates) {
			if (!p) continue;
			try {
				const ok = await existsHead(p);
				if (ok) return p;
			} catch (e) {
				// ignore and continue
			}
		}
		return null;
	}

	// Create simple SVG placeholder data URL (small neutral box with label)
	function svgPlaceholder(label, w = 600, h = 360) {
		const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
			<rect width='100%' height='100%' fill='#111'/>
			<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#777' font-family='Arial, Helvetica, sans-serif' font-size='18'>${label}</text>
		</svg>`;
		return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
	}

	// Resolve elements with data-srcs (images, etc.)
	async function resolveDataSrcs() {
		const els = Array.from(document.querySelectorAll('[data-srcs]'));
		const missing = [];
		await Promise.all(els.map(async el => {
			const list = (el.dataset.srcs || '').split(',').map(s => s.trim()).filter(Boolean);
			const found = await findFirstAvailable(list);
			if (found) {
				// set src depending on element type
				if (el.tagName.toLowerCase() === 'img') {
					el.src = found;
				} else {
					el.setAttribute('src', found);
				}
			} else {
				// set svg placeholder
				if (el.tagName.toLowerCase() === 'img') {
					el.src = svgPlaceholder('Image not found');
				} else {
					// fallback: if background image expected, ignore
					missing.push(el);
				}
			}
		}));
		return missing;
	}

	// Resolve videos: check data-sources and set first available <source>
	async function resolveVideos() {
		const videos = Array.from(document.querySelectorAll('video[data-sources]'));
		const missing = [];
		await Promise.all(videos.map(async video => {
			const list = (video.dataset.sources || video.dataset.sources).split(',').map(s => s.trim()).filter(Boolean);
			const found = await findFirstAvailable(list);
			// remove any existing sources
			video.querySelectorAll('source').forEach(s => s.remove());
			if (found) {
				const source = document.createElement('source');
				source.src = found;
				source.type = 'video/mp4';
				video.appendChild(source);
				// try to load
				try { video.load(); } catch(e){}
			} else {
				// hide video element and leave poster if present
				video.style.display = 'none';
				missing.push(video);
			}
		}));
		return missing;
	}

	// Resolve footer background using data-srcs on footer element
	async function resolveFooterBg() {
		const footer = document.querySelector('.footer[data-srcs]');
		if (!footer) return false;
		const list = (footer.dataset.srcs || '').split(',').map(s => s.trim()).filter(Boolean);
		const found = await findFirstAvailable(list);
		if (found) {
			footer.style.backgroundImage = `url('${found}')`;
			return true;
		}
		// leave fallback background-color
		return false;
	}

	// Run resolution and show diagnostics banner if issues remain
	(async function runAssetResolution(){
		const missingImgs = await resolveDataSrcs();
		const missingVids = await resolveVideos();
		const footerOk = await resolveFooterBg();

		const missingPaths = [];
		// build list of known missing candidates (for quick debug show the first attempted candidates)
		document.querySelectorAll('[data-srcs]').forEach(el => {
			// if image still points to svg placeholder, mark its candidates as missing
			if (el.tagName.toLowerCase() === 'img' && el.src && el.src.startsWith('data:image/svg+xml')) {
				missingPaths.push(el.dataset.srcs || '(no candidates)');
			}
		});
		document.querySelectorAll('video[data-sources]').forEach(v => {
			if (v.style.display === 'none') missingPaths.push(v.dataset.sources || '(no candidates)');
		});
		if (!footerOk) {
			const f = document.querySelector('.footer[data-srcs]');
			if (f) missingPaths.push(f.dataset.srcs || '(no candidates)');
		}

		if (missingPaths.length) {
			// create unobtrusive banner
			const banner = document.createElement('div');
			banner.className = 'asset-warning';
			banner.innerHTML = '<strong>Warning:</strong> missing media candidates (see console) <ul>' +
				missingPaths.map(p => `<li>${p}</li>`).join('') + '</ul>';
			document.body.insertBefore(banner, document.body.firstChild);
			console.warn('Missing media candidates:', missingPaths);
		} else {
			console.log('All media candidates resolved.');
		}
	})();

	// Hero video error handling: hide video and show fallback if sources fail
	(function handleHeroVideoErrors(){
	  const wrapper = document.querySelector('.hero-video');
	  if (!wrapper) return;
	  const vid = wrapper.querySelector('video.hero__video');

	  if (!vid) return;

	  let errored = false;
	  // if video can't play / loadedmetadata not fired after timeout -> mark failed
	  const failTimeout = setTimeout(() => {
	    if (vid.readyState < 2 && !errored) {
	      errored = true;
	      wrapper.classList.add('video-failed');
	      const note = document.createElement('div');
	      note.className = 'hero-fallback-note show';
	      note.textContent = 'Фонове відео тимчасово недоступне — показано fallback.';
	      wrapper.appendChild(note);
	      console.warn('Hero video appears not to be loading (timeout). Applied fallback.');
	    }
	  }, 3500); // 3.5s to attempt loading

	  // on error events (network decode etc)
	  vid.addEventListener('error', (e) => {
	    if (errored) return;
	    errored = true;
	    clearTimeout(failTimeout);
	    wrapper.classList.add('video-failed');
	    const note = document.createElement('div');
	    note.className = 'hero-fallback-note show';
	    note.textContent = 'Фонове відео недоступне — показано fallback.';
	    wrapper.appendChild(note);
	    console.warn('Hero video error event:', e);
	  });

	  // if metadata loaded successfully, cancel fallback timeout
	  vid.addEventListener('loadedmetadata', () => {
	    clearTimeout(failTimeout);
	    // If video has zero width/height or still nothing, kept handled by timeout
	    if (vid.videoWidth === 0 || vid.videoHeight === 0) {
	      // treat as failure
	      wrapper.classList.add('video-failed');
	      console.warn('Hero video loaded but has zero dimensions — applied fallback.');
	    } else {
	      // successful load; ensure wrapper not marked failed
	      wrapper.classList.remove('video-failed');
	    }
	  });
	})();

	// --- POLISH: reveal on scroll + button ripple ---
	(function uiPolish(){
	  // Reveal on scroll
	  const revealEls = Array.from(document.querySelectorAll('.reveal'));
	  if (revealEls.length) {
	    if ('IntersectionObserver' in window) {
	      const io = new IntersectionObserver((entries, obs) => {
	        entries.forEach(en => {
	          if (en.isIntersecting) {
	            const el = en.target;
	            // optional delay via data attribute
	            const delay = parseFloat(el.dataset.revealDelay) || 0;
	            setTimeout(()=> el.classList.add('is-visible'), Math.round(delay * 1000));
	            obs.unobserve(el);
	          }
	        });
	      }, { threshold: 0.12 });
	      revealEls.forEach(e => io.observe(e));
	    } else {
	      revealEls.forEach(e => e.classList.add('is-visible'));
	    }
	  }

	  // Ripple on .btn-primary
	  document.addEventListener('click', (ev) => {
	    const btn = ev.target.closest('.btn-primary');
	    if (!btn) return;
	    const rect = btn.getBoundingClientRect();
	    const ripple = document.createElement('span');
	    ripple.className = 'ripple';
	    const size = Math.max(rect.width, rect.height);
	    ripple.style.width = ripple.style.height = size + 'px';
	    ripple.style.left = (ev.clientX - rect.left - size / 2) + 'px';
	    ripple.style.top = (ev.clientY - rect.top - size / 2) + 'px';
	    btn.appendChild(ripple);
	    setTimeout(() => ripple.remove(), 650);
	  }, { passive: true });
	})();

	// end DOMContentLoaded
});

document.addEventListener('DOMContentLoaded', function(){
  // Resolve logo: try candidate filenames and set first reachable
  (async function resolveLogo(){
    const img = document.getElementById('site-logo');
    const fallback = document.getElementById('logo-fallback');
    if (!img) return;

    const candidates = [
      'assets/images/logo-for-site.png',
      'assets/images/logo-for-site.webp',
      'assets/images/Logo-for-site.png',
      'assets/images/logo.png',
      'assets/images/logo.webp'
    ];

    async function exists(url){
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return res.ok;
      } catch (e) {
        // fallback: try GET
        try {
          const r2 = await fetch(url, { method: 'GET' });
          return r2.ok;
        } catch (_) {
          return false;
        }
      }
    }

    for (const path of candidates){
      if (!path) continue;
      // eslint-disable-next-line no-await-in-loop
      const ok = await exists(path);
      if (ok) {
        img.src = path;
        // ensure fallback hidden
        fallback.classList.remove('show');
        return;
      }
    }

    // nothing found: hide broken image and show text fallback
    img.style.display = 'none';
    fallback.classList.add('show');
    console.warn('Logo resolution: no candidate found, showing text fallback.');
  })();

  // end DOMContentLoaded
});

// INIT: AOS (if included) and simple lazy loader
document.addEventListener('DOMContentLoaded', function () {
  // AOS init if available
	if (window.AOS) {
		AOS.init({ duration: 1200, once: true });
	}

  // Simple IntersectionObserver lazy loader for images with data-src / data-srcset
  const ioSupported = 'IntersectionObserver' in window;
  const lazyImgs = document.querySelectorAll('img[data-src], img[data-srcset]');
  if (ioSupported && lazyImgs.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const img = en.target;
          if (img.dataset.src) img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });
    lazyImgs.forEach(i => io.observe(i));
  } else {
    // fallback: eager load
    lazyImgs.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });
  }

  // Basic global error logging for media
  window.addEventListener('error', (e) => {
    // keep brief logging (could post to server)
    console.warn('Resource error:', e.target && e.target.src ? e.target.src : e.message);
  }, true);
});

// --- Nexus: Custom cursor and Hero "Genesis" typing animation ---
document.addEventListener('DOMContentLoaded', function(){
	// Custom cursor
	(function initCursor(){
		if (document.body.classList.contains('nexus-cursor-enabled')) return;
		const cursor = document.createElement('div');
		cursor.className = 'nexus-cursor';
		cursor.setAttribute('aria-hidden', 'true');
		document.body.appendChild(cursor);
		document.body.classList.add('nexus-cursor-enabled');

		let cx = window.innerWidth/2, cy = window.innerHeight/2;
		let tx = cx, ty = cy; // tracked target
		const ease = 0.18;

		window.addEventListener('mousemove', (e)=>{
			tx = e.clientX; ty = e.clientY;
		}, {passive:true});

		// hover targets (links, buttons)
		function addHoverListeners(){
			const interact = document.querySelectorAll('a, button, .btn');
			interact.forEach(el=>{
				el.addEventListener('mouseenter', ()=> cursor.classList.add('nexus-cursor--hover'));
				el.addEventListener('mouseleave', ()=> cursor.classList.remove('nexus-cursor--hover'));
			});
		}
		addHoverListeners();

		function loop(){
			cx += (tx - cx) * ease;
			cy += (ty - cy) * ease;
			cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
			requestAnimationFrame(loop);
		}
		requestAnimationFrame(loop);
	})();

	// Hero typing "Genesis" effect on index only
	(function heroGenesis(){
		if (!document.body.classList.contains('home-page')) return;
		const header = document.querySelector('.header.hero-full');
		if (!header) return;
		header.classList.add('hero-animated');
		const titleEl = header.querySelector('.hero-title');
		const subEl = header.querySelector('.hero-sub');
		const cta = header.querySelector('.hero-cta');
		if (!titleEl) return;

		const text = titleEl.dataset.text || titleEl.textContent.trim();
		titleEl.textContent = '';
		titleEl.classList.add('typewriter');

		// typewriter
		let i = 0;
		const speed = 42; // ms per char
		function typeChar(){
			if (i < text.length) {
				titleEl.textContent += text.charAt(i++);
				setTimeout(typeChar, speed + Math.random()*40);
			} else {
				titleEl.classList.add('is-done');
				// reveal subtitle and CTA
				setTimeout(()=>{ if (subEl) subEl.classList.add('show'); }, 320);
				setTimeout(()=>{ if (cta) cta.classList.add('show'); }, 540);
			}
		}
		// start after slight delay
		setTimeout(typeChar, 260);
	})();
});
