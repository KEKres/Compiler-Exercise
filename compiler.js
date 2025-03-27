import tokeniser from './tokeniser.js';
import parser from './parser.js';
import transformer from './transformer.js';

export default function compiler(input) {
    // 1. Lexical Analysis - Break the input code (string) into the basic syntax of language (array of objects)
    const tokens = tokeniser(input);
    // 2. Syntactic Analysis - building a fully formed representation of our program.
    //      Transforms the tokens (array of objects) into an AST (tree of objects) which represents our program
    const lispAST = parser(tokens);
    // 3. Transformation - transforms our original List AST into our target Javascript AST
    const jsAST = transformer(lispAST);
    // 4. Code Generation
    return jsAST;
}