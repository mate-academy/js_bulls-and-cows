module.exports = {
  extends: '@mate-academy/eslint-config',
  rules: {
    "no-console": 0,
  },
  env: {
    jest: true
  },
  plugins: ['jest']
};
