'use strict';
document.addEventListener('DOMContentLoaded', () => {
    console.log("Nexus Genesis: Core Initialized.");
    const ecosystemCanvas = document.getElementById('ecosystem-canvas');
    if (ecosystemCanvas && ecosystemCanvas.getContext('webgl')) {
        console.log("SUCCESS: Ecosystem (WebGL) context initialized.");
    } else { console.error("FAILURE: Ecosystem (WebGL) context failed."); }
    const matrixCanvas = document.getElementById('matrix-canvas');
    if (matrixCanvas && matrixCanvas.getContext('2d')) {
        console.log("SUCCESS: Matrix (2D) context initialized.");
    } else { console.error("FAILURE: Matrix (2D) context failed."); }
});