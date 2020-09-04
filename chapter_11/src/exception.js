function validateEmail(email) {
  if(email.match(/@/)){
    return email;
  }
  throw new Error(`Invalid email '${email}'`);
}

const email1 = 'test@test.com';
const email2 = 'hehe';
const email3 = null;

try {
  validateEmail(email1);
}
catch (err) {
  console.error(`Error: ${err.message}`);
}
finally {
  console.log("DONE");
}

try {
  validateEmail(email2);
}
catch (err) {
  console.error(`Error: ${err.message}`);
}
finally {
  console.log("DONE");
}

try {
  validateEmail(email3);
}
catch (err) {
  console.error(`Error: ${err.message}`);
}
finally {
  console.log("DONE");
}
