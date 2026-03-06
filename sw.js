self.addEventListener('fetch', function(event) {
  // Απλός service worker για να επιτρέπει την εγκατάσταση
  event.respondWith(fetch(event.request));
});
