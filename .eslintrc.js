module.exports = {
  env:           {
    node:    true,
    browser: true,
    es2021:  true,
  },
  extends:       [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser:        '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion:  12,
    sourceType:   'module',
  },
  plugins:       ['react', '@typescript-eslint'],
  rules:         {
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
    '@typescript-eslint/no-empty-function': 'off',
    'default-param-last':                   'off',
    'no-return-await':                      'off',
    'no-multi-spaces':                      'off',
    'no-shadow':                            'off',
    'import/no-unresolved':                 'off',
    'import/extensions':                    'off',
    'import/prefer-default-export':         'off',
    'react/jsx-props-no-spreading':         'off',
    'react/jsx-no-useless-fragment':        'off',
    'no-confusing-arrow':                   'off',
    'react/prop-types':                     'off',
    'react/require-default-props':          'off',
    'no-use-before-define':                 'off',
  },
}
