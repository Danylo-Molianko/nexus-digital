// Global Error Handler - The "Black Box"
window.addEventListener('error', function(event) {
    const errorLog = document.getElementById('error-log');
    if (errorLog) {
        errorLog.style.display = 'block';
        errorLog.textContent = 'FATAL ERROR:\n\n' + event.message + '\n\nFile: ' + event.filename + '\nLine: ' + event.lineno + ':' + event.colno;
    }
});

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
    
    console.log("Starting animation setup...");

    function setupColumns() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        columns = [];
        const columnCount = Math.floor(matrixCanvas.width / fontSize);
        console.log(`Setting up ${columnCount} columns for canvas ${matrixCanvas.width}x${matrixCanvas.height}`);
        for (let i = 0; i < columnCount; i++) {
            columns.push({
                x: i * fontSize,
                y: Math.random() * matrixCanvas.height,
                speed: Math.random() * 3 + 1.5
            });
        }
    }

    function animate() {
        // Clear canvas with semi-transparent black
        ctx.fillStyle = 'rgba(10, 11, 16, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        // Draw falling glyphs
        columns.forEach(column => {
            // Use simple text instead of SVG for now
            ctx.fillStyle = '#00ff88';
            ctx.font = '16px monospace';
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const char = chars[Math.floor(Math.random() * chars.length)];
            
            ctx.globalAlpha = Math.random() * 0.8 + 0.2;
            ctx.fillText(char, column.x, column.y);
            
            column.y += column.speed;

            if (column.y > matrixCanvas.height) {
                column.y = -fontSize;
                column.x = Math.floor(Math.random() * (matrixCanvas.width / fontSize)) * fontSize;
            }
        });

        ctx.globalAlpha = 1.0;
        requestAnimationFrame(animate);
    }
    
    setupColumns();
    animate();

    window.addEventListener('resize', setupColumns);
});