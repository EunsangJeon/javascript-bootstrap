function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i === 9) {
          return reject(new Error('Nine'));
        }
        if (i > 0) {
          console.log(i + '...');
        }
        else {
          resolve(console.log('GO!'));
        }
      }, (seconds - i) * 1000);
    }
  });
}

const countdownPromise = countdown(9);
countdownPromise
  .then(function() {
    console.log('completed succesfully');
  })
  .catch(function(err) {
    console.log(`countdown failed with error: ${err.message}`);
  });

const countdownPromise2 = countdown(5);
countdownPromise2
  .then(function() {
    console.log('completed succesfully');
  })
  .catch(function(err) {
    console.log(`countdown failed with error: ${err.message}`);
  });

countdown(13)
  .then(function() {
    console.log('completed succesfully');
  })
  .catch(function(err) {
    console.log(`countdown failed with error: ${err.message}`);
  });
