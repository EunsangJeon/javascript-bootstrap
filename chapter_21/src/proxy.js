const USER_EMAIL = Symbol();
class User {
  set email(value) {
    if(!/@/.test(value))
      throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }

  get email() {
    return this[USER_EMAIL];
  }
}

const user1 = new User();
user1.email = 'test@test.com';
console.log(user1.email);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.hegith = height;
  }
  get perimeter() {
    return this.width * 2 + this.hegith * 2;
  }
  get area() {
    return this.width * this.hegith;
  }
}

const rect1 = new Rectangle(9, 3);
console.log(rect1.area);

const obj1 = {
  foo: 'bar',
};
console.log(Object.getOwnPropertyDescriptor(obj1, 'foo'));

const appInfo = {
  company: 'A, Inc.',
  version: '1.3.4',
  buildId:'923uf9-124134saaa-124sd',
};

Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));

class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }

  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now(),
    });
  }
}

const log1 = new Logger("me speaking");
Object.seal(log1);
console.log(Object.isSealed(log1));

const log2 = new Logger("don't care");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));

const coefficients = {
  a: 1,
  b: 2,
  c: 5,
};

const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    return target[key] || 0;
  },
});

function evaluate(x, co) {
  return co.a + co.b * x + co.c * Math.pow(x, 2);
}

const cook = {
  name: 'walt',
  redPhosphorus: 100,
  water: 500,
};

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    //statement like if xxx do yyy, else zzz
  },
});
