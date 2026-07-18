// todo:  Write a function that creates a counter object with three functions: increment, decrement, and reset.(bonus question)
// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}

let counter = createCounter(0);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
