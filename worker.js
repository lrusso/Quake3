var filesToCache = [
  "DEMO.pk3",
  "Quake3.htm",
  "Quake3.js",
  "Quake3.json",
  "Quake3FavIcon_192x192.png",
  "Quake3FavIcon_512x512.png",
  "worker.js",
]

var staticCacheName = "quake3-v1"

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(function () {})
  )
})
