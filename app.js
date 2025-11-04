import { hashMap } from "./hashMap.js";

const test = new hashMap(16, 0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Get 'apple':", test.get("apple"));
console.log("Get 'lion':", test.get("lion"));
console.log("Get 'unknown':", test.get("unknown"));

console.log("Has 'dog'?", test.has("dog"));
console.log("Has 'monkey'?", test.has("monkey"));

console.log("Remove 'dog':", test.remove("dog"));
console.log("Remove 'dog' again:", test.remove("dog"));
console.log("Length after removal:", test.length());

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.clear();
console.log("After clear(), length:", test.length());
console.log("After clear(), entries:", test.entries());

for (let i = 1; i <= 25; i++) {
  test.set(`key${i}`, `value${i}`);
}
console.log("After adding 25 items:");
console.log("Length:", test.length());
console.log("Capacity (should have resized):", test.capacity);
console.log("Keys:", test.keys());
console.log("Values:", test.values());
