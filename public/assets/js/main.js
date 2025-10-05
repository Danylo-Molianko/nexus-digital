import nexusGlyphs from './modules/glyphs.js';

function preloadGlyphs(glyphs) {
    const imageCache = [];
    glyphs.forEach(svgString => {
        const img = new Image();
        // Use encodeURIComponent for better handling of special characters in SVG
        const svgUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
        img.src = svgUrl;
        imageCache.push(img);
    });
    return imageCache;
}

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nexus Genesis core initializing...");

    // Initialize Ecosystem Canvas (WebGL)
    const ecosystemCanvas = document.getElementById('ecosystem-canvas');
    if (ecosystemCanvas) {
        try {
            const gl = ecosystemCanvas.getContext('webgl');
            if (gl) {
                console.log("SUCCESS: Ecosystem (WebGL) context initialized.");
            } else {
                throw new Error("WebGL context is not available.");
            }
        } catch (e) {
            console.error("ERROR: Failed to initialize WebGL for Ecosystem.", e);
        }
    } else {
        console.error("ERROR: ecosystem-canvas not found in the DOM.");
    }

    // Initialize Matrix Canvas (2D)
    const matrixCanvas = document.getElementById('matrix-canvas');
    if (matrixCanvas) {
        try {
            const ctx = matrixCanvas.getContext('2d');
            if (ctx) {
                console.log("SUCCESS: Matrix (2D) context initialized.");
                
                // Setup canvas dimensions
                matrixCanvas.width = window.innerWidth;
                matrixCanvas.height = window.innerHeight;

                // --- Animation Logic ---
                const preloadedGlyphs = preloadGlyphs(nexusGlyphs);
                const fontSize = 16;
                let columns = [];

                function setupColumns() {
                    columns = []; // Clear existing columns
                    const columnCount = Math.floor(matrixCanvas.width / fontSize);
                    for (let i = 0; i < columnCount; i++) {
                        columns.push({
                            x: i * fontSize,
                            y: Math.random() * matrixCanvas.height, // Start at a random height
                            speed: Math.random() * 3 + 1.5 // Random speed
                        });
                    }
                }

                ctx.font = `${fontSize}px monospace`;
                setupColumns();

                function animate() {
                    // Create a semi-transparent black rectangle for the fading trail effect
                    ctx.fillStyle = 'rgba(10, 11, 16, 0.1)';
                    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

                    // Set color for the characters
                    ctx.fillStyle = '#00FFB2'; // Quantum Shield Green

                    // Loop through each column
                    columns.forEach(column => {
                        // Get a random glyph from our cache
                        const glyph = preloadedGlyphs[Math.floor(Math.random() * preloadedGlyphs.length)];
                        
                        // Ensure the glyph has loaded before trying to draw it
                        if (glyph.complete && glyph.naturalHeight !== 0) {
                            ctx.drawImage(glyph, column.x, column.y, fontSize, fontSize);
                        }

                        // Move the column down
                        column.y += fontSize * (column.speed / 10);

                        // Reset the column when it goes off-screen
                        if (column.y > matrixCanvas.height && Math.random() > 0.975) {
                            column.y = 0;
                        }
                    });

                    requestAnimationFrame(animate);
                }

                animate(); // Start the animation loop

                // Add event listener to resize the canvas when the window is resized
                window.addEventListener('resize', () => {
                    matrixCanvas.width = window.innerWidth;
                    matrixCanvas.height = window.innerHeight;
                    ctx.font = `${fontSize}px monospace`; // Re-apply font settings on resize
                    setupColumns(); // Re-calculate columns for the new width
                });
            } else {
                throw new Error("2D context is not available.");
            }
        } catch (e) {
            console.error("ERROR: Failed to initialize 2D context for Matrix.", e);
        }
    } else {
        console.error("ERROR: matrix-canvas not found in the DOM.");
    }
});
