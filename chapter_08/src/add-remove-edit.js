// push, pop, unshift and shift modify arr
console.log('push, pop, unshift and shift');

const arr = [ 'b', 'c', 'd' ];
console.log(arr);

arr.push('e');
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift('a');
console.log(arr);

arr.shift();
console.log(arr);

// concat copies original arr and modifies the copied one.
// it destruct once(see example)
console.log('concat');

const numArray = [ 1, 2, 3 ];
console.log(numArray);

console.log(numArray.concat(4, 5, 6));
console.log(numArray.concat([ 4, 5, 6 ]));
console.log(numArray.concat(4, [ 5, 6 ]));
console.log(numArray.concat([ 4, [ 5, 6 ] ]));

// slice copies original arr and modifies the copied one.
console.log('slice');

const longNumArray = [ 1, 2, 3, 4, 5 ];
console.log(longNumArray);

console.log(longNumArray.slice(3)); // [4,5]
console.log(longNumArray.slice(2, 4)); // [3,4]
console.log(longNumArray.slice(-2)); // [4,5]
console.log(longNumArray.slice(1, -2)); // [2,3]

// splice modifies original array
console.log('splice');

const numArrayToSplice = [ 1, 5, 7 ];
console.log(numArrayToSplice);

numArrayToSplice.splice(1, 0, 2, 3, 4);
console.log(numArrayToSplice); // [1,2,3,4,5,7]

numArrayToSplice.splice(5, 0, 6);
console.log(numArrayToSplice); // [1,2,3,4,5,6,7]

numArrayToSplice.splice(1, 2);
console.log(numArrayToSplice); // [1,4,5,6,7]

numArrayToSplice.splice(2, 1, 'a', 'b');
console.log(numArrayToSplice); // [1,4,'a','b',6,7]

// fill changes original arr
console.log('fill');

const fillDemoArray = new Array(5).fill(1); // [1,1,1,1,1]
console.log(fillDemoArray);

fillDemoArray.fill('a');
console.log(fillDemoArray); // ['a','a','a','a','a']

fillDemoArray.fill('b', 1);
console.log(fillDemoArray); // ['a','b','b','b','b']

fillDemoArray.fill('c', 2, 4);
console.log(fillDemoArray); // ['a','b','c','c','b']

// sort and reverse changes 
console.log("sort and reverse");

const arrToReverse = [ 1, 2, 3, 4, 5 ];
arrToReverse.reverse();
console.log(arrToReverse);

const numArrToSort = [ 5, 3, 2, 4, 1 ];
numArrToSort.sort();
console.log(numArrToSort);

const objectArrToSort = [
  { name: 'John' },
  { name: 'Paul' },
  { name: 'George' },
  { name: 'Ringo' },
];
objectArrToSort.sort((a, b)=>{
  console.log(a.name > b.name);
  return a.name < b.name ? -1 : 0;
});
console.log(objectArrToSort);
