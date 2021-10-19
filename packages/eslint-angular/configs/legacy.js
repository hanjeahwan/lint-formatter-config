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
        // rxjs
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
        'rxjs/no-implicit-any-catch': 'off',
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
        // These 3 no-unsafe need angular form strong type
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // eslint
        'no-else-return': 'error',
        'arrow-body-style': ['error', 'always'],
        // import
        'import/no-duplicates': 'error',
        'import/no-unused-modules': 'error',
        'import/no-unassigned-import': [
          'error',
          {
            allow: ['zone.js', 'zone.js/**'],
          },
        ],
        'import/order': [
          'error',
          {
            'alphabetize': {
              order: 'asc',
              caseInsensitive: false,
            },
            'newlines-between': 'always',
            'groups': ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']],
            'pathGroups': [
              {
                pattern: '{@angular/**}',
                group: 'external',
                position: 'before',
              },
            ],
            'pathGroupsExcludedImportTypes': [],
          },
        ],
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
