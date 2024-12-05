const LETTERS = /[a-z]/i;

export default function tokeniser(input) {
  const tokens = [];
  let current = 0;
  while (current < input.length) { 
      let char = input[current]; // instead of const so we can change it
      if (char === '(') {
          tokens.push({
              type: 'paren',
              value: '('
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

      throw new TypeError(`Unknown char: '${char}'`);
  }
  return tokens;
}
