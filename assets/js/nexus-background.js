// Lightweight particle/network background for "Digital Nexus"
// Adds a canvas behind content and animates nodes that connect when near cursor
;(function(){
  const cfg = {
    nodeCount: 80,        // baseline node count (scaled by viewport)
    maxNodeSize: 2.4,
    minNodeSize: 0.8,
    linkDistance: 140,    // max distance to draw a link
    linkWidth: 0.7,
    color: '255,255,255', // white-ish (we'll use rgba)
    nodeAlpha: 0.08,
    linkAlpha: 0.10,
    speed: 0.2
  };

  let canvas, ctx, width, height, nodes = [], mouse = { x: -9999, y: -9999 };

  function createCanvas(){
    canvas = document.createElement('canvas');
    canvas.id = 'nexus-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.9';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e)=>{ mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', ()=>{ mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('touchstart', (e)=>{ if (e.touches && e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; } }, {passive:true});
    window.addEventListener('touchmove', (e)=>{ if (e.touches && e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; } }, {passive:true});
  }

  function resize(){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    // determine node count by area (keep density stable)
    const areaFactor = (width * height) / (1366 * 768);
    const target = Math.round(cfg.nodeCount * Math.min(Math.max(areaFactor, 0.6), 2.2));
    nodes = [];
    for (let i=0;i<target;i++) nodes.push(createNode());
  }

  function createNode(){
    return {
      x: Math.random()*width,
      y: Math.random()*height,
      vx: (Math.random()-0.5) * cfg.speed,
      vy: (Math.random()-0.5) * cfg.speed,
      r: cfg.minNodeSize + Math.random()*(cfg.maxNodeSize-cfg.minNodeSize)
    };
  }

  function step(){
    ctx.clearRect(0,0,width,height);
    // draw links first for subtle depth
    for (let i=0;i<nodes.length;i++){
      const a = nodes[i];
      // move
      a.x += a.vx; a.y += a.vy;
      if (a.x < -20) a.x = width+20; if (a.x > width+20) a.x = -20;
      if (a.y < -20) a.y = height+20; if (a.y > height+20) a.y = -20;
    }

    // draw connections
    for (let i=0;i<nodes.length;i++){
      const a = nodes[i];
      // link to other nodes
      for (let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < cfg.linkDistance*cfg.linkDistance){
          const dist = Math.sqrt(d2);
          const alpha = (1 - (dist / cfg.linkDistance)) * cfg.linkAlpha;
          ctx.strokeStyle = `rgba(${cfg.color},${alpha})`;
          ctx.lineWidth = cfg.linkWidth * (1 - dist / cfg.linkDistance);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // link to mouse when close
      const mdx = a.x - mouse.x; const mdy = a.y - mouse.y; const md2 = mdx*mdx + mdy*mdy;
      if (mouse.x > -9000 && md2 < (cfg.linkDistance*1.1)*(cfg.linkDistance*1.1)){
        const mdist = Math.sqrt(md2);
        const alpha = (1 - (mdist / (cfg.linkDistance*1.1))) * (cfg.linkAlpha*1.3);
        ctx.strokeStyle = `rgba(${cfg.color},${alpha})`;
        ctx.lineWidth = cfg.linkWidth * 1.2 * (1 - mdist / (cfg.linkDistance*1.1));
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        // gentle repulsion effect
        const repulse = (1 - (mdist / (cfg.linkDistance*1.1))) * 0.4;
        a.vx += (mdx / mdist) * repulse * 0.02;
        a.vy += (mdy / mdist) * repulse * 0.02;
      }
    }

    // draw nodes on top of links
    for (let i=0;i<nodes.length;i++){
      const n = nodes[i];
      ctx.fillStyle = `rgba(${cfg.color},${cfg.nodeAlpha})`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fill();
    }

    // slight friction to velocities
    for (let i=0;i<nodes.length;i++){ nodes[i].vx *= 0.995; nodes[i].vy *= 0.995; }

    requestAnimationFrame(step);
  }

  // Public init (self-invoking on DOM ready)
  function init(){
    // guard: only run once
    if (document.getElementById('nexus-bg-canvas')) return;
    createCanvas();
    requestAnimationFrame(step);
  }

  // init as soon as DOM available
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  // expose small API
  window.NexusBackground = { init };
})();
