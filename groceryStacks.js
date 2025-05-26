let Grocery_stack = [];

function peek() {
  if (Grocery_stack.length === 0) {
    return "Stack is empty";
  } else {
    return Grocery_stack[Grocery_stack.length - 1];
  }
}

function push(item) {
  Grocery_stack.push(item);
  console.log("Stack updated:", Grocery_stack);
}

function pop() {
  if (Grocery_stack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    const poppedItem = Grocery_stack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack updated:", Grocery_stack);
  }
}

// Get 5 grocery items using prompt()
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}
