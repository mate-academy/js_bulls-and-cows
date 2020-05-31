'use strict';

const bullsAndCows = require('./bullsAndCows');

test('One bull and 2 cows', () => {
  expect(bullsAndCows('1234', '1345'))
    .toEqual({
      bulls: 1, cows: 2,
    });
});

test('4 bulls and 0 cows', () => {
  expect(bullsAndCows('1234', '1234'))
    .toEqual({
      bulls: 4, cows: 0,
    });
});

test('0 bulls and 4 cows', () => {
  expect(bullsAndCows('1234', '4321'))
    .toEqual({
      bulls: 0, cows: 4,
    });
});

test('Short enteredNumber parameter', () => {
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

test('Long enteredNumber parameter', () => {
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
