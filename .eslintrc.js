module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    __dirname: "readonly",
    analytics: "readonly",
    process: "readonly",
    Promise: "readonly",
    require: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  plugins: ["sort-imports-es6-autofix", "@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // CARGO This works because some rando GitHubber said it might.
        // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
        "@typescript-eslint/no-unused-vars": "warn",
      },
    },
  ],
};
