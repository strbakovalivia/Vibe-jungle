self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Jen prázdný handler, aby aplikace byla PWA
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : { title: 'Zálivka!', body: 'Kytka potřebuje vodu.' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body
        })
    );
});
