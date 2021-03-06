module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        jquery: true,
        node: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'jest',
        'jest-dom',
        'flowtype',
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
        'testing-library',
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:flowtype/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/recommended',
        'plugin:testing-library/react',
        'prettier',
        'prettier/react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-global-assign': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                allow: ['error', 'info'],
            },
        ],
        'no-empty': 'error',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-redeclare': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'error',
        semi: ['error', 'always'],
        curly: ['error', 'all'],
        camelcase: [
            'error',
            {
                properties: 'always',
            },
        ],
        eqeqeq: ['error', 'smart'],
        'one-var-declaration-per-line': ['error', 'always'],
        'new-cap': 'error',
    },
    globals: {
        CKEDITOR: true,
        ga: true,
        gettext: true,
        interpolate: true,
        mdn: true,
        Mozilla: true,
        waffle: true,
        Prism: true,
        Promise: true,
    },
};
