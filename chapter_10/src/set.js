// Set

const roles = new Set();

roles.add("User");
console.log(roles);

roles.add("Admin");
console.log(roles);

console.log(roles.size);

roles.delete("Admin");
console.log(roles);
