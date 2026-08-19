const CACHE = 'vaultcheck-v2';
const shell = ['./', './index.html', './style.css', './manifest.webmanifest'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(async cache => {
            await Promise.all(shell.map(asset => cache.add(new URL(asset, self.registration.scope)).catch(() => undefined)));
            await self.skipWaiting();
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cached =>
            cached || fetch(event.request).catch(() => caches.match(new URL('./index.html', self.registration.scope)))
        )
    );
});
