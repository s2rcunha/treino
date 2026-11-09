const CACHE_NAME = 'meu-treino-pwa-v1';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('meu-treino-pwa-') && key !== CACHE_NAME).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if(request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if(response.ok) {const copy=response.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put('./index.html',copy)));}
      return response;
    }).catch(async()=> (await caches.match('./index.html')) || Response.error()));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
