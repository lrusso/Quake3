const filesToCache = [
  "DEMO.pk3",
  "Quake3.htm",
  "Quake3.js",
  "Quake3.json",
  "Quake3FavIcon_192x192.png",
  "Quake3FavIcon_512x512.png",
  "worker.js",
]

const staticCacheName = "quake3-v1"

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch((error) => {})
  )
})
