const { dirs } = require("./paths.js");
const pattern = {
  src: `${dirs.src}/**/*.ts`,
  scripts: `${dirs.scripts}/**/*.ts`,
  paths: "paths.js",
  eslintrc: ".eslintrc.js",
};
const patterns = (() => {
  const src = [pattern.src];
  const scripts = [pattern.scripts];
  const lintedTs = [...src, ...scripts];
  const node = [pattern.scripts, pattern.paths, pattern.eslintrc];
  const lintedAll = [...lintedTs, ...node];
  return { src, scripts, lintedTs, lintedAll, node };
})();

// ----------------------------------------------------------------------------
// https://eslint.org/docs/user-guide/configuring

/** @type {ESLintConfig} */
const config = {
  ignorePatterns: [`/${dirs.tsOut}/`, `/${dirs.dist}/`],

  // common to all
  env: { es6: true },
  parserOptions: { sourceType: "module" },

  overrides: [
    // all *.js files
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

    // all *.ts files
    {
      files: ["**/*.ts"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },

    // basic rules
    {
      files: patterns.lintedAll,
      extends: ["eslint:recommended", "prettier"],
    },

    // basic rules for *.ts
    {
      files: patterns.lintedTs,
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
    {
      files: patterns.src,
      parserOptions: { project: `${dirs.src}/tsconfig.json` },
    },
    {
      files: patterns.scripts,
      parserOptions: { project: `${dirs.scripts}/tsconfig.json` },
    },

    // files for Node.js
    {
      files: patterns.node,
      env: {
        es2017: true,
        es2020: true,
        node: true,
      },
    },
  ],
};

module.exports = config;

/** @typedef {import("eslint").Linter.Config} ESLintConfig */
