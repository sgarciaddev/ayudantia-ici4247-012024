/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 120,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
