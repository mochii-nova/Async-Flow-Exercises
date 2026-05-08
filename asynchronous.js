console.log("Step 1");

console.log("A");
console.log("B");
console.log("C");

console.log("\nStep 2");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

console.log("\nStep 3");

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

console.log("\nStep 4");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

console.log("\nStep 5");

async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");
}

console.log("3");

test();

console.log("4");

console.log("\nStep 6");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
