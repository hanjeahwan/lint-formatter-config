# Linter and Formatter

Typescript Lint, Style Lint, Angular Code Lint, Commit Message Lint And Code Formatter Config Preset.

| Package                          | Description                                                         | Docs                                     |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| `@dlwlrma/tslint-config`         | Tslint Config                                                       | [Getting Started][tslint-config]         |
| `@dlwlrma/tslint-config-angular` | Tslint Config for Angular. Included codelyzer and rxjs-tslint-rules | [Getting Started][tslint-config-angular] |
| `@dlwlrma/stylelint-config`      | Stylelint Config                                                    | [Getting Started][stylelint-config]      |
| `@dlwlrma/prettier-config`       | Code Formatter Config                                               | [Getting Started][prettier-config]       |
| `@dlwlrma/commitlint-config`     | Commitlint Config                                                   | [Getting Started][commitlint-config]     |

[tslint-config]: https://github.com/hanjeahwan/lint-formatter-config/tree/master/packages/tslint
[tslint-config-angular]: https://github.com/hanjeahwan/lint-formatter-config/tree/master/packages/tslint-angular
[stylelint-config]: https://github.com/hanjeahwan/lint-formatter-config/tree/master/packages/stylelint
[prettier-config]: https://github.com/hanjeahwan/lint-formatter-config/tree/master/packages/prettier
[commitlint-config]: https://github.com/hanjeahwan/lint-formatter-config/tree/master/packages/commitlint

#### Git Hook

Setup for pre-commit hook to execute linter and formatter for commited file and commit message.

```bash
yarn add husky lint-staged --D
npm install husky lint-staged --save-dev
```

#### Example

Below is `package.json` for a angular project with use of `Less` css.

```json
  "scripts": {
    "lint": "npm run lint:ts && npm run lint:style",
    "lint:ts": "ng lint --fix",
    "lint:style": "stylelint \"**/*.less\" --syntax less --fix --allow-empty-input",
    "format": "prettier --write \"**/*.{js,json,less,ts,html,component.html}\""
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
      "pre-commit": "npm run lint && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,json,css,less,ts,html,component.html}": [
      "prettier --write"
    ]
  }
```
