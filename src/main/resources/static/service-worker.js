const FILES_TO_CASH = [
    "/",
    "app.css",
    "app.js",
    "manifest.json",
    "favicon.ico",
    "images/random192x192icon.png",
    "images/random512x512icon.png"
];

const CACHE_NAME = "home-page";

self.addEventListener("install", event => {
   console.log("Service worker installing ...");

   event.waitUntil(
       caches.open(CACHE_NAME).then(cache => {
           console.log("ServiceWorker pre-caching offline home page");
           cache.addAll(FILES_TO_CASH);
       })
   );
});

self.addEventListener("activate", evt => console.log("ServiceWorker activated."));


// Fetch event works as expected now that I fixed the caching from index.html
// to "/"

self.addEventListener("fetch", evt => {
        console.log("Fetch event triggered", evt.request);

        caches.match(evt.request).then(response => console.log(response));

        evt.respondWith(
            caches.match(evt.request)
                .then(response => response || fetch(evt.request))
        );
    }
);