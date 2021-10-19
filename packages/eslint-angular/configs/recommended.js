module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/recommended--extra',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:rxjs/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: ['rxjs-angular', 'import'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        // RXJS
        'rxjs/finnish': [
          'error',
          {
            functions: true,
            methods: true,
            names: {
              '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
            },
            parameters: true,
            properties: true,
            strict: true,
            types: {
              '^EventEmitter$': false,
            },
            variables: true,
          },
        ],
        'rxjs/no-compat': 'error',
        'rxjs/no-cyclic-action': 'error',
        'rxjs/no-subclass': 'error',
        'rxjs/throw-error': 'error',
        'rxjs/no-unsafe-first': 'error',
        'rxjs-angular/prefer-takeuntil': [
          'error',
          {
            alias: ['untilDestroyed'],
            checkComplete: true,
            checkDecorators: ['Component'],
            checkDestroy: false,
          },
        ],
        // angular-eslint
        // typescript-eslint
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        // eslint
        'no-else-return': 'error',
        'arrow-body-style': ['error', 'always'],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['error', { parser: 'angular' }],
      },
    },
  ],
};
