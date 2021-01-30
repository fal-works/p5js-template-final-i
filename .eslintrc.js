// https://eslint.org/docs/user-guide/configuring

/** @type {ESLintConfig} */
const config = {
  ignorePatterns: ["/ts-out/", "/dist/"],

  // config common to all
  env: {
    es6: true,
  },

  overrides: [
    // config for all JavaScript files
    {
      files: ["**/*.js"],
      rules: {
        "lines-around-comment": [
          "error",
          {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,
          },
        ],
      },
    },

    // config for all TypeScript files
    {
      files: ["**/*.ts"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },

    // config with basic rules
    {
      files: ["src/**/*.ts", "scripts/**/*.ts", "paths.js", ".eslintrc.js"],
      extends: ["eslint:recommended", "prettier"],
    },

    // config for cjs
    {
      files: ["paths.js", ".eslintrc.js"],
      env: {
        node: true,
      },
    },

    // config with basic rules for TypeScript
    {
      files: ["src/**/*.ts", "scripts/**/*.ts"],
      parserOptions: {
        sourceType: "module",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "no-fallthrough": "off", // already checked by TypeScript
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": ["warn", { fixToUnknown: true }],
      },
    },

    // config for source code in TypeScript
    {
      files: ["src/**/*.ts"],
      parserOptions: { project: "src/tsconfig.json" },
    },

    // config for own scripts
    {
      files: ["scripts/**/*.ts"],
      parserOptions: {
        project: "scripts/tsconfig.json",
        ecmaVersion: 2020,
      },
      env: {
        es2017: true,
        es2020: true,
      },
    },
  ],
};

module.exports = config;

/** @typedef {import("eslint").Linter.Config} ESLintConfig */
