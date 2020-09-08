const testString1 = 'As I was going to Saint Ives';
console.log(testString1.includes('going'));
console.log(testString1.includes('going', 10));
console.log(testString1.indexOf('going'));
console.log(testString1.indexOf('going', 10));
const testString2 = testString1.replace('going', 'walking');
console.log(testString1);
console.log(testString2);

const reg1 = /\w{3,}/ig;
console.log(testString1.match(reg1));
console.log(reg1.test(testString1));

const testString3 = testString1.replace(/\w{4,}/ig, '****');
console.log(testString3);

const testHTML1 = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
  '<script src="stuff.js">';
const matches1 = testHTML1.match(/area|a|link|script|source/ig);
console.log(matches1);

const beer99 = '99 bottles of beer on the wall ' +
  'take 1 down and pass it arround --' +
  '98 bottles of beer on the wall.';

const matches2 = beer99.match(/[a-z0-9.-]/ig);
console.log(matches2);
const matches3 = beer99.match(/[^a-z0-9.-]/g);
console.log(matches3);

const testCSS1 = 
  'hight:      9\n' +
  'medium:    5\n' +
  'low:    2\n';

const matches4 = testCSS1.match(/\s*\d/g);
console.log(matches4);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);

const testNotNull1 = '    something     ';
const matches5 = /\S/.test(testNotNull1);
console.log(matches5);

const matches6 = beer99.match(/\d+/g);
console.log(matches6);

const personalInfo1 = 'Address: 333 Main St., Anywhere, NY, 55532. Phone" 555-555-2525.';
const matches7 = personalInfo1.match(/\d{5}/);
console.log(matches7);

const testTEXT1 = 'Visit oreilly.com today!';
const matches8 = testTEXT1.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(matches8);

const testHTML2 = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' + 
  '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' + 
  '<link rel="stylesheet" href="//anything.com/flexible.css">';
const matches9 = testHTML2.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);

const testTEXT2 = 'Regex pros kno the difference between\n'
  + '<i>greedy</i> and <i>lazy</i> matching';
const matches10 = testTEXT2.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(matches10);
const matches11 = testTEXT2.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(matches11);

const testHTML3 = `<img alt='A "simple" example'>` +
  `<img alt="Don't abuse it!">`;
const matches12 = testHTML3.match(/<img alt=(['"]).*?\1/g);
console.log(matches12);

const testHTML4 = '<a class="nope" href="/yep">Yep</a>';
const matches13 = testHTML4.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(matches13);
const matches14 = testHTML4.replace(/<a .*?(class=".*?").*?(href=".*?").*?/, '<a $2 $1>');
console.log(matches14);

const testTEXT3 = "One two three";
console.log(testTEXT3.replace(/two/, '($`)'));
console.log(testTEXT3.replace(/two/, '($&)'));
console.log(testTEXT3.replace(/two/, "($')"));
console.log(testTEXT3.replace(/two/, '($$)'));

const testTEXT4 = 'It was the best of times';
console.log(testTEXT4.match(/^\w+/g));
console.log(testTEXT4.match(/\w+$/g));

const testTEXT5 = 'line one\nline two\nline three\nline four';
console.log(testTEXT5.match(/^\w+/mg));
console.log(testTEXT5.match(/\w+$/mg));

const testTEXTs1 = [
  'john@doe.com',
  'john@doe.com is my email',
  'my email is john@doe.com',
  'use john@doe.com, my email',
  'my email:john@doe.com',
];
const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9._-]*\.[a-z]+(?:\.[a-z]+)?\b/ig;
testTEXTs1.map(s => console.log(s.match(emailMatcher)));

function validPassword(p) {
  return /(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?!=.*[a-zA-Z0-9]))/.text(p);
}
