// question 1
var questionOne = "a string value";

// question 2
var person = {
  name: "Ola Nordmann"
};

// question 3
var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4
var arrayNumbers = [1, 2, 3, 4, 5];
for (var i = 0; i < arrayNumbers.length; i++) {
  console.log(arrayNumbers[i]);
}

// question 5
for (var numbers = 15; numbers <= 25; numbers++) {
  console.log(numbers);
}

// question 6
for (var numbers = 15; numbers <= 25; numbers++) {
  if (numbers == 20) {
    console.log(numbers);
  }
}

// question 7
var elephants = [
  {
    species: "African forest elephant",
    age: 20,
    likesTheCold: true
  },
  {
    species: "Asian elephant",
    age: 62,
    likesTheCold: false
  }
];
for (var i = 0; i < elephants.length; i++) {
  console.log(elephants[i].age);
  console.log(elephants[i].likesTheCold);
}

// question 8
function whatIDontLike(bigAnimals) {
  console.log("I don't like " + bigAnimals);
}
whatIDontLike("giraffes");

// question 9 -
function twoArguments(argumentOne, argumentTwo) {
  var sum = argumentOne - argumentTwo;
  console.log(sum);
}
twoArguments(5, 3);

// question 10
var emptyArray = [];
function someWord(oneArgument) {
  emptyArray.push(oneArgument);
}
someWord(47);
