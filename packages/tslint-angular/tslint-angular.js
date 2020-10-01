'use strict';

module.exports = {
  rulesDirectory: ['codelyzer'],
  extends: ['rxjs-tslint-rules'],
  rules: {
    'angular-whitespace': [false, 'check-interpolation'],
    'component-class-suffix': true,
    'component-selector': [true, 'element', ['npx'], 'kebab-case'],
    'contextual-lifecycle': true,
    'directive-class-suffix': true,
    'directive-selector': [true, 'attribute', ['npx'], 'camelCase'],
    'no-attribute-decorator': true,
    'no-conflicting-lifecycle': true,
    'no-forward-ref': false,
    'no-host-metadata-property': true,
    'no-input-rename': true,
    'no-inputs-metadata-property': true,
    'no-output-native': true,
    'no-output-on-prefix': true,
    'no-output-rename': true,
    'no-outputs-metadata-property': true,
    'no-pipe-impure': true,
    'prefer-output-readonly': true,
    'template-banana-in-box': true,
    'template-no-negated-async': true,
    'use-lifecycle-interface': true,
    'use-pipe-transform-interface': true,
    'rxjs-finnish': {
      options: [
        {
          functions: true,
          methods: true,
          parameters: true,
          properties: true,
          variables: true,
        },
      ],
      severity: 'error',
    },
    'rxjs-no-nested-subscribe': {
      severity: 'error',
    },
    'rxjs-no-redundant-notify': {
      severity: 'error',
    },
    'rxjs-no-sharereplay': {
      options: [
        {
          allowConfig: true,
        },
      ],
      severity: 'error',
    },
    'rxjs-no-unsafe-catch': {
      severity: 'error',
    },
    'rxjs-no-unsafe-first': {
      severity: 'error',
    },
    'rxjs-no-unsafe-takeuntil': {
      severity: 'error',
    },
    'rxjs-prefer-angular-takeuntil': {
      options: [
        {
          alias: ['untilDestroyed', 'untilDestroyed$'],
          checkDecorators: ['Injectable', 'Component'],
        },
      ],
      severity: 'error',
    },
  },
};
