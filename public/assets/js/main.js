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

// Function to convert a single SVG string to a loaded Image object via a Promise
function preloadGlyph(svgString) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
        
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load glyph: ${svgString}`));
        
        img.src = svgUrl;
    });
}

// Main execution logic
document.addEventListener('DOMContentLoaded', async () => {
    console.log("Nexus Genesis: Core Initialized.");

    const matrixCanvas = document.getElementById('matrix-canvas');
    if (!matrixCanvas) { return console.error("FAILURE: matrix-canvas not found."); }

    const ctx = matrixCanvas.getContext('2d');
    if (!ctx) { return console.error("FAILURE: Matrix (2D) context failed."); }
    console.log("SUCCESS: Matrix (2D) context initialized.");

    // --- Preload all glyphs and then start animation ---
    try {
        console.log("Preloading glyphs...");
        const preloadedGlyphs = await Promise.all(nexusGlyphs.map(preloadGlyph));
        console.log(`SUCCESS: ${preloadedGlyphs.length} glyphs preloaded.`);
        
        // --- Animation Logic ---
        const fontSize = 16;
        let columns = [];

        const setupColumns = () => {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            
            // Clear canvas completely
            ctx.fillStyle = '#0A0B10';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            columns = [];
            const columnCount = Math.floor(matrixCanvas.width / fontSize);
            console.log(`Setting up ${columnCount} columns for ${matrixCanvas.width}x${matrixCanvas.height} canvas`);
            for (let i = 0; i < columnCount; i++) {
                columns.push({
                    x: i * fontSize,
                    y: Math.random() * matrixCanvas.height,
                    speed: Math.random() * 3 + 1.5
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 11, 16, 0.03)'; // Even slower fade for better visibility
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

            columns.forEach(column => {
                const glyph = preloadedGlyphs[Math.floor(Math.random() * preloadedGlyphs.length)];
                if (glyph) {
                    // Add some transparency variation
                    ctx.globalAlpha = Math.random() * 0.7 + 0.3;
                    ctx.drawImage(glyph, column.x, column.y, fontSize, fontSize);
                    ctx.globalAlpha = 1.0;
                }
                
                column.y += column.speed;

                if (column.y > matrixCanvas.height + fontSize) {
                    column.y = -fontSize;
                    column.x = Math.floor(Math.random() * (matrixCanvas.width / fontSize)) * fontSize;
                }
            });

            requestAnimationFrame(animate);
        };
        
        setupColumns();
        animate();

        window.addEventListener('resize', setupColumns);

    } catch (error) {
        console.error("CRITICAL FAILURE during glyph preloading:", error);
        
        // Fallback to simple text animation
        console.log("Falling back to text animation...");
        
        const fontSize = 16;
        let columns = [];
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

        const setupColumns = () => {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            ctx.fillStyle = '#0A0B10';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            columns = [];
            const columnCount = Math.floor(matrixCanvas.width / fontSize);
            for (let i = 0; i < columnCount; i++) {
                columns.push({
                    x: i * fontSize,
                    y: Math.random() * matrixCanvas.height,
                    speed: Math.random() * 3 + 1.5
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 11, 16, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

            ctx.fillStyle = '#00ff88';
            ctx.font = '16px monospace';

            columns.forEach(column => {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.globalAlpha = Math.random() * 0.8 + 0.2;
                ctx.fillText(char, column.x, column.y);
                
                column.y += column.speed;

                if (column.y > matrixCanvas.height + fontSize) {
                    column.y = -fontSize;
                    column.x = Math.floor(Math.random() * (matrixCanvas.width / fontSize)) * fontSize;
                }
            });

            ctx.globalAlpha = 1.0;
            requestAnimationFrame(animate);
        };
        
        setupColumns();
        animate();
        window.addEventListener('resize', setupColumns);
    }
});