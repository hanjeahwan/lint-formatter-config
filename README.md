# Linter and Formatter

Style Lint, Typescript Lint, Angular Lint, Commit Lint And Prettier Config Preset.

#### Installation

Install the linter or formatter u need.

```bash
yarn add @dlwlrma/tslint-config --D
yarn add @dlwlrma/tslint-config-angular --D
yarn add @dlwlrma/stylelint-config --D
yarn add @dlwlrma/commitlint-config --D
yarn add @dlwlrma/prettier-config --D
```

After install at `tslint.json`:

```json
{
  "extends": ["@dlwlrma/tslint-config", "@dlwlrma/tslint-config-angular"],
  "rules": {}
}
```

After install at `stylelint.config.js`:

```json
{
  "extends": ["@dlwlrma/stylelint-config"],
  "rules": {}
}
```

After install at `commitlint.config.js`:

```json
{
  "extends": ["@dlwlrma/commitlint-config"]
}
```

After install at `prettier.config.js`:

```json
module.exports = {
  ...require('@dlwlrma/prettier-config')
};
```

#### Git Hook

```bash
yarn add husky lint-staged --D
```

Git hook example for `Angular` project at `package.json`:

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
