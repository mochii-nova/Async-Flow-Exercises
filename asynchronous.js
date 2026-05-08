console.log("--- 1. Synchronous Flow ---");
console.log("A");
console.log("B");
console.log("C");

console.log("\n--- 2 & 3. Queue Priority ---");
console.log("Start");

setTimeout(() => {
    console.log("Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise (Microtask)");
});

console.log("End");

console.log("\n--- 5. Async/Await Logic ---");

async function asyncTest() {
    console.log("1 (Inside Async)"); 
    await Promise.resolve(); 
    console.log("2 (After Await)"); 
}

console.log("3 (Before Calling Async)");
asyncTest();
console.log("4 (After Calling Async)");

console.log("\n--- 6. Final Execution Challenge ---");

console.log("A"); 

setTimeout(() => {
    console.log("B"); 
}, 0);

Promise.resolve().then(() => {
    console.log("C"); 
});

console.log("D");
