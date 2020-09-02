const obj = {};

obj.color = "yellow";

const sam1 = {
  name: "Sam",
  age: 4,
};

const sam2 = { name: "Sam", age: 4 };

const sam3 = {
  name: "Sam",
  classfication: {
    kingdom: "Anamalia",
    phylum: "Chordata",
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: "catus",
  },
};

sam3.speak = function() {
  console.log("Meow!");
};

sam3.speak();

delete sam3.speak;

const greeting = "hello";
console.log(greeting.toUpperCase);