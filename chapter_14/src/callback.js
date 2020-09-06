console.log(`Before timeout: ${new Date()}`);
function afterTimeoutRecord() {
  console.log(`After timeout: ${new Date()}`);
}
setTimeout(afterTimeoutRecord, 1000);
console.log('this one is after the timeout');

let i = 0;
const intervalId = setInterval(function() {
  if(i++ >= 10){
    return clearInterval(intervalId);
  }
  console.log(`${i}: ${new Date()}`);
}, 1000);

function countdown1() {
  let i;
  console.log('Start countdown:');
  for (i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? 'GO!' : i);
    }, (5 - i) * 1000);
  }
}
  
countdown1();

function countdown2() {
  console.log('Start countdown:');
  for (let i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? 'GO!' : i);
    }, (5 - i) * 1000);
  }
}

countdown2();
