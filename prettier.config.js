/* @type {import("prettier").Config}*/
export default {
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  arrowParens: "avoid",
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-jinja-template"],
  overrides: [
    {
      files: ["*.njk"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
};
