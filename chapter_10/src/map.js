// map

const u1 = { name: 'John'};
const u2 = { name: 'Paul'};
const u3 = { name: 'George'};
const u4 = { name: 'Ringo'};

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');

const userRolesWithArray = new Map([
  [ u1, 'User' ],
  [ u2, 'User' ],
  [ u3, 'Admin' ],
]);

console.log(userRoles.get(u2));

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log(userRoles.size);

console.log(typeof userRoles.keys());
console.log(userRoles.keys());

for (let u of userRoles.keys())
  console.log(u.name);

for (let r of userRoles.values())
  console.log(r);
