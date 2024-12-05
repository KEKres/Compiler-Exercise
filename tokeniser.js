const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/; // regex that matches any whitespace character
const NUMBERS = /\d/;

export default function tokeniser(input) {
  const tokens = [];
  let current = 0;
  while (current < input.length) {
    let char = input[current]; // instead of const so we can change it
    
    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        value: char // have to change this token value
      });
      current++;
      continue;
    }

    if (LETTERS.test(char)) {
      // do thing (thing = collect chars into a single variable, n check if the current char matches it)
      let value = '';
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'name',
        value
      });

      continue;
    }

    if (WHITESPACE.test(char)) {
      current++;
      continue;

    }

    if (NUMBERS.test(char)) {
      let value = '';
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'number',
        value
      });
      continue;
    }

    throw new TypeError(`Unknown char: '${char}'`);
  }
  return tokens;
}
