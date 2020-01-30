/* eslint-disable */
'use strict';

//git test
class View {
  constructor() {
    this.input = document.querySelector('.js__input');
    this.resultList = document.querySelector('.js__result');
  }

  createUserInputValue(data) {
      return `You enter: ${data}`;
  }

  createBullsValue(obj) {
    return `Bulls: ${obj.bulls}`;
  }

  createCowsValue(obj) {
    return `Cows: ${obj.cows}`;
  }

  createRow(obj, numbers) {
    let markup;
    console.log(control.rundomNumbers , "RUNDOM")

    if (obj.bulls === 4 && obj.cows === 0) {
      markup = '<li class="game__item flex__container game__winn">' +
      '<span>' + '\n' +
        'You won! Congratulations! The number is ' + control.rundomNumbers + '</span>' +
      '</li>';
      this.resultList.insertAdjacentHTML('beforeend', markup);
    }

    if(control.error === undefined){
      markup = '<li class="game__item flex__container">' +
        '<span>' + this.createUserInputValue(numbers) + '</span>' +
        '<span>' + this.createBullsValue(obj)+ '</span>' +
        '<span>' + this.createCowsValue(obj)+ '</span>' +
        '</li>';
    }else {
      markup = '<li class="game__item flex__container">' +
        '<span>' + control.error; + '</span>' +
        '</li>';
    }

    this.resultList.insertAdjacentHTML('beforeend', markup);
  }

  resetList () {
    this.resultList.innerHTML = '';
  }

};

class Controller {

  constructor() {
    this.btnStart = document.querySelector('.js__btn-start');
    this.btnAgain = document.querySelector('.js__btn-again');
    this.btnReset = document.querySelector('.js__btn-reset');
    this.viewModel = new View();
  }

  getNumbersFromUser() {
    const str = prompt('Input four numbers from 0 to 9');

    return str;
  }

  numbersGenerator() {
    function generatedOneNumber() {
      return Math.floor(Math.random() * (0 - 9 + 1)) + 9;
    }

    const rundomNumbers = [];

    for (let i = 0; rundomNumbers.length < 4; i++) {
      let num = generatedOneNumber()
      if (!rundomNumbers.includes(num)) {
        rundomNumbers.push(num);
      }
    }

    return rundomNumbers.join('');
  }

  startGame() {

    delete this.error;
    this.btnStart.setAttribute('disabled', true);
    this.btnAgain.removeAttribute('disabled');
    this.btnReset.removeAttribute('disabled');

    this.rundomNumbers = this.numbersGenerator().toString();
    this.usersNumbers = this.getNumbersFromUser().toString();
    this.responseObject = bullsAndCows(this.rundomNumbers, this.usersNumbers);

    this.viewModel.createRow(this.responseObject, this.usersNumbers);
  }

  tryAgain () {
    delete this.error;
    this.usersNumbers = this.getNumbersFromUser().toString();
    console.log(bullsAndCows(this.rundomNumbers, this.usersNumbers))
    this.responseObject = bullsAndCows(this.rundomNumbers, this.usersNumbers);
    this.viewModel.createRow(this.responseObject, this.usersNumbers);

    if (this.responseObject.bulls === 4 && this.responseObject.cows === 0) {
      this.btnAgain.setAttribute('disabled', 'disabled');
    }
  }

  resetGame () {
    this.viewModel.resetList();

    delete this.error;
    delete this.rundomNumbers;
    delete this.usersNumbers;
    delete this.responseObject;

    this.btnStart.removeAttribute('disabled');
    this.btnAgain.setAttribute('disabled', 'disabled');
    this.btnReset.setAttribute('disabled', 'disabled');
  }
}

const control = new Controller();




function bullsAndCows(generatedNumber, enteredNumber) {
  const response = {
    'bulls': 0,
    'cows': 0,
  };

  if (enteredNumber === undefined || enteredNumber.length !== 4) {
    control.error = "You entered the wrong value. Try again!"
    return undefined;
  }

  for (let i = 0; i < 4; i++) {
    if (enteredNumber.indexOf(enteredNumber[i], i + 1) > 0) {
      control.error = "Enter non-duplicate numbers!"
      return undefined;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      response.bulls += 1;
    } else if (generatedNumber.includes(enteredNumber[i])) {
      response.cows += 1;
    }
  }
  return response;
}

control.btnStart.addEventListener('click', control.startGame.bind(control));
control.btnAgain.addEventListener('click', control.tryAgain.bind(control));
control.btnReset.addEventListener('click', control.resetGame.bind(control));
