module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "react-app",
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all'
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    "@typescript-eslint/no-unused-vars": 'error',
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/ban-ts-ignore": 'off',
  }
};
