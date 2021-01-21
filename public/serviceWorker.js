let CACHE_NAME = 'cache-1';
const urlsToCache = [
    '/',
    '/index.html',
];

self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('cache open');
            return cache.addAll(urlsToCache);
        })
    );
    
    self.skipWaiting();

});

self.addEventListener('fetch', function(event) {

    event.respondWith(caches.match(event.request).then(function(response) {
        if (response) {
            return response;
        }
            return fetch(event.request);
        })
    );
});