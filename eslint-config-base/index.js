module.exports = {
    extends: [
        'airbnb-base',
        './rules/best-practicies.js',
        './rules/errors.js',
        './rules/es6.js',
        './rules/imports.js',
        './rules/node.js',
        './rules/strict.js',
        './rules/style.js',
        './rules/variables.js'
    ],
    env: { node: true }
};
