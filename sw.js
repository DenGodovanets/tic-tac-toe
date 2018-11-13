const version = "0.6.11";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/main.js'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
/*
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('randomquote').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/main.js'                
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  const url = event.request.url;
  if (url.startsWith('https://andruxnet-random-famous-quotes.p.mashape.com/') || 
      url.startsWith('http://quotes.rest/qod')) {
    if (!navigator.onLine){
      event.respondWith(new Response({
        status: 200
      }));
      return; 
    }
  }
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
*/
