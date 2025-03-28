import compiler from './compiler.js';

const input = '(add 2 3 4 (sub 6 5))';
const output = compiler(input);
console.log(output);