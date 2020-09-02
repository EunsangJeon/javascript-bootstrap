const EXAMPLE_ONE = {
  name: 'Julie',
  greetBackward: function() {
    const self = this; // without this expression, this will be bind to something else
    function getReverseName() {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()}`;
  },
};

console.log(EXAMPLE_ONE.greetBackward());

const EXAMPLE_TWO = {
  name: 'Sophie',
  greetBackward: function() {
    const getReverseName = () => {
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()}`;
  },
};

console.log(EXAMPLE_TWO.greetBackward());

const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function greet() {
  return `Hello, I'm ${this.name}`;
}

// console.log(greet()); // makes error since name is undefined
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

console.log(bruce);
console.log(madeline);

update.apply(bruce, [ 1955, 'actor' ]);
update.apply(madeline, [ 1918, 'writer' ]);

console.log(bruce);
console.log(madeline);

const updateBruce = update.bind(bruce);
updateBruce.call(madeline, 1274, 'king');

console.log(bruce);
console.log(madeline);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");

console.log(bruce);
