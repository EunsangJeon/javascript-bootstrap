module.exports = {
  env: {
    es2015: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "comma-dangle": [ 2, "always-multiline" ],
    indent: [ 2, 2 ],
    "no-unused-vars": 0,
    semi: [ 2, "always" ],
    "array-bracket-spacing": [ 2, "always" ],
    "comma-spacing": [ "error", { before: false, after: true } ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
  },
};
