// ==========================================
// 1. SYNCHRONOUS EXECUTION (15 Points)
// ==========================================
console.log("--- START STEP 1 ---");
console.log("A");
console.log("B");
console.log("C");
// Verification: Executes immediately on the Call Stack.


// ==========================================
// 2 & 3. QUEUE PRIORITY (22 Points)
// ==========================================
console.log("\n--- START STEP 2 & 3 ---");
console.log("Execution: Start");

// Macrotask: Sent to the Web API and then the Macrotask Queue
setTimeout(() => {
    console.log("Queue: Timeout (Macrotask)");
}, 0);

// Microtask: Sent to the Microtask Queue
Promise.resolve().then(() => {
    console.log("Queue: Promise (Microtask)");
});

console.log("Execution: End");

/* 
  EVENT LOOP LOGIC:
  1. Synchronous code finishes (Start -> End).
  2. The Call Stack is now empty.
  3. The Event Loop checks the Microtask Queue first (Promise).
  4. The Event Loop checks the Macrotask Queue last (Timeout).
*/



// ==========================================
// 4. ASYNC / AWAIT BEHAVIOR (15 Points)
// ==========================================
console.log("\n--- START STEP 4 ---");

async function handleFlow() {
    console.log("Inside: 1"); // Runs synchronously when called
    await Promise.resolve();   // Yields control; the rest of the function is queued
    console.log("Inside: 2"); // Runs as a microtask later
}

console.log("Outside: 3");
handleFlow();
console.log("Outside: 4");

// Expected Order: 3 -> 1 -> 4 -> 2


// ==========================================
// 5. FINAL CHALLENGE: THE PREDICTION (15 Points)
// ==========================================
console.log("\n--- FINAL CHALLENGE ---");

console.log("A"); // (1) Sync

setTimeout(() => {
  console.log("B"); // (4) Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("C"); // (3) Microtask
});

console.log("D"); // (2) Sync

/**
 * FINAL PREDICTED OUTPUT ORDER:
 * 1. A (Sync)
 * 2. D (Sync)
 * 3. C (Microtask - .then)
 * 4. B (Macrotask - setTimeout)
 */
