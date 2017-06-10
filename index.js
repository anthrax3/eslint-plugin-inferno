'use strict';

var has = require('has');

var allRules = {
  'jsx-uses-inferno': require('./lib/rules/jsx-uses-inferno'),
  'no-multi-comp': require('./lib/rules/no-multi-comp'),
  'jsx-wrap-multilines': require('./lib/rules/jsx-wrap-multilines'),
  'self-closing-comp': require('./lib/rules/self-closing-comp'),
  'jsx-no-comment-textnodes': require('./lib/rules/jsx-no-comment-textnodes'),
  'no-array-index-key': require('./lib/rules/no-array-index-key'),
  'no-danger': require('./lib/rules/no-danger'),
  'no-set-state': require('./lib/rules/no-set-state'),
  'no-is-mounted': require('./lib/rules/no-is-mounted'),
  'no-did-mount-set-state': require('./lib/rules/no-did-mount-set-state'),
  'no-did-update-set-state': require('./lib/rules/no-did-update-set-state'),
  'no-render-return-value': require('./lib/rules/no-render-return-value'),
  'no-unescaped-entities': require('./lib/rules/no-unescaped-entities'),
  'inferno-in-jsx-scope': require('./lib/rules/inferno-in-jsx-scope'),
  'no-will-update-set-state': require('./lib/rules/no-will-update-set-state'),
  'jsx-uses-vars': require('./lib/rules/jsx-uses-vars'),
  'jsx-handler-names': require('./lib/rules/jsx-handler-names'),
  'jsx-pascal-case': require('./lib/rules/jsx-pascal-case'),
  'jsx-no-bind': require('./lib/rules/jsx-no-bind'),
  'jsx-no-undef': require('./lib/rules/jsx-no-undef'),
  'no-unknown-property': require('./lib/rules/no-unknown-property'),
  'jsx-curly-spacing': require('./lib/rules/jsx-curly-spacing'),
  'jsx-equals-spacing': require('./lib/rules/jsx-equals-spacing'),
  'jsx-sort-props': require('./lib/rules/jsx-sort-props'),
  'jsx-boolean-value': require('./lib/rules/jsx-boolean-value'),
  'sort-comp': require('./lib/rules/sort-comp'),
  'jsx-no-duplicate-props': require('./lib/rules/jsx-no-duplicate-props'),
  'jsx-max-props-per-line': require('./lib/rules/jsx-max-props-per-line'),
  'jsx-no-literals': require('./lib/rules/jsx-no-literals'),
  'jsx-indent-props': require('./lib/rules/jsx-indent-props'),
  'jsx-indent': require('./lib/rules/jsx-indent'),
  'jsx-closing-bracket-location': require('./lib/rules/jsx-closing-bracket-location'),
  'jsx-closing-tag-location': require('./lib/rules/jsx-closing-tag-location'),
  'jsx-space-before-closing': require('./lib/rules/jsx-space-before-closing'),
  'no-direct-mutation-state': require('./lib/rules/no-direct-mutation-state'),
  'forbid-component-props': require('./lib/rules/forbid-component-props'),
  'forbid-elements': require('./lib/rules/forbid-elements'),
  'prefer-es6-class': require('./lib/rules/prefer-es6-class'),
  'jsx-key': require('./lib/rules/jsx-key'),
  'no-string-refs': require('./lib/rules/no-string-refs'),
  'prefer-stateless-function': require('./lib/rules/prefer-stateless-function'),
  'require-render-return': require('./lib/rules/require-render-return'),
  'jsx-first-prop-new-line': require('./lib/rules/jsx-first-prop-new-line'),
  'jsx-no-target-blank': require('./lib/rules/jsx-no-target-blank'),
  'jsx-filename-extension': require('./lib/rules/jsx-filename-extension'),
  'require-optimization': require('./lib/rules/require-optimization'),
  'no-find-dom-node': require('./lib/rules/no-find-dom-node'),
  'no-danger-with-children': require('./lib/rules/no-danger-with-children'),
  'style-prop-object': require('./lib/rules/style-prop-object'),
  'no-children-prop': require('./lib/rules/no-children-prop'),
  'void-dom-elements-no-children': require('./lib/rules/void-dom-elements-no-children'),
  'jsx-tag-spacing': require('./lib/rules/jsx-tag-spacing')
};

function filterRules(rules, predicate) {
  var result = {};
  for (var key in rules) {
    if (has(rules, key) && predicate(rules[key])) {
      result[key] = rules[key];
    }
  }
  return result;
}

function configureAsError(rules) {
  var result = {};
  for (var key in rules) {
    if (!has(rules, key)) {
      continue;
    }
    result[`inferno/${key}`] = 2;
  }
  return result;
}

var activeRules = filterRules(allRules, function(rule) {
  return !rule.meta.deprecated;
});
var activeRulesConfig = configureAsError(activeRules);

var deprecatedRules = filterRules(allRules, function(rule) {
  return rule.meta.deprecated;
});

module.exports = {
  deprecatedRules: deprecatedRules,
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'inferno'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'inferno/jsx-key': 2,
        'inferno/jsx-no-comment-textnodes': 2,
        'inferno/jsx-no-duplicate-props': 2,
        'inferno/jsx-no-target-blank': 2,
        'inferno/jsx-no-undef': 2,
        'inferno/jsx-uses-inferno': 2,
        'inferno/jsx-uses-vars': 2,
        'inferno/no-children-prop': 2,
        'inferno/no-danger-with-children': 2,
        'inferno/no-direct-mutation-state': 2,
        'inferno/no-find-dom-node': 2,
        'inferno/no-is-mounted': 2,
        'inferno/no-render-return-value': 2,
        'inferno/no-string-refs': 2,
        'inferno/no-unescaped-entities': 2,
        'inferno/no-unknown-property': 2,
        'inferno/require-render-return': 2
      }
    },
    all: {
      plugins: [
        'inferno'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: activeRulesConfig
    }
  }
};
