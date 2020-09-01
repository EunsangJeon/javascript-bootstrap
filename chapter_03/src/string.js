let stringOne = 'He said "don\'t do that" to Max';
let stringTwo = "Windows line 1\r\nWindows line 2";

console.log(stringOne);
console.log(stringTwo);

const TEMPERATURE = 25.3;
let message = "The current temperature is " + TEMPERATURE + "\u00b0C";

console.log(message);

message = `The current temperature is ${TEMPERATURE}\u00b0C`;

console.log(message);

const MULTI_LINE = "line1\n" +
  "line2\n" +
  "line3";
