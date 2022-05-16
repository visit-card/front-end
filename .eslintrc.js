module.exports = {
    'parser': '@babel/eslint-parser',
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': '2021',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': true
            }
        ],
        'quotes': ['error', 'single'],
        'semi': 0,
    }
}
