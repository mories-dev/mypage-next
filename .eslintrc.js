module.exports = {
  env: {
    'browser': true,
    'es6': true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
   'quotes': [
      "error",
      "single"
   ],
   'semi': [
      "error",
      "always"
   ],
   'no-console': [
      "warn",
      {
        'allow': ["warn", "error"]
      }
   ],
  },
};
