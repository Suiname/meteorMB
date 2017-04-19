module.exports = {
  parser: 'babel-eslint',
  extends: [
    'meteor'
  ],
  plugins: [
    'babel',
  ],
  env: {
    jasmine: true,
    node: true,
  },
  rules: {
    'max-len': [2, 250, 2],
    'no-use-before-define': 'error',
    'no-param-reassign': ['error', { props: false }],
    'arrow-parens': 'error',
  }
};
