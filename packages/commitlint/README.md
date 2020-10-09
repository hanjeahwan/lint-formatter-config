# Commitlint Config Preset

[![HanJeaHwan](https://circleci.com/gh/hanjeahwan/lint-formatter-config.svg?style=shield&circle-token=65b771ace31fbc5f2bac533456890c5524624dc6)]()
[![NPM version](https://img.shields.io/npm/v/@dlwlrma/commitlint-config.svg)](https://www.npmjs.org/package/@dlwlrma/commitlint-config)
[![NPM Downloads](https://img.shields.io/npm/dm/@dlwlrma/commitlint-config.svg)](https://npmcharts.com/compare/@dlwlrma/commitlint-config?minimal=true)

## Installation

```bash
yarn add @dlwlrma/commitlint-config --D
```

After installation create a file `commitlint.config.js` at project root and extend the config:

```json
{
  "extends": ["@dlwlrma/commitlint-config"],
  "rules": {}
}
```

## Usage

Example for enforce ticket reference at commit message body

```json
{
  "extends": ["@dlwlrma/commitlint-config"],
  "rules": {
    "ticket-rule": [2, "always", ["TICKET-"]]
  }
}
```

Simply read the [commitlint](https://github.com/conventional-changelog/commitlint) documentation about using the linter and follow those instructions.

## Git Hook

Setup pre-commit hook for linting commit message.

```bash
yarn add husky --D
npm install husky --save-dev
```

Update `package.json`

```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
    }
  }
```
