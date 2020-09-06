// moment-timezone module
const moment = require('moment-timezone');

// Basic
console.log(new Date());

// Date with human friendly numbers
console.log(new Date(2020, 0));
console.log(new Date(2020, 8, 6));
console.log(new Date(2020, 8, 6, 9));
console.log(new Date(2020, 8, 6, 9, 30));
console.log(new Date(2020, 8, 6, 9, 30, 12));
console.log(new Date(2020, 8, 6, 9, 30, 12, 500));

// unix timestamp (from unix epoch)
console.log(new Date(0));
console.log(new Date(1599379892083));
console.log(new Date(-365 * 24 * 60 * 60 * 1000));

// string
console.log(new Date('September 6, 2020'));

// UTC
console.log(new Date(Date.UTC(2020, 8, 6)));

// timezone setting with moment
console.log(moment.tz([ 2020, 8, 6, 9, 19 ], 'America/Los_Angeles').toDate());
console.log(moment.tz([ 2020, 8, 6, 9, 19 ], 'Asia/Seoul').toDate());

// Date transfer with string
const before = {
  d: new Date(),
};

const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(typeof after.d);

const recoveredTime = new Date(after.d);
console.log(typeof recoveredTime);
console.log(recoveredTime);

// Date transfer with utc timestamp
const beforeAgain = {
  d: new Date().valueOf,
};

const jsonAgain = JSON.stringify(beforeAgain);
const afterAgain = JSON.parse(jsonAgain);

const recoveredTimeAgain = afterAgain.d;
console.log(new Date(recoveredTime));

// Format with moment
const dateTest = new Date(Date.UTC(2020, 2, 3));
console.log(dateTest.toTimeString());
console.log(moment(dateTest).format("YYYY-MM-DD HH:mm Z"));
