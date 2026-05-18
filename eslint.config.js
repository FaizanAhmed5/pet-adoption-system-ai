const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",

      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",

        // Jest globals
        jest: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
  },
];