# NEXUS STUDIO Server Launcher
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    NEXUS STUDIO Server Starting..." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Launching Digital Dreams Reality..." -ForegroundColor Green
Write-Host "🌌 Port: 3001" -ForegroundColor Blue
Write-Host "🌐 URL: http://localhost:3001" -ForegroundColor Blue
Write-Host ""

# Change to the script directory
Set-Location -Path $PSScriptRoot

# Start the Node.js server
try {
    & node server.js
} catch {
    Write-Host "❌ Error starting server: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "❌ Server stopped. Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")