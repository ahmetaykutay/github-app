module.exports = {
  env: {
    es6: true,
    node: false
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  plugins: ['flowtype', 'react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/destructuring-assignment': [2, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': [1, 'always'],
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'arrow-parens': 0
  },
  globals: {
    window: true,
    fetch: true,
    document: true
  }
}
