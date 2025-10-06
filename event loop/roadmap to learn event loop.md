# Before learning the event loop, make sure you have a solid understanding of the following topics:

| Step | Topic            | Practice                        |
| ---- | ---------------- | ------------------------------- |
| 1    | Call Stack       | Function calls                  |
| 2    | Web APIs         | setTimeout, fetch               |
| 3    | Queues           | Callback Queue, Microtask Queue |
| 4    | Event Loop Cycle | Predict code order              |
| 5    | Visual Tools     | Loupe / JS Visualizer           |
| 6    | Promises + Async | Understand microtasks           |
| 7    | Practice & Play  | Mix sync + async code           |


# The Event Loop doesn’t exist alone — it’s connected to several key asynchronous JavaScript concepts.
# Understanding these together gives you a complete mental model of how JS actually runs code.

┌───────────────────────┬──────────────────────────────────┬──────────────────────────────────┐
│       Category        │             Topics               │          Description             │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 🧩 Sync Execution     │ • Call Stack                     │ JS runs one line at a time      │
│                       │ • Execution Context              │ Event loop works when call       │
│                       │ • Stack Overflow                 │ stack is empty                   │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ⚙️ Async Foundations  │ • Web APIs (browser)            │ Handle async operations like      │
│                       │ • Node APIs (Node.js)            │ setTimeout, fetch, file reading  │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ⏳ Queues             │ • Callback Queue (Macrotask)     │ Two holding areas for async     │
│                       │ • Microtask Queue                │ tasks - Promises (micro) vs     │
│                       │                                  │ setTimeout (macro)              │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 🔁 Event Loop         │ • Event Loop cycle              │ Controls when queued tasks move   │
│                       │ • Task prioritization            │ back to call stack               │
│                       │ • Queue checking order           │                                  │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 💬 Timers & Tasks     │ • setTimeout()                  │ Common async functions that       │
│                       │ • setInterval()                  │ use event loop to schedule code  │
│                       │ • requestAnimationFrame()        │                                  │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 🧱 Promises &         │ • Promise states                │ Promises resolved async but       │
│    Microtasks         │ • .then()/.catch()/.finally()    │ with HIGHER priority than        │
│                       │ • Microtask Queue behavior       │ setTimeout                       │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ⚡ Async/Await        │ • Async function internals       │ Built on Promises - runs in      │
│                       │ • Await pauses execution         │ same event loop                  │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 🌐 Tasks from APIs    │ • Fetch API                      │ All feed callbacks/microtasks    │
│                       │ • Event listeners                │ back into event loop             │
│                       │ • setImmediate/process.nextTick  │                                  │
├───────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ 🧮 Node.js Phases     │ • Timers phase                  │ Node.js event loop has extra      │
│                       │ • I/O callbacks phase            │ internal phases (advanced)       │
│                       │ • Check phase                    │                                  │
└───────────────────────┴──────────────────────────────────┴──────────────────────────────────┘

# Visual ASCII code explaining how event loop flows

Event Loop Flow:
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   CALL STACK    │ ←→ │   MICROTASK Q    │ ←→ │   CALLBACK Q     │
│                 │    │ • Promises       │    │ • setTimeout     │
│ • Functions     │    │ • queueMicrotask │    │ • setInterval    │
│ • Console.log   │    │ • MutationObserver│   │ • I/O Events     │
└─────────────────┘    └──────────────────┘    └──────────────────┘
         ↑                       ↑                       ↑
         └─────────────────────────────────────────────────┐
                               ↓                           │
                       ┌───────────────┐                   │
                       │ EVENT LOOP    │ ←─────────────────┘
                       │ • Check stack │
                       │ • Move tasks  │
                       └───────────────┘
                               ↓
                       ┌───────────────┐
                       │ WEB APIs      │
                       │ • setTimeout  │
                       │ • fetch       │
                       │ • DOM events  │
                       └───────────────┘


 # Execution Priority:
┌─────────────┐
│ CALL STACK  │ ← Always first (synchronous code)
└─────────────┘
       ↓
┌─────────────┐
│ MICROTASKS  │ ← Second (Promises, queueMicrotask)
└─────────────┘
       ↓
┌─────────────┐
│ MACROTASKS  │ ← Third (setTimeout, setInterval)
└─────────────┘
       ↓
┌─────────────┐
│ RENDER      │ ← Browser may render between tasks
└─────────────┘



