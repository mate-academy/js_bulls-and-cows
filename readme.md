# The "Bulls & Cows" game

**Read the guideline before start**

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

## Rules

- computer randomly generates a number of 4 different digits
- player enters a number of 4 different digits too
- computer compares given numbers and shows a result of 'bulls' and 'cows'
- `bull` - guessed digit is on its place (index)
- `cow` - guessed digit exists in the number but the place (index) is wrong

## Example
Computer makes `1234`, user prints `1345`. The result is one `bull` (guessed
digit `1` is on it's place) and 2 `cows` (digits `3` and `4` are present but on
wrong places). 

## Additional scripts
`npm run play` - run game
