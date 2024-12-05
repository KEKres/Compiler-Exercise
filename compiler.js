module.exports = function compiler(input) {
    // 1. Lexical Analysis - Break the input code (string) into the basic syntax of language (array of objects)
    const tokens = tokeniser(input);
    // 2. Syntactic Analysis
    // 3. Transformation
    // 4. Code Generation
    //
    // return jsCode;
  }