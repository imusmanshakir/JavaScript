# What is the Event Loop?
# The Event Loop is a continuous process that coordinates:

# Call Stack (what's running now)

# Microtask Queue (high priority async tasks)

# Callback Queue (low priority async tasks)

# Browser Rendering (when to update screen)

# Simplified Event Loop Pseudocode
while (true) {
# 1.Execute all synchronous code from Call Stack
    if (callStack.isEmpty()) {
        
# 2. Execute ALL microtasks (until microtask queue is empty)
        while (!microtaskQueue.isEmpty()) {
            const microtask = microtaskQueue.dequeue();
            callStack.push(microtask);
        }
        
#  3. Check if rendering is needed (browser only)
        if (isRenderingTime()) {
            updateScreen(); // Repaint the browser
        }
        
# 4. Execute ONE macrotask from callback queue
        if (!callbackQueue.isEmpty()) {
            const macrotask = callbackQueue.dequeue();
            callStack.push(macrotask);
        }
    }
}

# Step-by-Step Event Loop Cycle
# Phase 1: Call Stack Execution

console.log('Start');                                    // Sync - goes to call stack
setTimeout(() => console.log('Timeout'));               // Async - goes to Web API  
Promise.resolve().then(() => console.log('Promise'));  // Async - goes to Microtask Queue
console.log('End');                                   // Sync - goes to call stack

// Call Stack timeline:
// [main()]
// [main(), console.log('Start')]
// [main(), setTimeout()]
// [main()]
// [main(), Promise.resolve().then()]
// [main()]
// [main(), console.log('End')]
// [main()]
// [] ← CALL STACK EMPTY - Event Loop moves to next phase

# Phase 2: Microtask Processing

# After call stack is empty, Event Loop checks:
# MICROTASK QUEUE: [Promise callback]

# Event Loop processes ALL microtasks:
while (microtaskQueue.length > 0) {
    const task = microtaskQueue.shift();
    callStack.push(task); // Execute the microtask
}

# Result: "Promise" gets logged

# Phase 3: Render (Browser Only)

# Browser may decide to update the screen
# This happens between task processing
if (needsRendering) {
    // 1. Style calculation
    // 2. Layout calculation  
    // 3. Paint screen
    performRendering();
}

# Phase 4: Macrotask Processing

# CALLBACK QUEUE: [setTimeout callback]
# Event Loop processes ONE macrotask:
if (callbackQueue.length > 0) {
    const task = callbackQueue.shift();
    callStack.push(task); // Execute the macrotask
}

# Result: "Timeout" gets logged

# Complete Event Loop Visualization

# Visualizing the entire cycle
console.log('Script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => console.log('Promise 2'));

console.log('Script end');

# EVENT LOOP CYCLE:
# =================
# CYCLE 1: Initial execution
# Call Stack: [main]
# Output: "Script start", "Script end"
# Call Stack: [] ← EMPTY

# CYCLE 2: Microtask phase  
# Microtask Queue: [Promise1 callback]
# Call Stack: [Promise1]
# Output: "Promise 1"
# Microtask Queue: [Promise2 callback] ← Added during execution!
# Call Stack: [Promise2]  
# Output: "Promise 2"
# Call Stack: [] ← EMPTY

# CYCLE 3: Macrotask phase
# Callback Queue: [setTimeout callback]
# Call Stack: [setTimeout]
# Output: "setTimeout"
# Call Stack: [] ← EMPTY

# Key Takeaways
# Event Loop Cycle:

Execute sync code until call stack empty

Process ALL microtasks until microtask queue empty

Render updates (browser only)

Process ONE macrotask from callback queue

Repeat forever

# Remember:

Microtasks have highest priority

Macrotasks run one per cycle

Never block the event loop with sync operations

Use microtasks for urgent updates, macrotasks for less urgent work

# Example : Nested Cycles

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => console.log('Promise inside Timeout'));
}, 0);

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

console.log('End');

# Event Loop Cycles:
# CYCLE 1: 
#   Call Stack: Start, End
#   Microtasks: Promise 1
#   Output: Start, End, Promise 1

# CYCLE 2:
#   Macrotasks: Timeout 1
#   Call Stack: Timeout 1 → "Timeout 1"
#   During Timeout 1: Microtask added (Promise inside Timeout)
#   Microtasks: Promise inside Timeout
#   Output: Timeout 1, Promise inside Timeout

# CYCLE 3:
#   Macrotasks: Timeout 2  
#   Output: Timeout 2

# Example: Multiple Microtask
console.log('Script start');

# Macrotask
setTimeout(() => console.log('setTimeout'), 0);

# Multiple microtasks
Promise.resolve().then(() => {
    console.log('Promise 1');
    queueMicrotask(() => console.log('Microtask inside Promise'));
});

Promise.resolve().then(() => console.log('Promise 2'));

queueMicrotask(() => console.log('Direct microtask'));

console.log('Script end');

# Event Loop:
# CYCLE 1: Call Stack
#   Output: Script start, Script end

# CYCLE 2: Microtasks (ALL processed)
#   Microtask Queue: [Promise1, Promise2, Direct microtask]
#   Output: Promise 1
#   → New microtask added: [Promise2, Direct microtask, Microtask inside Promise]
#   Output: Promise 2
#   Output: Direct microtask  
#   Output: Microtask inside Promise
#   Microtask Queue: [] ← EMPTY

# CYCLE 3: Macrotasks
#   Output: setTimeout



# EVENT LOOP EXECUTION SUMMARY

┌─────────────────────────────────────────────────────────────────────────────┐
│                    EVENT LOOP EXECUTION SUMMARY                             │
├──────────────────────┬──────────────────────────────────────────────────────┤
│       STEP           │                      ACTION                          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│       START          │  Execute synchronous code from call stack            │
│                      │  (functions, console.log, variable assignments)      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│  CHECK CALL STACK    │  If call stack is empty → proceed to next step       │
│                      │  If not empty → keep executing sync code             │
├──────────────────────┼──────────────────────────────────────────────────────┤
│  PROCESS MICROTASKS  │  Execute ALL tasks in microtask queue:               │
│                      │  • Promise .then/.catch/.finally callbacks           │
│                      │  • queueMicrotask() callbacks                        │
│                      │  • MutationObserver callbacks                        │
├──────────────────────┼──────────────────────────────────────────────────────┤
│   RENDER (BROWSER)   │  Browser may update screen:                          │
│                      │  • Style calculation                                 │
│                      │  • Layout calculation                                │
│                      │  • Paint screen                                      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│  PROCESS MACROTASKS  │  Execute ONE task from callback queue:               │
│                      │  • setTimeout/setInterval callbacks                  │
│                      │  • I/O events                                        │
│                      │  • UI events (clicks, scrolls)                       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│      REPEAT          │  Go back to "CHECK CALL STACK" step                  │
│                      │  and continue indefinitely                           │
└──────────────────────┴──────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                     EXECUTION PRIORITY ORDER                                │
├──────────┬──────────────────────────┬───────────────────────────────────────┤
│  RANK    │        TASK TYPE         │            EXAMPLES                   │
├──────────┼──────────────────────────┼───────────────────────────────────────┤
│    1     │   SYNCHRONOUS CODE       │ console.log(), function calls,        │
│          │                          │ variable assignments                  │
├──────────┼──────────────────────────┼───────────────────────────────────────┤
│    2     │   MICROTASKS             │ Promise.then(), queueMicrotask(),     │
│          │   (ALL in queue)         │ MutationObserver                      │
├──────────┼──────────────────────────┼───────────────────────────────────────┤
│    3     │   RENDER CYCLE           │ Browser screen updates                │
│          │   (Browser only)         │                                       │
├──────────┼──────────────────────────┼───────────────────────────────────────┤
│    4     │   MACROTASKS             │ setTimeout(), setInterval(),          │
│          │   (ONE per cycle)        │ I/O events, UI events                 │
└──────────┴──────────────────────────┴───────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                       QUEUE PROCESSING RULES                                │
├──────────────────────┬──────────────────────────────────────────────────────┤
│      QUEUE TYPE      │                    BEHAVIOR                          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│   MICROTASK QUEUE    │  • HIGHEST priority                                  │
│                      │  • ALL tasks processed in current cycle              │
│                      │  • New microtasks added during execution are         │
│                      │    processed in SAME cycle                           │
│                      │  • Can block rendering if too many                   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│   CALLBACK QUEUE     │  • LOWER priority                                    │
│   (Macrotask Queue)  │  • ONLY ONE task processed per event loop cycle      │
│                      │  • New tasks wait for next cycle                     │
│                      │  • Ensures UI remains responsive                     │
└──────────────────────┴──────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                    PRACTICAL EXECUTION FLOW                                 │
├───────────────────┬─────────────────────────────────────────────────────────┤
│      CODE         │                     OUTPUT ORDER                        │
├───────────────────┼─────────────────────────────────────────────────────────┤
│ console.log('A')  │   A  ← Synchronous (immediate)                          │
│                   │   C  ← Microtask (high priority)                        │
│ setTimeout(() =>  │   B  ← Macrotask (low priority)                         │
│   console.log('B')│                                                         │
│ , 0)             │                                                          │
│                   │                                                         │
│ Promise.resolve() │                                                         │
│  .then(() =>      │                                                         │
│    console.log('C')│                                                        │
│  )               │                                                          │
└───────────────────┴─────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│                 EVENT LOOP CYCLE VISUALIZATION                             │
├─────────────────┐    ┌──────────────────┐    ┌──────────────────┐          │
│   CALL STACK    │ ←→ │   MICROTASK Q    │ ←→ │   CALLBACK Q     │          │
│ • Sync code     │    │ • Promises       │    │ • setTimeout     │          │
│ • Functions     │    │ • queueMicrotask │    │ • setInterval    │          │
└─────────────────┘    └──────────────────┘    └──────────────────┘          │
         ↑                       ↑                       ↑                   │
         │                       │                       │                   │
         └───────┬───────────────┴───────────────────────┘                   │
                 │                                                           │
           ┌─────▼─────┐                                                     │
           │ EVENT LOOP │                                                    │
           │ • 1. Check stack empty                                          │
           │ • 2. Process ALL microtasks                                     │
           │ • 3. Render (if needed)                                         │
           │ • 4. Process ONE macrotask                                      │
           └───────────┘                                                     │
                 │                                                           │
           ┌─────▼─────┐                                                     │
           │  REPEAT   │ ←───────────────────────────────────────────────────┘
           └───────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                     KEY TAKEAWAYS                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Sync code always runs first and blocks everything                        │
│ 2. Microtasks have higher priority than macrotasks                          │
│ 3. ALL microtasks are processed before ANY macrotasks                       │
│ 4. Only ONE macrotask runs per event loop cycle                             │
│ 5. Browser rendering happens between microtasks and macrotasks              │
│ 6. Never block the event loop with long synchronous operations              │
│ 7. Use microtasks for urgent updates, macrotasks for less urgent work       │
└─────────────────────────────────────────────────────────────────────────────┘