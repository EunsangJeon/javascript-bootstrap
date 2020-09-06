// Basic
console.log(new Date());

// Date with human friendly numbers
console.log(new Date(2020, 0));
console.log(new Date(2020, 8, 6));
console.log(new Date(2020, 8, 6, 9));
console.log(new Date(2020, 8, 6, 9, 30));
console.log(new Date(2020, 8, 6, 9, 30, 12));
console.log(new Date(2020, 8, 6, 9, 30, 12, 500));

// unix timestamp (from unix epoch)
console.log(new Date(0));
console.log(new Date(1599379892083));
console.log(new Date(-365 * 24 * 60 * 60 * 1000));

// string
console.log(new Date('September 6, 2020'));
