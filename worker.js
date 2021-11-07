const filesToCache = [
	"Quake3.htm",
	"Quake3.json",
	"Quake3FavIcon_16x16.png",
	"Quake3FavIcon_192x192.png",
	"Quake3FavIcon_512x512.png",
	"Quake3Game.htm",
	"Quake3Game.js",
	"Quake3Game.pk3",
	"Quake3Share.png"
];

const staticCacheName = "quake3-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});