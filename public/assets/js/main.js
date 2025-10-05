'use strict';

import nexusGlyphs from './modules/glyphs.js';

function preloadGlyphs(glyphs) {
    const imageCache = [];
    if (!glyphs || glyphs.length === 0) return imageCache;
    
    glyphs.forEach(svgString => {
        const img = new Image();
        const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
        img.src = svgUrl;
        imageCache.push(img);
    });
    return imageCache;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nexus Genesis: Core Initialized.");

    const matrixCanvas = document.getElementById('matrix-canvas');
    if (!matrixCanvas) {
        console.error("FAILURE: matrix-canvas not found.");
        return;
    }

    const ctx = matrixCanvas.getContext('2d');
    if (!ctx) {
        console.error("FAILURE: Matrix (2D) context failed.");
        return;
    }
    console.log("SUCCESS: Matrix (2D) context initialized.");
    
    // --- Animation Logic ---
    const preloadedGlyphs = preloadGlyphs(nexusGlyphs);
    const fontSize = 16;
    let columns = [];

    function setupColumns() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        columns = [];
        const columnCount = Math.floor(matrixCanvas.width / fontSize);
        for (let i = 0; i < columnCount; i++) {
            columns.push({
                x: i * fontSize,
                y: Math.random() * matrixCanvas.height,
                speed: Math.random() * 3 + 1.5
            });
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(10, 11, 16, 0.1)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        columns.forEach(column => {
            if (preloadedGlyphs.length > 0) {
                const glyph = preloadedGlyphs[Math.floor(Math.random() * preloadedGlyphs.length)];
                if (glyph.complete && glyph.naturalHeight !== 0) {
                    ctx.drawImage(glyph, column.x, column.y, fontSize, fontSize);
                }
            }
            
            column.y += column.speed;

            if (column.y > matrixCanvas.height && Math.random() > 0.975) {
                column.y = 0;
            }
        });

        requestAnimationFrame(animate);
    }
    
    setupColumns();
    animate();

    window.addEventListener('resize', setupColumns);
});