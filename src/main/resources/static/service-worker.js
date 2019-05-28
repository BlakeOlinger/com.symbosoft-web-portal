const FILES_TO_CASH = [
    "index.html",
    "app.css",
    "app.js"
];

const CACHE_NAME = "home-page";

self.addEventListener("install", event => {
   console.log("Service worker installing ...");

   event.waitUntil(
       caches.open(CACHE_NAME).then(cache => {
           console.log("[ServiceWorker] Pre-caching offline home page");
           cache.addAll(FILES_TO_CASH);
       })
   );
});

self.addEventListener("activate", evt => console.log("ServiceWorker activated."));

self.addEventListener("fetch", evt => {
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then( cache => {
                        return cache.match("index.html");
                        }
                    )
            })
    );
});