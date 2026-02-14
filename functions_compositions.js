const R = require("ramda");

// Given Sentence

const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

// Fuction Test if Character is a Number

const isNumericCharacter = (char) => !isNaN(char) && char !== " ";

// Count Numbers in the Sentence with pipe and split and filter

const countNumbers = R.pipe(
  R.split(""), // split the sentence into an array of characters
  R.filter(isNumericCharacter), // filter the array to keep only numeric characters
  R.length, // count the length of the filtered array
);

// Result of the countNumbers Function

const result = countNumbers(sentence);

console.log(result);
