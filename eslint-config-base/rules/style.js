module.exports = {
    rules: {
    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: ['JSXElement', 'JSXElement *']
        }],
        // allow line length 120 instead of default 100
        // https://eslint.org/docs/rules/max-len
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        // allow single line destruction and require multiline creation for objects with more than one property
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                minProperties: 2
            },
            ObjectPattern: 'never'
        }],
        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: false,
        }],
        // allow spacing in multiline objects after column
        // https://eslint.org/docs/rules/key-spacingå
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'minimum'
        }],
        // coma dangle in functions invocation
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', {
            functions: 'never',
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
        }]
    }
};
