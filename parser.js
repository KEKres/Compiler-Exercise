// This file recieves the tokens (array of objects) as an argument and returns an AST (object of objects)
export default function parser(tokens) {
    // Create a pointer to the current token and increment it when needed.
    // The walk function will be executed in a recursive manner and place each new node in the current place in the AST
    let current = 0;
    function walk() {
        let token = tokens[current];
        // do stuff
        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value
            }
        }
        // our opening and closing parentheses have the same token type - "paren" so we need to differentiate them
        if (token.type === 'paren' && token.value === '('){
            token = tokens[++current];
            const expression = {
                type: 'CallExpression',
                name: token.value,
                params: []
            };
            token = tokens[++current];
            while (token.value !== ')') {
                expression.params.push(walk());
                token = tokens[current];
            }
            current++;
            return expression;
        }

        throw new TypeError(`Unknown token: '${token.type}'`);
    }

    const ast = {
        type: 'Program', // The tree's root node, type "Program" with a property of "body"
        body: [walk()]
    };

    return ast;
}