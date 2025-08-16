const CACHE_NAME = "hungry-v1";
const cachedFiles = [
    "/index.html",
    "/main.css",
    "/index.js",
    "/sprites.png",
    "/icon.png",
    "/products.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(cachedFiles))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
