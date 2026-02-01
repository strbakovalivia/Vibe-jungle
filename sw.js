// Service Worker pro Plant Vibe Pro
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Tento handler je prázdný, aby aplikace fungovala offline/PWA
self.addEventListener('fetch', (event) => {
    // Zde by mohlo být kešování, pokud bys chtěla aplikaci zrychlit
});

// TADY JE TA DŮLEŽITÁ ČÁST PRO NOTIFIKACE
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : { title: 'Pozor!', body: 'Kytka má žízeň!' };
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'icon-192.png', // ujisti se, že tento soubor v projektu máš
            badge: 'icon-192.png',
            vibrate: [200, 100, 200]
        })
    );
});
