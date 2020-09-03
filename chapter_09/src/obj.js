const SYM = Symbol();
const obj1 = {a: 1, b:2, c:3, [SYM]: 4};
for (let prop in obj1) {
  if (!Object.prototype.hasOwnProperty.call(obj1, prop))
    continue;
  console.log(`${prop}: ${obj1[prop]}`);
}

Object.keys(obj1).forEach(key => console.log(`${key}: ${obj1[key]}`));

const obj2 = {apple:1, xochitl:2, balllon:3, guitar:4, xylophone:5};

Object.keys(obj2)
  .filter(key => key.match(/^x/))
  .forEach(key => console.log(`${key}: ${obj2[key]}`));
