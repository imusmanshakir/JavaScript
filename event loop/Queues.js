/*

# Queues are where asynchronous tasks wait their turn before being executed by the Event Loop.

# Before we dive in — here’s how to structure your study for this topic 

┌────────────────────────────────────────────────────────────────────────────┐
│                    🌀 Types of Queues in the Event Loop                    │
├────────────────────────────────────────────┬───────────────────────────────┤
│ ⏳ 1. Callback Queue (Macrotask)           │ For setTimeout, setInterval,  │
│                                            │ I/O, and DOM events.          │
├────────────────────────────────────────────┼───────────────────────────────┤
│ ⚡ 2. Microtask Queue                      │ For Promises and microtasks.  │
│                                            │ Runs before macrotasks.       │
├────────────────────────────────────────────┼───────────────────────────────┤
│ 🎞️ 3. Animation Frame Queue               │ For requestAnimationFrame().   │
│                                            │ Runs before browser repaint.  │
└────────────────────────────────────────────┴───────────────────────────────┘
*/

// # 1. Callback Queue (Macrotask Queue) --->What it holds:

// setTimeout(() => {}, 0);          // Timer callbacks
// setInterval(() => {}, 0);         // Interval callbacks
// I/O operations (Node.js)
// UI Rendering (browser)
// Event listeners (click, scroll, etc.)
// setImmediate (Node.js)
   
// Characteristics:

// FIFO (First In, First Out)

// Lower priority than Microtasks

// Processed one per event loop cycle

console.log('Script start');

// Macrotask 1
setTimeout(() => {
    console.log('setTimeout 1, Macrotask 1');
}, 0);

// Macrotask 2  
setTimeout(() => {
    console.log('setTimeout 2, Macrotask 2');
}, 0);

console.log('Script end');

// Output:
// Script start
// Script end
// setTimeout 1
// setTimeout 2




// 2. Microtask Queue,  --->What it holds:
// MICROTASKS (Microtask Queue)

// Promise.then(() => {})            // Promise callbacks
// Promise.catch(() => {})           // Promise error callbacks  
// Promise.finally(() => {})         // Promise final callbacks
// queueMicrotask(() => {})          // Direct microtask
// MutationObserver                  // DOM changes
// process.nextTick()                // Node.js (highest priority)

// Characteristics:

// FIFO (First In, First Out)

// HIGHER priority than Macrotasks

// ALL microtasks are processed before next macrotask

// Can lead to "starvation" if too many microtasks

console.log('Script start');

// Macrotask
setTimeout(() => {
    console.log('Macrotask to explain microtask, i will run at the end');
}, 0);

// Microtask 1
Promise.resolve().then(() => {
    console.log('Promise 1, Microtask 1');
});

// Microtask 2
queueMicrotask(() => {
    console.log('queueMicrotask, Microtask 2');
});

console.log('Script end');
// Output:
// Script start
// Script end
// Promise 1        ← Microtasks FIRST!
// queueMicrotask   ← Microtasks FIRST!  
// setTimeout       ← Macrotask LAST

// Queue Priority Visualization

// Execution Order:
/*
┌─────────────────┐
│   CALL STACK    │ ← Currently executing code
└─────────────────┘
         ↓
┌─────────────────┐
│ MICROTASK QUEUE │ ← HIGHEST PRIORITY (processed completely)
│ • Promises      │
│ • queueMicrotask│
└─────────────────┘
         ↓
┌─────────────────┐
│   RENDER (GUI)  │ ← Browser may update screen
└─────────────────┘  
         ↓
┌─────────────────┐
│ CALLBACK QUEUE  │ ← LOWEST PRIORITY (one per cycle)
│ • setTimeout    │
│ • setInterval   │
│ • I/O events    │
└─────────────────┘
*/

// Detailed Queue Behavior
// Microtask Queue - Complete Processing

console.log('Start');

// Macrotask
setTimeout(() => console.log('Timeout macrotask, will execute at the last'), 0);

// Multiple Microtasks
Promise.resolve().then(() => {
    console.log('Promise 1, microtask 1');
    queueMicrotask(() => console.log('Nested microtask'));
});

Promise.resolve().then(() => console.log('Promise 2, microtask 2'));

console.log('End');

// Output:
// Start
// End
// Promise 1        ← All microtasks processed
// Promise 2        ← All microtasks processed  
// Nested microtask ← Even nested microtasks!
// Timeout          ← Only then macrotask

// Callback Queue(Macrotask) - One Per Cycle

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1, macrotask 1');
    Promise.resolve().then(() => console.log('Promise inside timeout, microtask inside macrotask 1'));
}, 0);

setTimeout(() => {
    console.log('Timeout 2, macrotask 2'); 
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout 1                    ← First macrotask
// Promise inside timeout       ← Microtasks from first macrotask
// Timeout 2                    ← Second macrotask (next cycle)

// Real-World Queue Scenarios
// Scenario 1: User Interaction + API Call

button.addEventListener('click', () => {
    console.log('Button clicked');
    
    // Macrotask
    setTimeout(() => console.log('Timeout after click'), 0);
    
    // Microtask  
    fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log('Data received'));
        
    console.log('Event handler done');
});

// Click the button:
// Button clicked
// Event handler done  
// Data received      ← Microtask (Promise)
// Timeout after click ← Macrotask

// Key Takeaways:

// Microtasks = High priority, process all before next macrotask

// Macrotasks = Low priority, process one per event loop cycle

// Order: Sync → Microtasks → Render → Macrotasks

// Danger: Microtask starvation can block your app

// Medium (for understanding & explaining clearly)

// The Event Loop continuously monitors the Call Stack and Queues (Callback Queue, Microtask Queue, etc.).
// When your main code finishes running, the event loop:

// Checks if the stack is empty.

// Runs microtasks (like resolved promises).

// Then runs macrotasks (like setTimeout).

// Repeats forever — one loop per “tick.”

// This process lets JavaScript appear asynchronous, even though it’s single-threaded.

// 🔵 Deep (for when you want to impress)

// The Event Loop is the heart of JavaScript’s concurrency model.
// It coordinates between:

// Call Stack (where synchronous code executes)

// Web APIs / Node APIs (that handle async operations)

// Queues (that store callbacks)
// and ensures tasks are executed in a predictable order:
// Sync code → Microtasks → Animation Frames → Macrotasks → repeat.

// This cycle prevents blocking, keeps the UI responsive, and defines how JavaScript schedules async code.