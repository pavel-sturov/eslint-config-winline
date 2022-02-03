module.exports = {
  env:            {
    node:    true,
    browser: true,
    es2021:  true,
  },
  extends:        [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'config/*',
  ],
  parser:         '@typescript-eslint/parser',
  parserOptions:  {
    ecmaFeatures: { jsx: true },
    ecmaVersion:  12,
    sourceType:   'module',
  },
  plugins:        ['react', '@typescript-eslint'],
  rules:          {
    '@typescript-eslint/ban-types':         [2, { extendDefaults: true, types: { '{}': false } }],
    '@typescript-eslint/no-shadow':         2,
    'arrow-parens':                         [2, 'as-needed'],
    'brace-style':                          [2, '1tbs'],
    'comma-dangle':                         [2, 'always-multiline'],
    curly:                                  [2, 'all'],
    'function-paren-newline':               [2, 'multiline'],
    indent:                                 [2, 2, { SwitchCase: 1, MemberExpression: 1 }],
    'lines-between-class-members':          [2, 'always', { exceptAfterSingleLine: true }],
    'key-spacing':                          [2, { mode: 'minimum', align: 'value' }],
    'max-len':                              [2, 120],
    'object-curly-newline':                 [2, { consistent: true }],
    'operator-linebreak':                   [
      2, 'none', { overrides: { '&&': 'after', '||': 'after', '?': 'after', ':': 'after' } },
    ],
    'operator-assignment':                  [2, 'never'],
    'react/jsx-filename-extension':         [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition':  [2, { namedComponents: 'arrow-function' }],
    semi:                                   [2, 'never'],
    'no-console':                           [1, { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-empty-function': 0,
    'consistent-return':                    0,
    'default-param-last':                   0,
    'import/no-unresolved':                 0,
    'import/extensions':                    0,
    'import/prefer-default-export':         0,
    'no-confusing-arrow':                   0,
    'no-multi-spaces':                      0,
    'no-return-await':                      0,
    'no-shadow':                            0,
    'no-use-before-define':                 0,
    'react/button-has-type':                0,
    'react/jsx-props-no-spreading':         0,
    'react/jsx-no-useless-fragment':        0,
    'react/prop-types':                     0,
    'react/require-default-props':          0,
  },
}
