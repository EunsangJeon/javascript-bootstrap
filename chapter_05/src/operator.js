const person1 = {
  name: "Nick",
  age: 30,
};

console.log(typeof person1);

const OBJ_1 = {b: 2, c: 3, d: 4};
const {a, b, c} = OBJ_1;
console.log(a);
console.log(b);
console.log(c);

const OBJ_2 = {f: 2, g: 3, h: 4};
let f, g, h;
({f, g, h} = OBJ_2);

const ARR_1 = [ 1, 2, 3 ];
let [ i, j ] = ARR_1;
console.log(i);
console.log(j);

const ARR_2 = [ 1, 3, 5, 7, 9 ];
let [ k, l, ...rest ] = ARR_2;
console.log(k);
console.log(l);
console.log(rest);

const TARGET_ROOM_TEMP_C = 21.5;
let currentTempC = 31.3;
const TEMPERATURE_GAP_MESSAGE = `The current temperature is ` +
  `${currentTempC - TARGET_ROOM_TEMP_C}\u00b0C different than target temperature.`;
const FAHRENHEIT_MESSAGE =
  `The current temperature is ${currentTempC * 9 / 5 + 32}\u00b0F`;
console.log(TEMPERATURE_GAP_MESSAGE);
console.log(FAHRENHEIT_MESSAGE);
