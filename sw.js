// Service Worker для кешування ресурсів
const CACHE_NAME = 'nexus-digital-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/services.html',
  '/about.html',
  '/contact.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/logo-for-site.webp'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});