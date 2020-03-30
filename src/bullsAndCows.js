'use strict';

/**
 * Implement bullsAndCows function:
 *
 * Function takes 2 strings: generatedNumber (generated by computer) and
 * enteredNumber (entered by player) and returns count of bulls and cows
 * according to rules (see readme.md). Each parameter should be exactly 4 digits
 * long.
 *
 * Function returns result as object with properties 'bulls' and 'cows' where
 * 'result.bulls' is a count of bulls and result.cows is a count of cows.
 *
 * If wrong parameter enteredNumber is given function returns undefined.
 *
 * bullsAndCows('1234', '1345') === [1, 2]
 * bullsAndCows('1234', '1234') === [4, 0]
 * bullsAndCows('1234', '') === undefined
 * bullsAndCows('1234', '12') === undefined
 * bullsAndCows('1234', 'asdf') === undefined
 * bullsAndCows('1234', '1234567890') === undefined
 *
 * @param {string} generatedNumber - generated by computer
 * @param {string} enteredNumber - entered by a player
 *
 * @return {object} - like {bulls: 0, cows: 0}
 */
function bullsAndCows(generatedNumber, enteredNumber) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  if (!enteredNumber) {
    return;
  }

  if (enteredNumber.length === 4) {
    for (let i = 0; i < generatedNumber.length; i++) {
      const charOfEntered = enteredNumber.charAt([i]);
      const charOfGenerated = generatedNumber.charAt([i]);

      if (charOfGenerated === charOfEntered) {
        result.bulls++;
      } else if (generatedNumber.includes(enteredNumber[i])) {
        result.cows++;
      }

      if (enteredNumber[i] === enteredNumber[i + 1]) {
        return;
      }
    }
  } else {
    return;
  }

  return result;
}

module.exports = bullsAndCows;
