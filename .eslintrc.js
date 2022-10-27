module.exports = {
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
    "prettier/prettier": "error",
  },
};
