let boolean = true;
boolean = false;

const RED = Symbol("The color of a sunset");
const ORANGE = Symbol("The color of a sunset");
console.log(RED === ORANGE);

const now = new Date();
console.log(now);
const halloween = new Date(2020, 9, 31);
console.log(halloween);
const halloweenParty = new Date(2020, 9, 31, 19, 0);
console.log(halloweenParty);

now.getFullYear();
now.getMonth();
now.getDate();
// and so on

const numStr = "33.3";
console.log(Number(numStr));

const a = parseInt("15 volts", 10);
const b = parseInt("3a", 16);
const c = parseFloat("14.5 kph");
const d = new Date();
const ts = d.valueOf();

const BOOLEAN_EXAMPLE = true;
const n = b ? 1 : 0;

const NUMBER_EXAMPLE = 33.3;
const STRING_EXAMPLE = NUMBER_EXAMPLE.toString();

const ZERO_INTEGER_VALUE = 0;
const B1 = !!ZERO_INTEGER_VALUE;
const B2 = Boolean(ZERO_INTEGER_VALUE);
