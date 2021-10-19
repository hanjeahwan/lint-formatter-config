# Stylelint Config Preset

[![HanJeaHwan](https://circleci.com/gh/hanjeahwan/lint-formatter-config.svg?style=shield&circle-token=65b771ace31fbc5f2bac533456890c5524624dc6)](https://circleci.com)
[![NPM version](https://img.shields.io/npm/v/@dlwlrma/stylelint-config.svg)](https://www.npmjs.org/package/@dlwlrma/stylelint-config)
[![NPM Downloads](https://img.shields.io/npm/dm/@dlwlrma/stylelint-config.svg)](https://npmcharts.com/compare/@dlwlrma/stylelint-config?minimal=true)

## Installation

```bash
yarn add @dlwlrma/stylelint-config --D
```

After installation create a file `stylelint.config.js` at project root and extend the config:

```json
{
  "extends": ["@dlwlrma/stylelint-config"],
  "rules": {}
}
```

## Usage

Simply read the [stylelint](https://github.com/stylelint/stylelint) documentation and follow those instructions.

## Git Hook

Setup pre-commit hook for styles linting.

```bash
yarn add husky --D
npm install husky --save-dev
```

Update `package.json`

```json
 "scripts": {
    "lint:style": "stylelint \"**/*.less\" --syntax less --fix --allow-empty-input",
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint:style"
    }
  },
```
