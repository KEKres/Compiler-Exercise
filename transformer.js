import traverse from './traverse.js';

export default function transformer(originalAST) {
    const jsAST = {
        type: 'Program',
        body: []
    };

    // define position variable and point it to "body" property of the root node
    let position = jsAST.body;

    // receive an AST and an object
    traverse(originalAST, {
        NumberLiteral(node) {
            position.push({
                type: 'NumericLiteral',
                value: node.value
            });
        },
        CallExpression(node, parent) {
            let expression = {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: node.name
                },
                arguments: []
            };
            const prevPosition = position;
            position = expression.arguments;
            if (parent.type !== 'CallExpression') {
                expression = {
                    type: 'ExpressionStatement',
                    expression
                };
            }
            prevPosition.push(expression);  
        }
    });

    return jsAST;
}