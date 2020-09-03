// indexOf
console.log("indexOf and lastIndexOf");

const obj1 = {name: 'nick'};
const arr1 = [ 1, 5, "a", obj1, true, 5, [ 1, 2 ], "9" ];

console.log(arr1.indexOf(5));
console.log(arr1.lastIndexOf(5));
console.log(arr1.indexOf({name: 'nick'}));
console.log(arr1.indexOf(obj1));

// findIndex
console.log("findIndex");

const arr2 = [ {id: 5, name: "Judith"}, {id: 7, name: "Francis"} ];

console.log(arr2.findIndex(o => o.id === 5));
console.log(arr2.findIndex(o => o.name === "Francis"));
console.log(arr2.findIndex(o => o.id === 17));

// find
console.log('find');

console.log(arr2.find(o => o.name === "Francis"));
console.log(arr2.find(o => o.id === 17));

const arr3 = [ 1, 17, 16, 5, 4, 16, 10, 3, 49 ];
console.log(arr3.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;

const john = new Person("John");
const paul = new Person("Paul");
const george = new Person("George");
const ringo = new Person("Ringo");

const arr4 = [ john, paul, george, ringo ];

console.log(arr4.find(o => o.id === george.id));
console.log(arr4.find(function(p) {
  return p.id === this.id;
}, george));

// some and every
console.log('some and every');

const arr5 = [ 5, 7, 12, 15, 17 ];
console.log(arr5.some(x => x % 2 === 0));
console.log(arr5.some(x =>Number.isInteger(Math.sqrt(x))));

const arr6 = [ 4, 6, 16, 36 ];
console.log(arr6.every(x => x % 2 === 0));
console.log(arr6.every(x => Number.isInteger(Math.sqrt(x))));

// map
// map copies original arr and returns the copied & modified arr
console.log('map');

const cart1 = [ {name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95} ];
const names1 = cart1.map(x => x.name);
console.log(names1);
const prices1 = cart1.map(x => x.price);
console.log(prices1);
const discountPrices1 = cart1.map(x => x.price * 0.8);
console.log(discountPrices1);
const cart2 = names1.map((x, i) => ({name: x, price: prices1[i]}));
console.log(cart2);

// filter
// like map, filter also copies original arr and returns the copied & modified arr
console.log('filter');

const cards = [];
for (let suit of [ 'H', 'C', 'D', 'S' ]) {
  for (let value = 1; value <= 13; value++) {
    cards.push({suit, value});
  }
}

console.log(cards.length);
console.log(cards.filter(x => x.value === 2));

// reduce
// reduce modifies the original array
console.log('reduce');
const arr7 = [ 5, 7, 2, 4 ];
const sum1 = arr7.reduce((a, x) => a + x);
console.log(sum1);
const sum2 = arr7.reduce((a, x) => a + x);
console.log(sum2);

// join: returns copied&modified arr
console.log('join');

const arr8 = [ 1, null, 'hello', 'world', true, undefined ];
delete arr8[3];
console.log(arr8.join());
console.log(arr8.join(''));
console.log(arr8.join('-'));
