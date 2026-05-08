console.log("--- Step 1: Sync ---");
console.log("A");
console.log("B");
console.log("C");

console.log("\n--- Step 2: setTimeout ---");
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

console.log("\n--- Step 3: Promise ---");
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

console.log("\n--- Step 4: Comparison ---");
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

console.log("\n--- Step 5: Async/Await ---");

async function test() {
    console.log("1"); // Runs synchronously until 'await'
    await Promise.resolve();
    console.log("2"); // Becomes a microtask
}

console.log("3");
test();
console.log("4");

console.log("\n--- Step 6: Advanced Challenge ---");

console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
Promise.resolve().then(() => {
    console.log("C");
});
console.log("D");
