const EventEmitter = require('events').EventEmitter;
const SECOND = 1000;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function(resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        timeoutIds.push(
          setTimeout(function() {
            if (countdown.superstitious && i === 13) {
              timeoutIds.forEach(clearTimeout);
              return reject(new Error('Oh lord...'));
            }
            countdown.emit('tick', i);
            if (i === 0) {
              resolve();
            }
          }, (countdown.seconds - i) * SECOND));        
      }
    });
  }
}

function launch() {
  return new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) {
      return;
      // Never skip resolve and reject.
      // this is only for test.
    }
    console.log('Lift off!');
    setTimeout(function() {
      resolve("In orbit!");
    }, 2 * SECOND);
  });
}

function addTimeout(fn, timeout = 3 * SECOND) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(
        reject,
        timeout,
        new Error('promise time out')
      );

      fn(...args)
        .then(function(...args) {
          clearTimeout(tid);
          resolve(...args);
        })
        .catch(function(...args) {
          clearTimeout(tid);
          reject(...args);
        });
    });
  };
}

const countdownClass = new Countdown(5, true)
  .on('tick', function(i) {
    if(i > 0)
      console.log(`${i}...`);
  });

countdownClass.go()
  .then(addTimeout(launch))
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error(err.message);
  });

const countdownClass2 = new Countdown(15, true)
  .on('tick', function(i) {
    if(i > 0)
      console.log(`${i}...`);
  });

countdownClass2.go()
  .then(addTimeout(launch))
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error(err.message);
  });
