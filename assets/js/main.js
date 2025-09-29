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

	// Burger menu toggle (mobile)
	const burger = document.querySelector('.burger-menu');
	const nav = document.querySelector('.nav');
	const header = document.querySelector('.header');

	if (burger && nav) {
		burger.addEventListener('click', () => {
			burger.classList.toggle('is-open');
			nav.classList.toggle('is-open');
			document.body.classList.toggle('no-scroll'); // prevent body scroll when menu open
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

	// end DOMContentLoaded
});
