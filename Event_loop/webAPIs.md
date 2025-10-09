# What are Web APIs?
 Web APIs are browser-provided interfaces that extend JavaScript's capabilities beyond the core language. 
 They allow JavaScript to interact with browser features, hardware, and external services.
 Web APIs are built-in browser features that handle asynchronous or background tasks outside the main JavaScript thread.
 They are not part of the JavaScript language itself, but part of the browser environment (or Node.js environment).
 These are NOT part of JavaScript language itself
 They are provided by the browser environment.

┌──────────────────────────┬──────────────────────────────────────────────┬──────────────────────────────────────────────┐
│          Type            │                   Example                    │                 What it Does                 │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ ⏱️  Timer APIs           │ setTimeout(), setInterval(), clearTimeout()  │ Schedule code to run later or repeatedly.    │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 🌐  Network APIs         │ fetch(), XMLHttpRequest(), WebSocket         │ Send or receive data from servers.           │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 🖱️  Event APIs           │ addEventListener(), removeEventListener()    │ Handle user actions like clicks, key presses.│
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 📦  Storage APIs         │ localStorage, sessionStorage, IndexedDB      │ Save and retrieve data in the browser.       │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 🎨  Visual & Animation   │ requestAnimationFrame(), Canvas API, WebGL   │ Create and manage graphics or animations.    │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 📍  Device & Sensor APIs │ Geolocation, Clipboard, Battery, Camera      │ Access device features (with permission).    │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 🔐  Security APIs        │ Credential Management, Permissions, WebAuthn │ Manage identity, access, and permissions.    │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 💬  Communication APIs   │ BroadcastChannel, postMessage(), WebRTC      │ Exchange data between pages or users.        │
├──────────────────────────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ ⚙️  Worker APIs          │ Web Worker, Service Worker, SharedWorker     │ Run background tasks without blocking JS.    │
└──────────────────────────┴──────────────────────────────────────────────┴──────────────────────────────────────────────┘


