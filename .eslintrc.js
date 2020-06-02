module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    // 'react/prop-types': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
  },
};
