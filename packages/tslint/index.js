module.exports = {
  extends: ['tslint:recommended'],
  rules: {
    'align': [true, 'parameters', 'statements'],
    'array-type': [true, 'array-simple'],
    'arrow-parens': false,
    'arrow-return-shorthand': true,
    'await-promise': true,
    'ban-comma-operator': true,
    'ban-types': [
      true,
      ['Object', 'Use {} instead.'],
      ['String', 'Use string instead.'],
      ['Number', 'Use number instead.'],
      ['Boolean', 'Use boolean instead.'],
      ['Function', 'Use specific callable interface instead.'],
    ],
    'binary-expression-operand-order': true,
    'callable-types': true,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    'curly': true,
    'deprecation': {
      severity: 'warn',
    },
    'encoding': true,
    'enforce-component-selector': false,
    'eofline': true,
    'import-blacklist': [true, ['rxjs/Rx', '^lodash/.*$', '^lodash$']],
    'import-spacing': true,
    'indent': [true, 'spaces', 2],
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': true,
    'label-position': true,
    'max-classes-per-file': false,
    'max-line-length': [true, 140],
    'member-access': [true, 'no-public'],
    'member-ordering': [
      true,
      {
        order: [
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'public-instance-method',
          'protected-static-method',
          'protected-instance-method',
          'private-static-method',
          'private-instance-method',
        ],
      },
    ],
    'new-parens': true,
    'newline-before-return': true,
    'no-angle-bracket-type-assertion': true,
    'no-any': true,
    'no-arg': true,
    'no-async-without-await': true,
    'no-bitwise': false,
    'no-conditional-assignment': true,
    'no-conflicting-life-cycle-hooks': false,
    'no-consecutive-blank-lines': [true],
    'no-console': [true, 'debug', 'log', 'info', 'time', 'timeEnd', 'trace'],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-imports': true,
    'no-duplicate-super': true,
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-empty': false,
    'no-empty-interface': true,
    'no-eval': true,
    'no-floating-promises': false,
    'no-for-in-array': true,
    'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-irregular-whitespace': true,
    'no-life-cycle-call': false,
    'no-magic-numbers': false,
    'no-misused-new': true,
    'no-namespace': [true, 'allow-declarations'],
    'no-non-null-assertion': false,
    'no-object-literal-type-assertion': [true, { 'allow-arguments': true }],
    'no-redundant-jsdoc': true,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-trailing-whitespace': true,
    'no-unnecessary-initializer': true,
    'no-unused-expression': true,
    'no-unnecessary-type-assertion': true,
    'no-var-keyword': true,
    'no-var-requires': false,
    'number-literal-format': true,
    'object-literal-key-quotes': [true, 'consistent-as-needed'],
    'one-line': [true, 'check-open-brace', 'check-catch', 'check-else', 'check-whitespace'],
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'lowercase-last',
        'named-imports-order': 'lowercase-first',
      },
    ],
    'prefer-conditional-expression': false,
    'prefer-const': true,
    'prefer-for-of': true,
    'prefer-method-signature': true,
    'prefer-object-spread': true,
    'prefer-readonly': true,
    'prefer-template': [true, 'allow-single-concat'],
    'quotemark': [true, 'single', 'avoid-escape'],
    'radix': true,
    'semicolon': [true, 'always', 'ignore-bound-class-methods'],
    'space-before-function-paren': {
      options: {
        anonymous: 'always',
        asyncArrow: 'always',
        constructor: 'never',
        method: 'never',
        named: 'never',
      },
    },
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ],
    'triple-equals': [true, 'allow-null-check'],
    'typedef': [true, 'call-signature', 'parameter', 'property-declaration'],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
    ],
    'unified-signatures': true,
    'unnecessary-bind': true,
    'unnecessary-else': true,
    'use-host-property-decorator': false,
    'use-isnan': true,
    'use-view-encapsulation': false,
    'variable-name': [true, 'ban-keywords', 'allow-leading-underscore'],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-type',
      'check-typecast',
      'check-preblock',
    ],
  },
};
