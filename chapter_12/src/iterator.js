const book = [
  'line 0',
  'line 1',
  'line 2',
  'line 3',
  'line 4',
  'line 5',
  'line 6',
  'line 7',
  'line 8',
  'line 9',
];
6;
const it1 = book.values();

for (it1;;) {
  const obj = it1.next();
  console.log(obj);
  if(obj.done)
    break;
}

const it2 = book.values();
let current = it2.next();
while(!current.done) {
  console.log(current.value);
  current = it2.next();
}

class LogOne {
  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push({message, timestamp: Date.now()});
  }

  [Symbol.iterator]() {
    return this.messages.values();
  }
}

const log1 = new LogOne();
log1.add("line 1");
log1.add("line 2");
log1.add("line 3");

for (let message of log1) {
  console.log(`${message.message}@${message.timestamp}`);
}

class LogTwo {
  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }

  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if ( i >= messages.length)
          return { value: undefined, done: true};
        return { value: messages[i++], done: false };
      },
    };
  }
}
