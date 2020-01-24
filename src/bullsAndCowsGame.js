'use strict';

function bullsAndCowsGame() {
  let history = '';
  let count = 0;

  function enteredFourDigits() {
    const entered = window.prompt('Enter your number',
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
          window.alert('Wrong number! Digits should not be repeated.');

          return undefined;
        }
      }
    }

    count++;
    history += `${count}.  ${entered}\n`;

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

  function generateNumberByComp() {
    let numbers = '';

    while (numbers.length < 4) {
      const number = Math.trunc(Math.random() * 10);

      if (!numbers.includes(String(number))) {
        numbers += number;
      }
    }

    return numbers;
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
      window.alert(`You win!!!
Bulls: ${resultObj.bulls}, Cows: ${resultObj.cows}`);
    } else {
      window.alert(`Your numbers:
${history}
Bulls: ${resultObj.bulls}, Cows: ${resultObj.cows}`);
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
