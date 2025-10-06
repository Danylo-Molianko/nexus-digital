import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent / 'public'), **kwargs)
    
    def do_GET(self):
        if self.path == '/':
            self.path = '/pages/index.html'
        elif self.path == '/about':
            self.path = '/pages/about.html'
        elif self.path == '/services':
            self.path = '/pages/services.html'
        elif self.path == '/portfolio':
            self.path = '/pages/portfolio.html'
        elif self.path == '/contact':
            self.path = '/pages/contact.html'
        
        return super().do_GET()

PORT = 3000

print("========================================")
print("    NEXUS STUDIO Server Starting...")
print("========================================")
print()
print("🚀 Launching Digital Dreams Reality...")
print(f"🌌 Port: {PORT}")
print(f"🌐 URL: http://localhost:{PORT}")
print()
print("⚠️  Note: This is a Python fallback server")
print("   For full functionality, install Node.js")
print()

try:
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"✅ Python server running on port {PORT}")
        print("Press Ctrl+C to stop...")
        
        # Open browser
        webbrowser.open(f'http://localhost:{PORT}')
        
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n❌ Server stopped by user")
except OSError as e:
    print(f"❌ Error: {e}")
    print("   Port might be in use or blocked")