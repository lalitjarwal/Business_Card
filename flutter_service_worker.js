'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e4d8e424752edafb1ec4ed5ef976042f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/fb.png": "54926e4a9d76db213e9072e40bedcafc",
"assets/images/github.png": "f8765d646d4ea7e3c4401d2eddb7e115",
"assets/images/img1.jpg": "9ce2ab8200617f41c413d48cd887f8ed",
"assets/images/insta.png": "daef124a45e4ee2ddef70d970c98772b",
"assets/images/linkedin.png": "7ef7ebe928079f36f128f8907d2158e8",
"assets/images/twitter.png": "b9c65d6956ac646bf09994d308fd94a2",
"assets/LICENSE": "ae5513ea28e9561c47c63cef2dfbaabf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a4ac44b3cbfee67a0b100d2269330876",
"/": "a4ac44b3cbfee67a0b100d2269330876",
"main.dart.js": "e850621ce331c95cec7076b2dac48558",
"manifest.json": "43578f6e5e2b920cebfe8be2a1a83c67"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
