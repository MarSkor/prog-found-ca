// question 1
var numbers;
for (var numbers = 15; numbers <= 25; numbers++) {
  if (numbers % 2 === 0) {
    console.log(numbers);
  }
}

// question 2
function logSentence(aSentence) {
  console.log(aSentence);
}
logSentence("I am a function");
var innerFunction = logSentence;
function outerFunction(oneArgument) {
  console.log(oneArgument);
  oneArgument();
}
outerFunction(innerFunction);
