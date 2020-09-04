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
