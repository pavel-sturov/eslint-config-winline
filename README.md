![Build Status](https://img.shields.io/bundlephobia/min/eslint-config-winline)
![Build Status](https://img.shields.io/github/package-json/v/pavel-sturov/eslint-config-winline?color=green)

<img src="https://raw.githubusercontent.com/pavel-sturov/eslint-config-winline/2ba75298b108b7c8d7ff5ee5828013ab1ce5fd11/src/assets/logo.svg" alt="drawing" width="200"/> 

# ESLint config Winline mobile

Package based on Airbnb, React & TypeScript-Eslint recommended rules.

# Installation

Using npm:

```sh
$ npm install eslint-config-winline --save-dev
```

Using yarn:

```sh
$ yarn add eslint-config-winline --dev
```

# Configuration

## package.json

```
  "eslintConfig": {
    "extends": [
      "eslint-config-winline"
    ]
  },
```

## .eslintrc.*

```
module.exports = {
  ...
    extends: [
      'eslint-config-winline',
    ],
  ...
}
```

# Includes:

| Package          | About                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------|
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)          | An ESLint plugin which provides lint rules for TypeScript codebases.                               |
| [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)           | This package provides Airbnb's .eslintrc as an extensible shared config.                           |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)     | This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues. |
| [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)         | Static AST checker for accessibility rules on JSX elements.                                        |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)           | React specific linting rules for eslint.                                                           |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | This ESLint plugin enforces the Rules of Hooks.                                                    |
