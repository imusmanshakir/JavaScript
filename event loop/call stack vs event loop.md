# Call Stack executes synchronous code. Event Loop constantly checks if Call Stack 
# is empty. When empty, it pushes asynchronous tasks from queues to Call Stack for execution

# MORE DETAILED:
Call Stack: Executes all synchronous code immediately
Event Loop: Monitors Call Stack → When empty → Processes queues:
  1. ALL Microtasks (Promises, queueMicrotask)
  2. Browser Rendering (if needed) 
  3. ONE Macrotask (setTimeout, events)

┌─────────────────────────────────────────────────────────────┐
│               CALL STACK & EVENT LOOP RELATION              │
├───────────────────┬─────────────────────────────────────────┤
│    CALL STACK     │              EVENT LOOP                 │
├───────────────────┼─────────────────────────────────────────┤
│ • Executes code   │ • Manages code execution                │
│ • Tracks function │ • Coordinates between stacks & queues   │
│   calls           │ • Decides WHAT runs next                │
│ • LIFO structure  │ • Continuous monitoring process         │
│ • Single thread   │ • Work scheduler                        │
└───────────────────┴─────────────────────────────────────────┘

# How They Work Together
# The Core Relationship:

# The Event Loop's MAIN JOB: Monitor Call Stack
while (true) {
    if (callStack.isEmpty()) {
        # Only when call stack is empty, event loop can push new tasks
        executeQueuedTasks();
    }
}


┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│   WEB APIs  │ →  │    QUEUES    │ →  │  EVENT LOOP     │
│ • setTimeout│    │ • Microtasks │    │ • Monitors      │
│ • fetch     │    │ • Macrotasks │    │   Call Stack    │
│ • DOM events│    └──────────────┘    └─────────┬───────┘
└─────────────┘                                  │
                                          ┌──────▼──────┐
                                          │ CALL STACK  │ ← EXECUTES HERE
                                          │ • Functions │
                                          │ • Sync code │
                                          └─────────────┘




console.log('Start');           1. Call Stack: [main, consolelog]
                                2. Execute immediately
                                3. Call Stack: [main]

setTimeout(() => {              4. Call Stack: [main, setTimeout]
    console.log('Timeout');     #    → Web API → Callback Queue
}, 0);                          5. Call Stack: [main]

console.log('End');             6. Call Stack: [main, console.log]
                                7. Execute immediately
                                8. Call Stack: [] ← EMPTY!
                                 → EVENT LOOP DETECTS EMPTY CALL STACK!
                                9. Push queued tasks to Call Stack

                                


function first() {
    console.log('First');
    second();
}

function second() {
    console.log('Second');
    # Async operation
    setTimeout(() => {
        console.log('Async done');
    }, 0);
}

first();

# Execution Flow:
# Call Stack: [main, first, console.log] → "First"
# Call Stack: [main, first, second, console.log] → "Second"  
# Call Stack: [main, first, second, setTimeout] → Web API
# Call Stack: [main, first, second] → second returns
# Call Stack: [main, first] → first returns
# Call Stack: [main] → main returns
# Call Stack: [] ← EMPTY!

# ONLY NOW Event Loop pushes setTimeout callback to Call Stack
# Call Stack: [setTimeout callback, console.log] → "Async done"

┌────────────────────────────────────────────────────────────────┐
│              EVENT LOOP CAN ONLY WORK WHEN:                    │
│                    CALL STACK IS EMPTY                         │
├────────────────────────────────────────────────────────────────┤
│   CALL STACK STATUS  │        EVENT LOOP ACTION                │
├──────────────────────┼─────────────────────────────────────────┤
│       NOT EMPTY      │        WAITS (does nothing)             │
│                      │  • Async callbacks stay in queues       │
│                      │  • UI updates are blocked               │
│                      │  • User interactions are queued         │
├──────────────────────┼─────────────────────────────────────────┤
│        EMPTY         │        PUSHES TASKS                     │
│                      │  • Takes from microtask queue first     │
│                      │  • Then from callback queue             │
│                      │  • One macrotask per cycle              │
└──────────────────────┴─────────────────────────────────────────┘

console.log('Start');

# This BLOCKS the call stack → Event Loop CANNOT work
const start = Date.now();
while (Date.now() - start < 3000) {
    # Busy wait for 3 seconds
}

setTimeout(() => {
    console.log('This is delayed by 3+ seconds');
}, 0);

console.log('End');

# Why? Because call stack is never empty during the 3-second loop
# Event Loop cannot push the setTimeout callback until loop finishes

EVENT LOOP CONSTANTLY CHECKS:
      ↓
┌─────────────┐
│ CALL STACK  │ ← Is it empty?
└─────────────┘
      ↓
If EMPTY:                 If NOT EMPTY:
┌─────────────┐           ┌─────────────┐
│ Take tasks  │           │   WAIT      │
│ from queues │           │   patiently │
└─────────────┘           └─────────────┘
      ↓
┌─────────────┐
│ Push to     │
│ Call Stack  │
└─────────────┘

# Event Loop decides WHAT to push to Call Stack and WHEN

console.log('Sync 1');                    # 1. Call Stack (immediate)

setTimeout(() => {                        # 2. Web API → Callback Queue (Macrotask)
    console.log('Macrotask');
}, 0);

Promise.resolve().then(() => {            # 3. Microtask Queue (High priority)
    console.log('Microtask');
});

console.log('Sync 2');                    # 4. Call Stack (immediate)

# Event Loop's decision process:
# Step 1: Execute all sync code (Call Stack empties)
# Step 2: Check queues - Microtask queue has task
# Step 3: Push microtask to Call Stack
# Step 4: Call Stack empties again
# Step 5: Push ONE macrotask to Call Stack

┌─────────────────────────────────────────────────────────────────┐
│                 CALL STACK & EVENT LOOP SYMBIOSIS               │
├─────────────────────────┬───────────────────────────────────────┤
│      CALL STACK         │            EVENT LOOP                 │
├─────────────────────────┼───────────────────────────────────────┤
│ • WHERE code executes   │ • DECIDES what executes next          │
│ • Synchronous only      │ • Manages asynchronous operations     │
│ • Blocks when busy      │ • Works only when stack is empty      │
│ • Single-threaded       │ • Coordinator between environments    │
│ • Fast but blocking     │ • Non-blocking but dependent          │
└─────────────────────────┴───────────────────────────────────────┘

# The Bottom Line
Call Stack is the DOER - It actually executes the code
Event Loop is the MANAGER - It decides what gets done next

Without Call Stack: Event Loop has nowhere to execute code
Without Event Loop: Call Stack can only run synchronous code

They work together to make JavaScript's single-threaded, non-blocking model possible!