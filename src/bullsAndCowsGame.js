'use strict';

function bullsAndCowsGame() {
  function enteredFourDigits() {
    const entered = window.prompt('Enter 4-digit number with different digits',
      1234);

    if (entered === null) {
      return entered;
    }

    if (!/^[0-9]{4}$/.test(entered)) {
      window.alert('Wrong number! Input number again.');

      return undefined;
    }

    for (let k = 0; k < entered.length; k++) {
      for (let j = k + 1; j < entered.length; j++) {
        if (entered[k] === entered[j]) {
          window.alert('Wrong number! Input number again.');

          return undefined;
        }
      }
    }

    return entered;
  }

  let enteredNum = enteredFourDigits();

  if (enteredNum === null) {
    window.alert('Try again later');

    return undefined;
  }

  while (enteredNum === undefined) {
    enteredNum = enteredFourDigits();
  }

  function random(min, max) {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    );
  }

  function generateNumberByComp() {
    let result = '';

    const firstNum = random(0, 9);
    let secondNum;
    let thirdNum;
    let fourthNum;

    do {
      secondNum = random(0, 9);
    } while (firstNum === secondNum);

    do {
      thirdNum = random(0, 9);
    } while (thirdNum === firstNum || thirdNum === secondNum);

    do {
      fourthNum = random(0, 9);
    } while (fourthNum === firstNum
      || fourthNum === secondNum
      || fourthNum === thirdNum);

    result = result + firstNum + secondNum + thirdNum + fourthNum;

    return result;
  }

  const generatedNum = generateNumberByComp();

  function bullsAndCows(generatedNumber, enteredNumber) {
    let countBulls = 0;
    let countCows = 0;

    for (let i = 0; i < generatedNumber.length; i++) {
      if (enteredNumber[i] === generatedNumber[i]) {
        countBulls++;
      } else if (generatedNumber.includes(enteredNumber[i])) {
        countCows++;
      }
    }

    const resultObj = {
      'bulls': countBulls,
      'cows': countCows,
    };

    if (generatedNum === enteredNum) {
      window.alert('You win!!!\nBulls: '
      + resultObj.bulls
      + ', Cows: '
      + resultObj.cows);
    } else {
      window.alert('Your number: '
      + enteredNum
      + '\nBulls: '
      + resultObj.bulls
      + ', Cows: '
      + resultObj.cows);
    }
  }

  bullsAndCows(generatedNum, enteredNum);

  while (generatedNum !== enteredNum) {
    if (window.confirm('Continue to play?')) {
      enteredNum = enteredFourDigits();

      while (enteredNum === undefined) {
        enteredNum = enteredFourDigits();
      }

      bullsAndCows(generatedNum, enteredNum);
    } else {
      window.alert('Try again later');
      break;
    }
  }
}

const playButton = document.querySelector('.game-button');

playButton.onclick = () => {
  bullsAndCowsGame();
};
