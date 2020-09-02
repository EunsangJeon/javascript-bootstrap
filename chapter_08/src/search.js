// indexOf
const obj1 = {name: 'nick'};
const arr1 = [ 1, 5, "a", obj1, true, 5, [ 1, 2 ], "9" ];

console.log(arr1.indexOf(5));
console.log(arr1.lastIndexOf(5));
console.log(arr1.indexOf({name: 'nick'}));
console.log(arr1.indexOf(obj1));
