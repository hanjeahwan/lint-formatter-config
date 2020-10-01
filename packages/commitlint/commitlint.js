"use strict";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0, "always", Infinity],
    'ticket-rule': [2, 'always', ['https://pulsifi.atlassian.net/browse/BETA-', 'BETA-']],
  },
  plugins: [
    {
      rules: {
        'ticket-rule': (parsed, _when, value) => {
          if (!Array.isArray(value)) {
            return [
              false,
              `Your ticket prefixes config should be an array of string`
            ];
          }

          if (!parsed.body) {
            return [
              false,
              `Your message body should contain commit message`
            ];
          }

          return [
            value.some((prefix) => parsed.body.includes(prefix)),
            `Your message body should contain ticket reference (${value.join(', ')})`,
          ];
        },
      },
    },
  ],
};