// IIFE: Immediately Invoked Function Expression
const message = (function() {
  const secret = "It cannot be reached from the outside.";
  return secret;
})();

console.log(message);

const countItself = (function() {
  let count = 0;
  return function() {
    return ++count;
  };
})();

console.log(countItself());
console.log(countItself());
console.log(countItself());

// Function Hoisting
// 'use strict';