'use strict';

const bullsAndCows = require('./bullsAndCows');

test('One bull and 2 cows', () => {
  expect(bullsAndCows('1234', '1345'))
    .toEqual([1, 2]);
});

test('4 bulls and 0 cows', () => {
  expect(bullsAndCows('1234', '1234'))
    .toEqual([4, 0]);
});

test('0 bulls and 4 cows', () => {
  expect(bullsAndCows('1234', '4321'))
    .toEqual([0, 4]);
});

test('Short enetedNumber parameter', () => {
  expect(bullsAndCows('1234', '12'))
    .toBe(undefined);
});

test('Missing enteredNumber parameter', () => {
  expect(bullsAndCows('1234', undefined))
    .toBe(undefined);
});

test('Wrong enteredNumber parameter', () => {
  expect(bullsAndCows(
    '1234',
    '76398(*&)HILJKBEQAILU(*76398425')
  )
    .toBe(undefined);
});

test('Long enetedNumber parameter', () => {
  expect(bullsAndCows('1234', '123456'))
    .toBe(undefined);
});

test('enteredNumber parameter contains repeating digits', () => {
  expect(bullsAndCows('1234', '1122'))
    .toBe(undefined);
});

test('enteredNumber is empty string', () => {
  expect(bullsAndCows('1234', ''))
    .toBe(undefined);
});
