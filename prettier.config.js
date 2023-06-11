module.exports = {
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    bracketSpacing: true,
    arrowParens: 'avoid',
    printWidth: 80,
    jsxSingleQuote: false,
    jsxBracketSameLine: false,
    endOfLine: 'auto',
    overrides: [
      {
        files: '*.json',
        options: {
          tabWidth: 2,
        },
      },
    ],
  };
  