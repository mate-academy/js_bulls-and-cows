'use strict';

const readline = require('readline');
const bullsAndCows = require('./bullsAndCows');

const generateRandomDigit = () => `${Math.floor(Math.random() * 10)}`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter 4 digits number: ', (enteredNumber) => {
  let generatedNumber = '';
  for (let i = 0; i < 4; i += 1) {
    let digit = generateRandomDigit();
    while (generatedNumber.includes(digit)) {
      digit = generateRandomDigit();
    }
    generatedNumber += digit;
  }

  const result = bullsAndCows(generatedNumber, enteredNumber);

  let answer = '';

  if (typeof result === 'undefined') {
    answer = 'Wrong input. Please enter 4 different digits number.';
  } else {
    const { bulls, cows } = result;

    answer = `The result is ${bulls} bull(s) and ${cows} cow(s)`;
  }

  console.log(
    `Computer generated ${generatedNumber}, you entered ${enteredNumber}.
    ----
    ${answer}`);

  rl.close();
});
